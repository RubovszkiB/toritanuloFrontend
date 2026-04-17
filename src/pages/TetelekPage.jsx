import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'
import { getTetelek } from '../services/tetelService'

export default function TetelekPage() {
  const [tetelek, setTetelek] = useState([])
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
      const data = await getTetelek(searchValue)
      setTetelek(data)
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

  const totalBekezdes = useMemo(
    () => tetelek.reduce((sum, item) => sum + (item.bekezdesDb || 0), 0),
    [tetelek]
  )

  return (
    <div className="app-shell">
      <AppNavbar />

      <main>
        <section className="page-hero py-4 py-md-5">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-8">
                <span className="section-kicker text-white-50">Tételközpont</span>
                <h1 className="display-6 fw-bold text-white mb-3">Tételek olvasása</h1>
                <p className="lead text-white-50 mb-0">
                  Válassz ki egy tételt a listából, és nyisd meg külön olvasó oldalon.
                  Telefonon egyoszlopos, tableten és nagyobb kijelzőn szellősebb elrendezésben jelenik meg.
                </p>
              </div>

              <div className="col-12 col-lg-4">
                <div className="card border-0 rounded-5 shadow-lg page-hero-card">
                  <div className="card-body p-4">
                    <div className="row g-3 text-center">
                      <div className="col-6">
                        <div className="mini-stat rounded-4 p-3 h-100">
                          <div className="mini-stat-value">{tetelek.length}</div>
                          <div className="mini-stat-label">Találat</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mini-stat rounded-4 p-3 h-100">
                          <div className="mini-stat-value">{totalBekezdes}</div>
                          <div className="mini-stat-label">Bekezdés</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section py-4 py-md-5">
          <div className="container">
            <div className="card border-0 shadow-sm rounded-5 search-panel mb-4">
              <div className="card-body p-3 p-md-4">
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
            </div>

            {error && (
              <div className="alert alert-danger rounded-4" role="alert">
                {error}
              </div>
            )}

            {loading ? (
              <div className="row g-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div className="col-12 col-md-6 col-xl-4" key={index}>
                    <div className="card border-0 shadow-sm rounded-5 h-100 overflow-hidden">
                      <div className="card-body p-4">
                        <div className="placeholder-glow mb-3">
                          <span className="placeholder col-4 rounded-3"></span>
                        </div>
                        <div className="placeholder-glow mb-2">
                          <span className="placeholder col-10 rounded-3"></span>
                        </div>
                        <div className="placeholder-glow mb-2">
                          <span className="placeholder col-8 rounded-3"></span>
                        </div>
                        <div className="placeholder-glow mt-4">
                          <span className="placeholder col-6 rounded-3"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="row g-4">
                {tetelek.map((tetel) => (
                  <div className="col-12 col-md-6 col-xl-4" key={tetel.id}>
                    <div className="card border-0 shadow-sm rounded-5 h-100 module-card tetel-list-card">
                      <div className="card-body p-4 d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                          <span className="badge rounded-pill text-bg-dark px-3 py-2">#{tetel.sorszam}</span>
                          <span className="badge text-bg-light rounded-pill px-3 py-2">
                            {tetel.bekezdesDb} bekezdés
                          </span>
                        </div>

                        <h2 className="h5 fw-bold mb-3 tetel-card-title">{tetel.cim}</h2>
                        <p className="text-muted mb-4">
                          Nyisd meg külön olvasó nézetben, ahol haladási sáv és nagyobb, tagoltabb törzsszöveg vár.
                        </p>

                        <Link to={`/tetelek/${tetel.id}`} className="btn btn-primary rounded-4 fw-semibold mt-auto">
                          Tétel megnyitása
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!loading && !error && tetelek.length === 0 && (
              <div className="card border-0 shadow-sm rounded-5 empty-state-card mt-4">
                <div className="card-body p-4 p-md-5 text-center">
                  <h2 className="h4 fw-bold mb-3">Nincs találat</h2>
                  <p className="text-muted mb-0">
                    Próbálj meg másik kulcsszót megadni, vagy állítsd vissza a listát.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
