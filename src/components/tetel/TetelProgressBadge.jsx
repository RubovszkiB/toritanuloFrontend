import { formatProgressLabel } from '../../services/tetelPdfService'

export default function TetelProgressBadge({ progress }) {
  const value = Number(progress?.haladasSzazalek || 0)
  const completed = Boolean(progress?.completed) || value >= 100

  return (
    <span className={`tetel-progress-badge ${completed ? 'is-complete' : progress?.vanMentes ? 'is-started' : ''}`}>
      <span>{formatProgressLabel(progress)}</span>
    </span>
  )
}
