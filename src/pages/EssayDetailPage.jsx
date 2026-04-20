import { Link, Navigate, useParams } from 'react-router-dom'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'
import EssayEditor from '../components/essay/EssayEditor'
import EssayGuidanceCard from '../components/essay/EssayGuidanceCard'
import EssayTaskPreview from '../components/essay/EssayTaskPreview'
import KeyElementChip from '../components/essay/KeyElementChip'
import { getEssayTopicBySlug } from '../services/essayService'

const sectionMap = [
  ['important_time', 'Fontos idő'],
  ['important_space', 'Fontos tér'],
  ['important_people', 'Fontos személyek'],
  ['important_concepts', 'Fontos fogalmak'],
  ['causes', 'Okok'],
  ['processes', 'Folyamatok'],
  ['consequences', 'Következmények'],
]

function EssayInfoSection({ title, items = [] }) {
  if (!items.length) {
    return null
  }

  return (
    <section className="essay-info-card">
      <h2>{title}</h2>
      <div className="essay-chip-cloud">
        {items.map((item) => (
          <KeyElementChip key={item}>{item}</KeyElementChip>
        ))}
      </div>
    </section>
  )
}

export default function EssayDetailPage() {
  const { slug } = useParams()
  const topic = getEssayTopicBySlug(slug)

  if (!topic) {
    return <Navigate to="/esszek" replace />
  }

  return (
    <div className="app-shell d-flex flex-column">
      <AppNavbar />

      <main>
        <section className="essay-detail-hero">
          <div className="container">
            <Link to="/esszek" className="essay-back-link">
              Vissza az esszékhez
            </Link>
            <div className="essay-detail-grid">
              <div>
                <span className="essay-hero-badge">{topic.essay_type || 'rövid'} esszé</span>
                <h1>{topic.tema}</h1>
                <p>{topic.era}</p>
              </div>

              <div className="essay-detail-summary">
                <strong>{topic.keyElementCount}</strong>
                <span>kulcselem</span>
                <small>{topic.pastPromptCount} korábbi esszékérdés alapján</small>
              </div>
            </div>
          </div>
        </section>

        <section className="essay-section">
          <div className="container">
            <div className="essay-prompt-panel">
              <span>Kapcsolódó korábbi esszékérdések</span>
              {topic.past_prompts?.map((prompt) => (
                <article className="essay-past-prompt-card" key={`${prompt.exam}-${prompt.prompt}`}>
                  <blockquote>
                    <strong>{prompt.exam}</strong>
                    {prompt.prompt}
                  </blockquote>
                  <EssayTaskPreview preview={prompt.taskPreview} />
                </article>
              ))}
            </div>

            <div className="essay-info-grid">
              {sectionMap.map(([key, title]) => (
                <EssayInfoSection title={title} items={topic[key]} key={key} />
              ))}
            </div>

            <EssayEditor topic={topic} />

            <section className="essay-minimum-card">
              <span>Amit ebből biztosan tudnod kell</span>
              <p>{topic.minimum_answer}</p>
            </section>

            <EssayGuidanceCard helper={topic.helperContent} variant="short" typeLabel="Rövid esszé segéd" />
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
