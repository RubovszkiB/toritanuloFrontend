import { Link } from 'react-router-dom'
import TetelProgressBadge from './TetelProgressBadge'

export default function TetelReaderHeader({ tetel, progress, saveState, currentPage, pageCount, onComplete }) {
  return (
    <section className="tetel-pdf-hero">
      <div className="container">
        <div className="tetel-pdf-hero-grid">
          <div>
            <Link to="/tetelek" className="btn btn-outline-light rounded-4 px-3 mb-3">
              Vissza a tételekhez
            </Link>
            <div className="tetel-reader-kicker">PDF tételolvasó</div>
            <h1>{tetel?.cim || 'Tétel betöltése...'}</h1>
            <p>
              {tetel ? `#${tetel.sorszam} tétel` : 'Mobilra optimalizált, vizuális olvasónézet'} ·{' '}
              {pageCount ? `${currentPage}/${pageCount}. oldal` : 'PDF betöltése'}
            </p>
          </div>

          <div className="tetel-reader-status-card">
            <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
              <div>
                <span className="text-uppercase small fw-bold text-muted">Olvasási állapot</span>
                <div className="tetel-reader-status-value">{Number(progress?.haladasSzazalek || 0)}%</div>
              </div>
              <TetelProgressBadge progress={progress} />
            </div>
            <div className="tetel-reader-mini-line">
              <span style={{ width: `${Number(progress?.haladasSzazalek || 0)}%` }} />
            </div>
            <div className="d-flex justify-content-between align-items-center gap-3 mt-3">
              <span className={`tetel-save-state ${saveState === 'Mentési hiba' ? 'is-error' : ''}`}>
                {saveState || 'Automatikus mentés'}
              </span>
              <button type="button" className="btn btn-primary rounded-4 fw-bold px-3" onClick={onComplete}>
                Befejezettnek jelölöm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
