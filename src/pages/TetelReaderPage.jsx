import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppFooter from '../components/AppFooter'
import AppNavbar from '../components/AppNavbar'
import TetelPdfViewer from '../components/tetel/TetelPdfViewer'
import TetelReaderHeader from '../components/tetel/TetelReaderHeader'
import TetelReadingProgressBar from '../components/tetel/TetelReadingProgressBar'
import { getTetelProgress, saveTetelProgress } from '../services/tetelProgressService'
import { getTetelById } from '../services/tetelService'
import { enrichTetelWithPdf } from '../services/tetelPdfService'

const emptyProgress = {
  haladasSzazalek: 0,
  lastPage: 1,
  scrollProgress: 0,
  pageCount: 0,
  completed: false,
  vanMentes: false,
  utolsoMentesAt: null,
}

export default function TetelReaderPage() {
  const { id } = useParams()
  const [tetel, setTetel] = useState(null)
  const [progress, setProgress] = useState(emptyProgress)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [saveState, setSaveState] = useState('')
  const progressReadyRef = useRef(false)
  const lastSavedRef = useRef('')

  useEffect(() => {
    async function loadTetelAndProgress() {
      setLoading(true)
      setError('')
      setSaveState('')
      progressReadyRef.current = false

      try {
        const [tetelData, progressData] = await Promise.all([
          getTetelById(id),
          getTetelProgress(id).catch(() => emptyProgress),
        ])

        const loadedProgress = { ...emptyProgress, ...progressData }
        setTetel(enrichTetelWithPdf(tetelData, loadedProgress))
        setProgress(loadedProgress)
        lastSavedRef.current = JSON.stringify(loadedProgress)
        progressReadyRef.current = true

        if (loadedProgress.vanMentes) {
          setSaveState('Elmentve')
        }
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

    loadTetelAndProgress()
  }, [id])

  useEffect(() => {
    if (!progressReadyRef.current) {
      return undefined
    }

    const serialized = JSON.stringify(progress)
    if (serialized === lastSavedRef.current) {
      return undefined
    }

    setSaveState('Mentés...')

    const timeoutId = setTimeout(async () => {
      try {
        const saved = await saveTetelProgress(id, progress)
        const nextProgress = { ...progress, ...saved, vanMentes: true }
        lastSavedRef.current = JSON.stringify(nextProgress)
        setProgress(nextProgress)
        setSaveState('Elmentve')
      } catch {
        setSaveState('Mentési hiba')
      }
    }, 900)

    return () => clearTimeout(timeoutId)
  }, [id, progress])

  const currentPage = Number(progress.lastPage || 1)
  const pageCount = Number(progress.pageCount || 0)

  const progressForHeader = useMemo(
    () => ({
      ...progress,
      vanMentes: progress.vanMentes || Number(progress.haladasSzazalek || 0) > 0,
    }),
    [progress],
  )

  function handleProgressChange(next) {
    setProgress((current) => {
      const nextProgress = {
        ...current,
        haladasSzazalek: Math.max(current.completed ? 100 : 0, next.haladasSzazalek),
        lastPage: next.currentPage,
        scrollProgress: next.scrollProgress,
        pageCount: next.pageCount,
        completed: current.completed || next.haladasSzazalek >= 100,
      }

      if (
        nextProgress.haladasSzazalek === current.haladasSzazalek &&
        nextProgress.lastPage === current.lastPage &&
        nextProgress.pageCount === current.pageCount &&
        Math.abs(Number(nextProgress.scrollProgress) - Number(current.scrollProgress || 0)) < 0.003
      ) {
        return current
      }

      return nextProgress
    })
  }

  function handleComplete() {
    setProgress((current) => ({
      ...current,
      haladasSzazalek: 100,
      completed: true,
      lastPage: current.pageCount || current.lastPage || 1,
      scrollProgress: 1,
    }))
  }

  return (
    <div className="app-shell">
      <AppNavbar />

      <main className="tetel-reader-main">
        <TetelReaderHeader
          tetel={tetel}
          progress={progressForHeader}
          saveState={saveState}
          currentPage={currentPage}
          pageCount={pageCount}
          onComplete={handleComplete}
        />

        <section className="tetel-reader-section">
          <div className="container">
            {error && (
              <div className="alert alert-danger rounded-4" role="alert">
                {error}
              </div>
            )}

            {loading ? (
              <div className="tetel-reader-loading">
                <div className="tetel-pdf-page-skeleton is-large" />
                <div className="tetel-pdf-page-skeleton is-large" />
              </div>
            ) : tetel ? (
              <div className="tetel-reader-layout">
                <TetelReadingProgressBar
                  progress={progress.haladasSzazalek}
                  currentPage={currentPage}
                  pageCount={pageCount}
                />

                <div className="tetel-reader-content">
                  <TetelPdfViewer
                    pdfPath={tetel.pdfMeta?.pdfPath}
                    initialPage={progress.lastPage}
                    initialScrollProgress={progress.scrollProgress}
                    onProgressChange={handleProgressChange}
                  />
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
