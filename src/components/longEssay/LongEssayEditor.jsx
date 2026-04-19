import { useMemo, useState } from 'react'
import { analyzeLongEssayDraft } from '../../services/longEssayService'
import LongEssayCoveragePanel from './LongEssayCoveragePanel'
import LongEssayStructurePanel from './LongEssayStructurePanel'

export default function LongEssayEditor({ topic }) {
  const [draft, setDraft] = useState('')
  const [mode, setMode] = useState('guided')
  const analysis = useMemo(() => analyzeLongEssayDraft(topic, draft), [draft, topic])

  return (
    <section className="long-essay-workspace">
      <div className="essay-editor-card long-editor-card">
        <div className="essay-editor-toolbar">
          <div>
            <span className="essay-section-kicker">Hosszú esszévázlat</span>
            <h2>Építs teljes szerkezetet</h2>
          </div>
          <div className="essay-mode-toggle" role="group" aria-label="Hosszú esszé gyakorlási mód">
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
          className="essay-textarea long-essay-textarea"
          placeholder="Írj bevezetést, előzményt, tárgyalást, következményeket és lezárást. A rendszer külön figyeli a kötelező minimum elemeket, a hosszú távú hatásokat és a szerkezeti lefedettséget."
        />

        <div className="essay-editor-footer">
          <span>{analysis.wordCount} szó</span>
          <span>{analysis.usedCount}/{analysis.totalCount} kulcselem felismerve</span>
        </div>
      </div>

      <LongEssayCoveragePanel analysis={analysis} mode={mode} />
      <LongEssayStructurePanel topic={topic} analysis={analysis} />
    </section>
  )
}
