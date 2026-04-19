import KeyElementChip from '../essay/KeyElementChip'

export default function LongEssayCoveragePanel({ analysis, mode = 'guided' }) {
  const showHelp = mode === 'guided'

  return (
    <aside className="essay-helper-panel long-helper-panel">
      <div className="essay-progress-ring long-progress-ring" style={{ '--essay-progress': `${analysis.completion}%` }}>
        <strong>{analysis.completion}%</strong>
        <span>{analysis.status}</span>
      </div>

      <div className="long-score-grid">
        <div>
          <strong>{analysis.contentScore}</strong>
          <span>tartalom</span>
        </div>
        <div>
          <strong>{analysis.requiredScore}</strong>
          <span>minimum</span>
        </div>
        <div>
          <strong>{analysis.structureScore}</strong>
          <span>szerkezet</span>
        </div>
      </div>

      <div className="essay-helper-block">
        <h3>Kötelező minimum</h3>
        <div className="essay-checklist">
          {analysis.requiredElements.map((item) => (
            <div className={`essay-check-row ${item.covered ? 'is-covered' : ''}`} key={item.key}>
              <span>{item.covered ? '✓' : '·'}</span>
              <div>
                <strong>{item.label}</strong>
                <small>{item.used.length}/{item.items.length} felismerve</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showHelp && (
        <>
          <div className="essay-helper-block">
            <h3>Hiányzó fókusz</h3>
            <ul className="essay-suggestions">
              {analysis.suggestions.map((suggestion) => (
                <li key={suggestion}>{suggestion}</li>
              ))}
              {!analysis.suggestions.length && <li>A fő vázlat megvan, most érveléssel és kapcsolatokkal erősítsd.</li>}
            </ul>
          </div>

          <div className="essay-helper-block">
            <h3>Már felhasznált elemek</h3>
            <div className="essay-chip-cloud">
              {analysis.categories.flatMap((category) =>
                category.used.slice(0, 3).map((item) => (
                  <KeyElementChip active key={`${category.key}-${item}`}>
                    {item}
                  </KeyElementChip>
                )),
              )}
              {!analysis.usedCount && <span className="essay-muted">A talált kulcselemek írás közben jelennek meg.</span>}
            </div>
          </div>
        </>
      )}
    </aside>
  )
}
