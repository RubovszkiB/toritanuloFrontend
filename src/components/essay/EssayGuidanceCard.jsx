import { useMemo, useState } from 'react'
import KeyElementChip from './KeyElementChip'

const coreLabels = {
  fogalmak: 'Fogalmak',
  szemelyek: 'Személyek',
  evszamok: 'Évszámok',
  topografia: 'Topográfia',
  okok: 'Okok',
  folyamatok: 'Folyamatok',
  kovetkezmenyek: 'Következmények',
  szempontok: 'Szempontok',
}

function splitParagraphs(text = '') {
  const normalized = String(text).replace(/\s+/g, ' ').trim()
  if (!normalized) {
    return []
  }

  return normalized
    .split(/(?<=\.)\s+(?=(?:A|Az|Ez|Ezt|Ennél|Nem|A jó|A válasz|Érdemes|Fontos|Gyakori|Összegzés|A lezárás|A részletes|A következmények)\b)/)
    .map((item) => item.trim())
    .filter(Boolean)
}

function CoreSection({ title, items = [] }) {
  if (!items.length) {
    return null
  }

  return (
    <div className="essay-guidance-core-section">
      <span>{title}</span>
      <div className="essay-chip-cloud">
        {items.slice(0, 8).map((item) => (
          <KeyElementChip active key={item}>
            {item}
          </KeyElementChip>
        ))}
      </div>
    </div>
  )
}

export default function EssayGuidanceCard({ helper, variant = 'short', typeLabel = 'Segédfogalmazás' }) {
  const [open, setOpen] = useState(true)
  const paragraphs = useMemo(() => splitParagraphs(helper?.kibovitett_seged_fogalmazas), [helper])

  if (!helper?.kibovitett_seged_fogalmazas) {
    return null
  }

  const coreEntries = Object.entries(helper.kotelezo_mag || {}).filter(([, items]) => Array.isArray(items) && items.length)

  return (
    <section className={`essay-guidance-card is-${variant}`}>
      <button type="button" className="essay-guidance-header" onClick={() => setOpen((current) => !current)}>
        <span className="essay-guidance-icon">T</span>
        <span>
          <small>{typeLabel}</small>
          <strong>Kibővített segédfogalmazás</strong>
        </span>
        <span className="essay-guidance-toggle">{open ? 'Elrejtés' : 'Mutatás'}</span>
      </button>

      <div className={`essay-guidance-body ${open ? 'is-open' : ''}`}>
        <div className="essay-guidance-intro">
          <p>
            Tanulást segítő mintagondolatmenet: nem kész beadandó esszé, hanem egy jól megtanulható,
            vizsgabarát fogalmazási váz.
          </p>
        </div>

        {coreEntries.length > 0 && (
          <div className="essay-guidance-core">
            {coreEntries.slice(0, variant === 'short' ? 4 : 6).map(([key, items]) => (
              <CoreSection title={coreLabels[key] || key} items={items} key={key} />
            ))}
          </div>
        )}

        <article className="essay-guidance-text">
          {paragraphs.map((paragraph, index) => (
            <p key={`${index}-${paragraph.slice(0, 20)}`}>{paragraph}</p>
          ))}
        </article>
      </div>
    </section>
  )
}
