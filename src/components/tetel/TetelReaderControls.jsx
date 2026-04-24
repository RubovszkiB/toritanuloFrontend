export default function TetelReaderControls({
  zoomLevel = 1,
  currentPage = 1,
  pageCount = 0,
  saveState = '',
  isFullscreen = false,
  onZoomOut,
  onZoomReset,
  onZoomIn,
  onToggleFullscreen,
}) {
  const zoomPercent = Math.round(zoomLevel * 100)

  return (
    <aside className={`tetel-reader-controls ${isFullscreen ? 'is-fullscreen' : ''}`} aria-label="Olvasási vezérlők">
      <div className="tetel-reader-floating-card">
        <div className="tetel-reader-floating-label">Hol tartasz</div>
        <div className="tetel-reader-floating-value">
          {pageCount ? `${currentPage}/${pageCount}. oldal` : `${currentPage}. oldal`}
        </div>
        <div className="tetel-reader-floating-meta">{saveState || 'Automatikus mentés'}</div>
      </div>

      <div className="tetel-reader-floating-card tetel-reader-zoom-card">
        <div className="tetel-reader-floating-label">Nagyítás</div>
        <div className="tetel-reader-zoom-group" role="group" aria-label="Nagyítás vezérlők">
          <button type="button" className="btn btn-outline-secondary rounded-pill" onClick={onZoomOut}>
            -
          </button>
          <button type="button" className="btn btn-outline-secondary rounded-pill tetel-reader-zoom-reset" onClick={onZoomReset}>
            {zoomPercent}%
          </button>
          <button type="button" className="btn btn-outline-secondary rounded-pill" onClick={onZoomIn}>
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        className={`btn tetel-reader-fullscreen-toggle rounded-pill ${isFullscreen ? 'btn-light' : 'btn-primary'}`}
        onClick={onToggleFullscreen}
      >
        {isFullscreen ? 'Kilépés az olvasó módból' : 'Teljes képernyős olvasás'}
      </button>
    </aside>
  )
}
