import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.mjs?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl

function PdfPage({ pdf, pageNumber, containerWidth, onPageVisible }) {
  const canvasRef = useRef(null)
  const wrapperRef = useRef(null)
  const [rendering, setRendering] = useState(true)

  useEffect(() => {
    let cancelled = false
    let renderTask = null

    async function renderPage() {
      if (!pdf || !containerWidth) {
        return
      }

      setRendering(true)
      const page = await pdf.getPage(pageNumber)
      if (cancelled) {
        return
      }

      const baseViewport = page.getViewport({ scale: 1 })
      const scale = Math.min(2.25, Math.max(0.6, containerWidth / baseViewport.width))
      const viewport = page.getViewport({ scale })
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')

      canvas.width = Math.floor(viewport.width)
      canvas.height = Math.floor(viewport.height)
      canvas.style.width = `${Math.floor(viewport.width)}px`
      canvas.style.height = `${Math.floor(viewport.height)}px`

      renderTask = page.render({ canvasContext: context, viewport })
      await renderTask.promise

      if (!cancelled) {
        setRendering(false)
      }
    }

    renderPage().catch(() => {
      if (!cancelled) {
        setRendering(false)
      }
    })

    return () => {
      cancelled = true
      renderTask?.cancel?.()
    }
  }, [containerWidth, pageNumber, pdf])

  useEffect(() => {
    const node = wrapperRef.current
    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onPageVisible(pageNumber)
        }
      },
      { threshold: 0.55 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [onPageVisible, pageNumber])

  return (
    <div className="tetel-pdf-page" ref={wrapperRef} data-page={pageNumber}>
      <div className="tetel-pdf-page-label">{pageNumber}. oldal</div>
      {rendering && <div className="tetel-pdf-page-skeleton" />}
      <canvas ref={canvasRef} />
    </div>
  )
}

export default function TetelPdfViewer({ pdfPath, initialPage = 1, initialScrollProgress = 0, onProgressChange }) {
  const scrollRef = useRef(null)
  const measureRef = useRef(null)
  const restoredRef = useRef(false)
  const [pdf, setPdf] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(Math.max(1, Number(initialPage || 1)))
  const [containerWidth, setContainerWidth] = useState(0)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    setPdf(null)
    setPageCount(0)
    setError('')
    restoredRef.current = false

    const task = pdfjsLib.getDocument(pdfPath)
    task.promise
      .then((loadedPdf) => {
        if (cancelled) {
          loadedPdf.destroy()
          return
        }

        setPdf(loadedPdf)
        setPageCount(loadedPdf.numPages)
      })
      .catch(() => {
        if (!cancelled) {
          setError('A PDF betöltése nem sikerült.')
        }
      })

    return () => {
      cancelled = true
      task.destroy()
    }
  }, [pdfPath])

  useEffect(() => {
    const node = measureRef.current
    if (!node) {
      return undefined
    }

    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(Math.floor(entry.contentRect.width))
    })

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const reportProgress = useCallback(
    (pageNumber) => {
      const scroller = scrollRef.current
      const maxScroll = scroller ? scroller.scrollHeight - scroller.clientHeight : 0
      const scrollProgress = maxScroll > 0 ? scroller.scrollTop / maxScroll : 0
      const progress = pageCount > 0
        ? Math.round(Math.min(100, Math.max(0, ((pageNumber - 1 + scrollProgress / pageCount) / pageCount) * 100)))
        : 0

      onProgressChange?.({
        currentPage: pageNumber,
        pageCount,
        scrollProgress,
        haladasSzazalek: progress,
      })
    },
    [onProgressChange, pageCount],
  )

  const handlePageVisible = useCallback(
    (pageNumber) => {
      setCurrentPage(pageNumber)
      reportProgress(pageNumber)
    },
    [reportProgress],
  )

  useEffect(() => {
    const scroller = scrollRef.current
    if (!scroller) {
      return undefined
    }

    const onScroll = () => reportProgress(currentPage)
    scroller.addEventListener('scroll', onScroll, { passive: true })
    return () => scroller.removeEventListener('scroll', onScroll)
  }, [currentPage, reportProgress])

  useEffect(() => {
    if (!pageCount || !containerWidth || restoredRef.current) {
      return
    }

    const scroller = scrollRef.current
    const targetPage = scroller?.querySelector(`[data-page="${Math.max(1, Number(initialPage || 1))}"]`)
    if (!scroller || !targetPage) {
      return
    }

    restoredRef.current = true
    requestAnimationFrame(() => {
      const maxScroll = scroller.scrollHeight - scroller.clientHeight
      const savedScrollTop = maxScroll * Math.max(0, Math.min(1, Number(initialScrollProgress || 0)))
      scroller.scrollTop = Math.max(targetPage.offsetTop - 12, savedScrollTop)
    })
  }, [containerWidth, initialPage, initialScrollProgress, pageCount])

  const pages = useMemo(() => Array.from({ length: pageCount }, (_, index) => index + 1), [pageCount])

  if (!pdfPath) {
    return (
      <div className="tetel-pdf-empty">
        <h2>PDF nem található</h2>
        <p>Ehhez a tételhez nincs kapcsolt PDF a manifestben.</p>
      </div>
    )
  }

  return (
    <div className="tetel-pdf-viewer-shell">
      <div className="tetel-pdf-viewer-top">
        <span>{pageCount ? `${currentPage}/${pageCount}. oldal` : 'PDF betöltése'}</span>
        <a href={pdfPath} target="_blank" rel="noreferrer" className="btn btn-outline-secondary btn-sm rounded-4">
          PDF megnyitása
        </a>
      </div>

      <div className="tetel-pdf-scroll" ref={scrollRef}>
        <div className="tetel-pdf-measure" ref={measureRef}>
          {error ? (
            <div className="tetel-pdf-empty">
              <h2>Nem sikerült betölteni</h2>
              <p>{error}</p>
            </div>
          ) : !pdf ? (
            <div className="tetel-pdf-loading">
              {Array.from({ length: 3 }).map((_, index) => (
                <div className="tetel-pdf-page-skeleton is-large" key={index} />
              ))}
            </div>
          ) : (
            pages.map((pageNumber) => (
              <PdfPage
                key={pageNumber}
                pdf={pdf}
                pageNumber={pageNumber}
                containerWidth={containerWidth}
                onPageVisible={handlePageVisible}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
