import { Link } from 'react-router-dom'

export default function ComplexEssayTopicCard({ topic, index = 0 }) {
  return (
    <article
      className={`essay-topic-card complex-essay-card is-${topic.typeMeta?.tone || 'timeline'}`}
      style={{ animationDelay: `${Math.min(index * 45, 360)}ms` }}
    >
      <div className="essay-topic-card-body">
        <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
          <span className="essay-pill complex-essay-pill">{topic.typeMeta?.shortLabel}</span>
          <span className="essay-count">{topic.exam}</span>
        </div>

        <h3>{topic.theme}</h3>
        <p>{topic.period}</p>

        <div className="essay-card-metrics">
          <span>{topic.requiredAxisCount} szempont</span>
          <span>{topic.keyElementCount} kulcselem</span>
          <span>{topic.previewCount} eredeti feladat</span>
        </div>
      </div>

      <Link to={`/komplex-esszek/${topic.slug}`} className="essay-card-action complex-essay-action">
        Megnyitás
      </Link>
    </article>
  )
}
