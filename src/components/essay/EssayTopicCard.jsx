import { Link } from 'react-router-dom'

export default function EssayTopicCard({ topic, index = 0 }) {
  return (
    <article className="essay-topic-card" style={{ animationDelay: `${Math.min(index * 45, 360)}ms` }}>
      <div className="essay-topic-card-body">
        <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
          <span className="essay-pill">Rövid esszé</span>
          <span className="essay-count">{topic.pastPromptCount} korábbi feladat</span>
        </div>

        <h3>{topic.tema}</h3>
        <p>{topic.era}</p>

        <div className="essay-card-metrics">
          <span>{topic.keyElementCount} kulcselem</span>
          <span>{topic.important_concepts?.length || 0} fogalom</span>
          <span>{topic.important_people?.length || 0} személy</span>
        </div>
      </div>

      <Link to={`/esszek/${topic.slug}`} className="essay-card-action">
        Megnyitás
      </Link>
    </article>
  )
}
