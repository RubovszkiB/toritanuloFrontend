export default function TetelReadingProgressBar({ progress = 0, currentPage = 1, pageCount = 0 }) {
  const safeProgress = Math.max(0, Math.min(100, Number(progress || 0)))

  return (
    <>
      <div className="tetel-mobile-progress" aria-hidden="true">
        <span style={{ width: `${safeProgress}%` }} />
      </div>
      <aside className="tetel-reader-rail" aria-label="Olvasási haladás">
        <div className="tetel-reader-rail-track">
          <span className="tetel-reader-rail-fill" style={{ height: `${safeProgress}%` }} />
          <span className="tetel-reader-rail-dot" style={{ top: `${safeProgress}%` }} />
        </div>
        <div className="tetel-reader-rail-label">
          <strong>{safeProgress}%</strong>
          <span>{pageCount ? `${currentPage}/${pageCount}. oldal` : `${currentPage}. oldal`}</span>
        </div>
      </aside>
    </>
  )
}
