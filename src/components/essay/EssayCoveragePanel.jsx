import KeyElementChip from './KeyElementChip'

export default function EssayCoveragePanel({ analysis, mode = 'guided' }) {
  const showDetailedHelp = mode === 'guided'

  return (
    <aside className="essay-helper-panel">
      <div className="essay-progress-ring" style={{ '--essay-progress': `${analysis.completion}%` }}>
        <strong>{analysis.completion}%</strong>
        <span>{analysis.status}</span>
      </div>

      <div className="essay-checklist">
        {analysis.categories.map((category) => (
          <div className={`essay-check-row ${category.covered ? 'is-covered' : ''}`} key={category.key}>
            <span>{category.covered ? '✓' : '·'}</span>
            <div>
              <strong>{category.label}</strong>
              <small>
                {category.used.length}/{category.items.length || 1} elem felismerve
              </small>
            </div>
          </div>
        ))}
      </div>

      {showDetailedHelp && (
        <>
          <div className="essay-helper-block">
            <h3>Már szerepel</h3>
            <div className="essay-chip-cloud">
              {analysis.categories.flatMap((category) =>
                category.used.slice(0, 4).map((item) => (
                  <KeyElementChip active key={`${category.key}-${item}`}>
                    {item}
                  </KeyElementChip>
                )),
              )}
              {!analysis.usedCount && <span className="essay-muted">Kezdj el írni, és itt megjelennek a talált elemek.</span>}
            </div>
          </div>

          <div className="essay-helper-block">
            <h3>Finom ajánlás</h3>
            <ul className="essay-suggestions">
              {analysis.suggestions.map((suggestion) => (
                <li key={suggestion}>{suggestion}</li>
              ))}
              {!analysis.suggestions.length && <li>A tartalmi gerinc megvan, most a magyarázó kapcsolatokat erősítsd.</li>}
            </ul>
          </div>
        </>
      )}
    </aside>
  )
}
