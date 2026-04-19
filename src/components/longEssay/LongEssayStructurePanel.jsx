export default function LongEssayStructurePanel({ topic, analysis }) {
  return (
    <section className="long-structure-card">
      <div className="essay-section-kicker">Bővített vázlat</div>
      <h2>Hosszú esszé szerkezete</h2>
      <div className="long-structure-list">
        {analysis.structure.map((part) => (
          <div className={`long-structure-step ${part.covered ? 'is-covered' : ''}`} key={part.key}>
            <span>{part.covered ? '✓' : '·'}</span>
            <div>
              <strong>{part.label}</strong>
              <p>{topic.extended_outline?.[part.key]}</p>
              <small>{part.hint}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
