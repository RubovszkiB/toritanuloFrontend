import { useMemo, useState } from 'react'
import AppFooter from '../components/AppFooter'
import AppNavbar from '../components/AppNavbar'
import ComplexEssayTopicCard from '../components/complexEssay/ComplexEssayTopicCard'
import {
  complexEssayTypeMeta,
  complexEssayTopics,
  filterComplexEssayTopics,
} from '../services/complexEssayService'

const typeOptions = [
  ['all', 'Mindegyik'],
  ['korszakokon_ativelo', complexEssayTypeMeta.korszakokon_ativelo.label],
  ['osszehasonlito', complexEssayTypeMeta.osszehasonlito.label],
]

export default function ComplexEssayHubPage() {
  const [search, setSearch] = useState('')
  const [selectedType, setSelectedType] = useState('all')

  const filteredTopics = useMemo(
    () => filterComplexEssayTopics({ type: selectedType, search }),
    [selectedType, search],
  )

  const groupedTopics = useMemo(
    () => ({
      korszakokon_ativelo: filteredTopics.filter((topic) => topic.complexType === 'korszakokon_ativelo'),
      osszehasonlito: filteredTopics.filter((topic) => topic.complexType === 'osszehasonlito'),
    }),
    [filteredTopics],
  )

  return (
    <div className="app-shell d-flex flex-column">
      <AppNavbar />

      <main>
        <section className="essay-hero complex-essay-hero">
          <div className="container">
            <div className="essay-hero-grid">
              <div>
                <span className="essay-hero-badge complex-essay-badge">Emelt komplex esszé</span>
                <h1>Komplex esszé felkészítő</h1>
                <p>
                  Külön modul a korszakokon átívelő és az összehasonlító komplex esszékhez,
                  eredeti feladat-preview-val és szempontközpontú tanulóblokkokkal.
                </p>
              </div>

              <div className="essay-hero-stats">
                <div>
                  <strong>{complexEssayTopics.length}</strong>
                  <span>komplex feladat</span>
                </div>
                <div>
                  <strong>{groupedTopics.korszakokon_ativelo.length}</strong>
                  <span>átívelő</span>
                </div>
                <div>
                  <strong>{groupedTopics.osszehasonlito.length}</strong>
                  <span>összehasonlító</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="essay-section">
          <div className="container">
            <div className="essay-filter-panel complex-filter-panel">
              <label>
                <span>Keresés</span>
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  type="search"
                  placeholder="Téma, korszak, fogalom vagy vizsgaidőszak"
                />
              </label>

              <div className="complex-type-tabs" role="tablist" aria-label="Komplex esszé típusok">
                {typeOptions.map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    className={selectedType === value ? 'active' : ''}
                    onClick={() => setSelectedType(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {(['korszakokon_ativelo', 'osszehasonlito']).map((type) => {
              const topics = groupedTopics[type]
              if (!topics.length || (selectedType !== 'all' && selectedType !== type)) {
                return null
              }

              return (
                <section className="complex-type-section" key={type}>
                  <div className="complex-section-heading">
                    <span className="essay-section-kicker">{complexEssayTypeMeta[type].label}</span>
                    <h2>{type === 'korszakokon_ativelo' ? 'Időívek és fordulópontok' : 'Párhuzamos összevetések'}</h2>
                  </div>
                  <div className="essay-topic-grid">
                    {topics.map((topic, index) => (
                      <ComplexEssayTopicCard topic={topic} index={index} key={topic.id} />
                    ))}
                  </div>
                </section>
              )
            })}

            {!filteredTopics.length && (
              <div className="essay-empty-state">
                <h2>Nincs találat</h2>
                <p>Próbálj rövidebb keresést, vagy válts a másik komplex esszé típusra.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
