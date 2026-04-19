import { useMemo, useState } from 'react'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'
import LongEssayTopicCard from '../components/longEssay/LongEssayTopicCard'
import { getLongEssayTopics } from '../services/longEssayService'
import { normalizeEssayText } from '../services/essayService'

const topics = getLongEssayTopics()
const eras = [...new Set(topics.map((topic) => topic.group))].sort((a, b) => a.localeCompare(b, 'hu'))

export default function LongEssayHubPage() {
  const [search, setSearch] = useState('')
  const [selectedEra, setSelectedEra] = useState('all')

  const filteredTopics = useMemo(() => {
    const needle = normalizeEssayText(search)

    return topics
      .filter((topic) => selectedEra === 'all' || topic.group === selectedEra)
      .filter((topic) => {
        if (!needle) {
          return true
        }

        return normalizeEssayText(`${topic.tema} ${topic.era} ${topic.minimum_answer}`).includes(needle)
      })
  }, [search, selectedEra])

  return (
    <div className="app-shell d-flex flex-column">
      <AppNavbar />

      <main>
        <section className="essay-hero long-essay-hero">
          <div className="container">
            <div className="essay-hero-grid">
              <div>
                <span className="essay-hero-badge long-essay-badge">Emelt hosszú esszé</span>
                <h1>Hosszú esszé felkészítő</h1>
                <p>
                  Önálló modul a hosszú esszékhez: részletesebb szerkezeti vázlat,
                  kötelező minimum elemek, tipikus hibák és bővebb tartalmi lefedettség.
                </p>
              </div>

              <div className="essay-hero-stats">
                <div>
                  <strong>{topics.length}</strong>
                  <span>hosszú esszétéma</span>
                </div>
                <div>
                  <strong>{eras.length}</strong>
                  <span>korszakcsoport</span>
                </div>
                <div>
                  <strong>{filteredTopics.reduce((sum, topic) => sum + topic.requiredCount, 0)}</strong>
                  <span>látható minimum elem</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="essay-section">
          <div className="container">
            <div className="essay-filter-panel">
              <label>
                <span>Keresés</span>
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  type="search"
                  placeholder="Téma, személy, fogalom vagy korszak"
                />
              </label>

              <label>
                <span>Korszak</span>
                <select value={selectedEra} onChange={(event) => setSelectedEra(event.target.value)}>
                  <option value="all">Mindegyik korszak</option>
                  {eras.map((era) => (
                    <option key={era} value={era}>
                      {era}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="essay-topic-grid">
              {filteredTopics.map((topic, index) => (
                <LongEssayTopicCard topic={topic} index={index} key={topic.id} />
              ))}
            </div>

            {!filteredTopics.length && (
              <div className="essay-empty-state">
                <h2>Nincs találat</h2>
                <p>Próbálj másik korszakot vagy rövidebb keresőkifejezést.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
