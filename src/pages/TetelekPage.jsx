import { useEffect, useMemo, useState } from 'react'
import AppFooter from '../components/AppFooter'
import AppNavbar from '../components/AppNavbar'
import TetelCard from '../components/tetel/TetelCard'
import TetelContinueCard from '../components/tetel/TetelContinueCard'
import { getAllTetelProgress, getRecentTetelProgress } from '../services/tetelProgressService'
import { getTetelek } from '../services/tetelService'
import { enrichTetelWithPdf, getProgressForTetel } from '../services/tetelPdfService'

export default function TetelekPage() {
  const [tetelek, setTetelek] = useState([])
  const [progressList, setProgressList] = useState([])
  const [recentProgress, setRecentProgress] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadTetelek('')
  }, [])

  async function loadTetelek(searchValue) {
    setLoading(true)
    setError('')

    try {
      const [tetelData, allProgressData, recentProgressData] = await Promise.all([
        getTetelek(searchValue),
        getAllTetelProgress().catch(() => []),
        getRecentTetelProgress().catch(() => []),
      ])

      setTetelek(tetelData)
      setProgressList(allProgressData)
      setRecentProgress(recentProgressData)
    } catch (err) {
      if (err.message === 'Failed to fetch') {
        setError('A backend nem érhető el. Nézd meg, hogy fut-e a szerver a megfelelő HTTPS porton.')
      } else {
        setError(err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    loadTetelek(search)
  }

  function handleReset() {
    setSearch('')
    loadTetelek('')
  }

  const enrichedTetelek = useMemo(
    () => tetelek.map((tetel) => enrichTetelWithPdf(tetel, getProgressForTetel(progressList, tetel.id))),
    [progressList, tetelek],
  )

  const continueTetel = useMemo(() => {
    const recent = recentProgress.find((item) => Number(item.haladasSzazalek || 0) < 100) || recentProgress[0]
    if (!recent) {
      return null
    }

    const tetel = tetelek.find((item) => Number(item.id) === Number(recent.tetelId))
    return tetel ? enrichTetelWithPdf(tetel, recent) : null
  }, [recentProgress, tetelek])

  const startedCount = progressList.filter((item) => item.vanMentes).length
  const completedCount = progressList.filter((item) => item.completed || Number(item.haladasSzazalek) >= 100).length

  return (
    <div className="app-shell">
      <AppNavbar />

      <main>
        <section className="tetel-list-hero">
          <div className="container">
            <div className="tetel-list-hero-grid">
              <div>
                <span className="section-kicker text-white-50">Tételközpont</span>
                <h1>PDF tételolvasó</h1>
                <p>
                  Eredeti PDF-ek képekkel, tördeléssel és automatikus folytatással. Telefonon a teljes felület
                  olvasásra van hangolva.
                </p>
              </div>

              <div className="tetel-list-stats">
                <div>
                  <strong>{tetelek.length}</strong>
                  <span>Tétel</span>
                </div>
                <div>
                  <strong>{startedCount}</strong>
                  <span>Elkezdve</span>
                </div>
                <div>
                  <strong>{completedCount}</strong>
                  <span>Befejezve</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section py-4 py-md-5">
          <div className="container">
            {continueTetel && <TetelContinueCard tetel={continueTetel} />}

            <div className="tetel-search-panel">
              <form className="row g-3 align-items-end" onSubmit={handleSubmit}>
                <div className="col-12 col-lg-8">
                  <label className="form-label fw-semibold">Keresés címre vagy szövegre</label>
                  <input
                    type="text"
                    className="form-control form-control-lg rounded-4"
                    placeholder="Például: reformáció, Rákóczi, dualizmus"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="col-6 col-lg-2 d-grid">
                  <button type="submit" className="btn btn-primary btn-lg rounded-4 fw-semibold">
                    Keresés
                  </button>
                </div>
                <div className="col-6 col-lg-2 d-grid">
                  <button type="button" className="btn btn-outline-secondary btn-lg rounded-4 fw-semibold" onClick={handleReset}>
                    Alaphelyzet
                  </button>
                </div>
              </form>
            </div>

            {error && (
              <div className="alert alert-danger rounded-4" role="alert">
                {error}
              </div>
            )}

            {loading ? (
              <div className="tetel-pdf-grid">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div className="tetel-card-skeleton" key={index} />
                ))}
              </div>
            ) : (
              <div className="tetel-pdf-grid">
                {enrichedTetelek.map((tetel) => (
                  <TetelCard tetel={tetel} key={tetel.id} />
                ))}
              </div>
            )}

            {!loading && !error && enrichedTetelek.length === 0 && (
              <div className="essay-empty-state mt-4">
                <h2>Nincs találat</h2>
                <p>Próbálj meg másik kulcsszót megadni, vagy állítsd vissza a listát.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
