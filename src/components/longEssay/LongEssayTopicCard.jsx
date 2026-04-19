import { Link } from 'react-router-dom'

export default function LongEssayTopicCard({ topic, index = 0 }) {
  return (
    <article className="essay-topic-card long-essay-card" style={{ animationDelay: `${Math.min(index * 45, 360)}ms` }}>
      <div className="essay-topic-card-body">
        <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
          <span className="essay-pill long-essay-pill">Hosszú esszé</span>
          <span className="essay-count">{topic.pastPromptCount} korábbi feladat</span>
        </div>

        <h3>{topic.tema}</h3>
        <p>{topic.era}</p>

        <div className="essay-card-metrics">
          <span>{topic.keyElementCount} kulcselem</span>
          <span>{topic.requiredCount} minimum elem</span>
          <span>{topic.common_mistakes?.length || 0} tipikus hiba</span>
        </div>
      </div>

      <Link to={`/hosszu-esszek/${topic.slug}`} className="essay-card-action long-essay-action">
        Megnyitás
      </Link>
    </article>
  )
}
