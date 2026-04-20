import { Link } from 'react-router-dom'
import { formatLastOpened } from '../../services/tetelPdfService'
import TetelProgressBadge from './TetelProgressBadge'

export default function TetelCard({ tetel }) {
  const progress = tetel.progress
  const hasStarted = Boolean(progress?.vanMentes)
  const actionLabel = hasStarted && Number(progress?.haladasSzazalek || 0) < 100 ? 'Folytatás' : 'Tétel megnyitása'

  return (
    <article className="tetel-pdf-card">
      <div className="tetel-pdf-card-top">
        <span className="tetel-number-pill">#{tetel.sorszam}</span>
        <TetelProgressBadge progress={progress} />
      </div>

      <h2>{tetel.cim}</h2>
      <p>
        {tetel.hasPdf
          ? 'PDF-alapú olvasónézet képekkel, eredeti tördeléssel és automatikus folytatással.'
          : 'Ehhez a tételhez még nincs kapcsolt PDF a manifestben.'}
      </p>

      <div className="tetel-card-progress">
        <span style={{ width: `${Number(progress?.haladasSzazalek || 0)}%` }} />
      </div>

      <div className="tetel-card-meta">
        <span>{tetel.hasPdf ? tetel.pdfMeta.pdfFile : 'PDF hiányzik'}</span>
        <span>{formatLastOpened(progress?.utolsoMentesAt) || 'Nincs mentés'}</span>
      </div>

      <Link to={`/tetelek/${tetel.id}`} className="btn btn-primary rounded-4 fw-bold mt-auto">
        {actionLabel}
      </Link>
    </article>
  )
}
