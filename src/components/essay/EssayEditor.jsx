import { useMemo, useState } from 'react'
import { analyzeEssayDraft } from '../../services/essayService'
import EssayCoveragePanel from './EssayCoveragePanel'

export default function EssayEditor({ topic }) {
  const [draft, setDraft] = useState('')
  const [mode, setMode] = useState('guided')
  const analysis = useMemo(() => analyzeEssayDraft(topic, draft), [draft, topic])

  return (
    <section className="essay-writer-grid">
      <div className="essay-editor-card">
        <div className="essay-editor-toolbar">
          <div>
            <span className="essay-section-kicker">Mini esszévázlat</span>
            <h2>Írd le saját szavaiddal</h2>
          </div>
          <div className="essay-mode-toggle" role="group" aria-label="Gyakorlási mód">
            <button type="button" className={mode === 'guided' ? 'active' : ''} onClick={() => setMode('guided')}>
              Segített
            </button>
            <button type="button" className={mode === 'practice' ? 'active' : ''} onClick={() => setMode('practice')}>
              Gyakorló
            </button>
          </div>
        </div>

        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          className="essay-textarea"
          placeholder="Kezdd egy rövid tételmondattal, majd építsd bele az évszámot, helyszínt, személyeket, fogalmakat, okot, folyamatot és következményt..."
        />

        <div className="essay-editor-footer">
          <span>{analysis.wordCount} szó</span>
          <span>{analysis.usedCount}/{analysis.totalCount} kulcselem felismerve</span>
        </div>
      </div>

      <EssayCoveragePanel analysis={analysis} mode={mode} />
    </section>
  )
}
