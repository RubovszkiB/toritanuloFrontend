import { Link } from 'react-router-dom'
import { formatLastOpened } from '../../services/tetelPdfService'

export default function TetelContinueCard({ tetel }) {
  if (!tetel) {
    return null
  }

  const progress = tetel.progress

  return (
    <section className="tetel-continue-card">
      <div>
        <span className="tetel-reader-kicker">Folytatás</span>
        <h2>{tetel.cim}</h2>
        <p>
          Ott folytathatod, ahol abbahagytad: {progress?.lastPage || 1}. oldal ·{' '}
          {Number(progress?.haladasSzazalek || 0)}% · {formatLastOpened(progress?.utolsoMentesAt)}
        </p>
      </div>
      <Link to={`/tetelek/${tetel.id}`} className="btn btn-primary rounded-4 fw-bold px-4">
        Folytatás itt
      </Link>
    </section>
  )
}
