import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'
import { getTetelById } from '../services/tetelService'
import { getTetelProgress, saveTetelProgress } from '../services/tetelProgressService'

function normalizeParagraphs(text) {
  return text
    .split(/\n\s*\n|\r\n\s*\r\n/)
    .map((item) => item.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
}

export default function TetelReaderPage() {
  const { id } = useParams()
  const [tetel, setTetel] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [progress, setProgress] = useState(0)
  const [saveState, setSaveState] = useState('')
  const lastLoadedProgressRef = useRef(0)
  const progressReadyRef = useRef(false)

  useEffect(() => {
    async function loadTetelAndProgress() {
      setLoading(true)
      setError('')
      setSaveState('')
      progressReadyRef.current = false

      try {
        const [tetelData, progressData] = await Promise.all([
          getTetelById(id),
          getTetelProgress(id),
        ])

        setTetel(tetelData)

        const backendProgress = Number(progressData?.haladasSzazalek || 0)
        setProgress(backendProgress)
        localStorage.setItem(`tetel-progress-${id}`, String(backendProgress))
        lastLoadedProgressRef.current = backendProgress
        progressReadyRef.current = true

        if (progressData?.vanMentes) {
          setSaveState('Elmentve')
        }
      } catch (err) {
        const localFallback = Number(localStorage.getItem(`tetel-progress-${id}`) || 0)
        setProgress(localFallback)
        lastLoadedProgressRef.current = localFallback
        progressReadyRef.current = true

        if (err.message === 'Failed to fetch') {
          setError('A backend nem érhető el. Nézd meg, hogy fut-e a szerver a megfelelő HTTPS porton.')
        } else {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    loadTetelAndProgress()
  }, [id])

  useEffect(() => {
    if (!progressReadyRef.current) {
      return undefined
    }

    localStorage.setItem(`tetel-progress-${id}`, String(progress))

    if (progress === lastLoadedProgressRef.current) {
      return undefined
    }

    setSaveState('Mentés...')

    const timeoutId = setTimeout(async () => {
      try {
        await saveTetelProgress(id, progress)
        lastLoadedProgressRef.current = progress
        setSaveState('Elmentve')
      } catch {
        setSaveState('Mentési hiba')
      }
    }, 900)

    return () => clearTimeout(timeoutId)
  }, [id, progress])

  const paragraphs = useMemo(() => normalizeParagraphs(tetel?.tartalom || ''), [tetel])

  const highlightedParagraphCount = useMemo(() => {
    if (paragraphs.length === 0) {
      return 0
    }

    if (progress <= 0) {
      return 0
    }

    return Math.min(paragraphs.length, Math.ceil((progress / 100) * paragraphs.length))
  }, [paragraphs.length, progress])

  return (
    <div className="app-shell">
      <AppNavbar />

      <main>
        <section className="reader-hero py-4 py-md-5">
          <div className="container">
            <div className="reader-topbar d-flex flex-column flex-lg-row justify-content-between gap-3 align-items-lg-center mb-4">
              <div>
                <Link to="/tetelek" className="btn btn-outline-light rounded-4 px-3 mb-3">
                  ← Vissza a tételekhez
                </Link>
                <div className="text-white-50 small mb-2">Olvasó nézet</div>
                <h1 className="h2 h1-md fw-bold text-white mb-0">
                  {loading ? 'Tétel betöltése...' : tetel?.cim || 'Tétel'}
                </h1>
              </div>

              <div className="reader-progress-card rounded-5 p-3 p-md-4">
                <div className="d-flex justify-content-between align-items-center gap-3 mb-2">
                  <span className="fw-semibold text-dark">Olvasási csúszka</span>
                  <span className="badge text-bg-dark rounded-pill px-3 py-2">{progress}%</span>
                </div>
                <input
                  type="range"
                  className="form-range progress-slider"
                  min="0"
                  max="100"
                  step="1"
                  value={progress}
                  onChange={(e) => setProgress(Number(e.target.value))}
                  aria-label="Olvasási haladás"
                />
                <div className="reader-progress-labels d-flex justify-content-between small mt-2">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
                <div className="progress progress-soft rounded-pill mt-3" role="progressbar" aria-label="Olvasási haladás" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar progress-bar-soft rounded-pill" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="reader-progress-note mt-3 rounded-4 p-3">
                  <div className="d-flex flex-column flex-sm-row justify-content-between gap-2 mb-1">
                    <div className="fw-semibold">Jelölés a szövegben</div>
                    <span className={`reader-save-badge ${saveState === 'Mentési hiba' ? 'is-error' : ''}`}>
                      {saveState || 'Nincs változás'}
                    </span>
                  </div>
                  <div className="small text-muted mb-0">
                    A csúszkáig tartó rész sárgával ki van emelve. Most: <strong>{highlightedParagraphCount}</strong> / <strong>{paragraphs.length}</strong> bekezdés van megjelölve. A rendszer felhasználónként az <strong>5 legutóbbi</strong> tétel haladását tartja meg.
                  </div>
                </div>
              </div>
            </div>

            {!loading && tetel && (
              <div className="row g-3 reader-stats-row">
                <div className="col-6 col-md-3">
                  <div className="reader-stat-card rounded-4 p-3 h-100">
                    <div className="reader-stat-value">#{tetel.sorszam}</div>
                    <div className="reader-stat-label">Sorszám</div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="reader-stat-card rounded-4 p-3 h-100">
                    <div className="reader-stat-value">{paragraphs.length}</div>
                    <div className="reader-stat-label">Bekezdés</div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="reader-stat-card rounded-4 p-3 h-100">
                    <div className="reader-stat-value">{highlightedParagraphCount}</div>
                    <div className="reader-stat-label">Kijelölve</div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="reader-stat-card rounded-4 p-3 h-100">
                    <div className="reader-stat-value">{progress}%</div>
                    <div className="reader-stat-label">Haladás</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="content-section py-4 py-md-5">
          <div className="container">
            {error && (
              <div className="alert alert-danger rounded-4" role="alert">
                {error}
              </div>
            )}

            {loading ? (
              <div className="card border-0 shadow-sm rounded-5 reader-card">
                <div className="card-body p-4 p-md-5">
                  <div className="placeholder-glow mb-4">
                    <span className="placeholder col-6 rounded-3"></span>
                  </div>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div className="placeholder-glow mb-3" key={index}>
                      <span className="placeholder col-12 rounded-3"></span>
                    </div>
                  ))}
                </div>
              </div>
            ) : tetel ? (
              <div className="row g-4 align-items-start">
                <div className="col-12 col-xl-3">
                  <div className="card border-0 shadow-sm rounded-5 reader-side-card sticky-xl-top">
                    <div className="card-body p-4">
                      <div className="small text-muted text-uppercase fw-semibold mb-2">Tételadatok</div>
                      <h2 className="h5 fw-bold mb-3">{tetel.cim}</h2>
                      <div className="d-grid gap-3">
                        <div className="reader-meta-box rounded-4 p-3">
                          <div className="small text-muted mb-1">Sorszám</div>
                          <div className="fw-semibold">{tetel.sorszam}</div>
                        </div>
                        <div className="reader-meta-box rounded-4 p-3">
                          <div className="small text-muted mb-1">Bekezdések</div>
                          <div className="fw-semibold">{paragraphs.length}</div>
                        </div>
                        <div className="reader-meta-box rounded-4 p-3">
                          <div className="small text-muted mb-1">Jelölt rész</div>
                          <div className="fw-semibold">{progress}%</div>
                        </div>
                        <div className="reader-meta-box rounded-4 p-3">
                          <div className="small text-muted mb-1">Forrásfájl</div>
                          <div className="fw-semibold text-break">{tetel.forrasFajlnev}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-xl-9">
                  <div className="card border-0 shadow-sm rounded-5 reader-card overflow-hidden">
                    <div className="card-body p-4 p-md-5 p-xl-5">
                      <div className="reader-title-wrap mb-4 pb-4 border-bottom">
                        <span className="badge reader-badge rounded-pill px-3 py-2 mb-3">#{tetel.sorszam} tétel</span>
                        <h2 className="reader-main-title fw-bold mb-3">{tetel.cim}</h2>
                        <p className="text-muted mb-0">
                          A sárga rész mutatja, meddig jutottál a tanulásban. A csúszka állása kis késleltetéssel automatikusan mentődik.
                        </p>
                      </div>

                      <div className="reader-content">
                        {paragraphs.map((paragraph, index) => {
                          const isHighlighted = index < highlightedParagraphCount

                          return (
                            <p
                              key={`${index}-${paragraph.slice(0, 24)}`}
                              className={`reader-paragraph mb-4 ${isHighlighted ? 'reader-paragraph-highlighted' : ''}`}
                            >
                              {paragraph}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
