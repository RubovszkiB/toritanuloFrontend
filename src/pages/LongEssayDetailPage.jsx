import { Link, Navigate, useParams } from 'react-router-dom'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'
import KeyElementChip from '../components/essay/KeyElementChip'
import LongEssayEditor from '../components/longEssay/LongEssayEditor'
import LongEssayTaskPreview from '../components/longEssay/LongEssayTaskPreview'
import { getLongEssayTopicBySlug } from '../services/longEssayService'

const sectionMap = [
  ['important_time', 'Fontos idő'],
  ['important_space', 'Fontos tér'],
  ['important_people', 'Fontos személyek'],
  ['important_concepts', 'Fontos fogalmak'],
  ['causes', 'Okok'],
  ['processes', 'Folyamatok'],
  ['consequences', 'Következmények'],
  ['long_term_effects', 'Hosszú távú hatások'],
]

function InfoSection({ title, items = [] }) {
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

export default function LongEssayDetailPage() {
  const { slug } = useParams()
  const topic = getLongEssayTopicBySlug(slug)

  if (!topic) {
    return <Navigate to="/hosszu-esszek" replace />
  }

  return (
    <div className="app-shell d-flex flex-column">
      <AppNavbar />

      <main>
        <section className="essay-detail-hero long-essay-hero">
          <div className="container">
            <Link to="/hosszu-esszek" className="essay-back-link">
              Vissza a hosszú esszékhez
            </Link>
            <div className="essay-detail-grid">
              <div>
                <span className="essay-hero-badge long-essay-badge">hosszú esszé</span>
                <h1>{topic.tema}</h1>
                <p>{topic.era}</p>
              </div>

              <div className="essay-detail-summary">
                <strong>{topic.requiredCount}</strong>
                <span>kötelező minimum elem</span>
                <small>{topic.keyElementCount} kulcselem, {topic.common_mistakes?.length || 0} tipikus hiba</small>
              </div>
            </div>
          </div>
        </section>

        <section className="essay-section">
          <div className="container">
            <div className="essay-prompt-panel long-prompt-panel">
              <span>Kapcsolódó korábbi hosszú esszékérdések</span>
              {topic.past_prompts?.map((prompt) => (
                <article className="essay-past-prompt-card long-past-prompt-card" key={`${prompt.exam}-${prompt.prompt}`}>
                  <blockquote>
                    <strong>{prompt.exam}</strong>
                    {prompt.prompt}
                  </blockquote>
                  <LongEssayTaskPreview preview={prompt.taskPreview} />
                </article>
              ))}
            </div>

            <div className="essay-info-grid">
              {sectionMap.map(([key, title]) => (
                <InfoSection title={title} items={topic[key]} key={key} />
              ))}
            </div>

            <section className="long-required-card">
              <div>
                <span className="essay-section-kicker">Minimum elvárás</span>
                <h2>Kötelezően beépítendő elemek</h2>
              </div>
              <div className="essay-chip-cloud">
                {Object.entries(topic.required_elements_min || {}).flatMap(([key, items]) =>
                  items.map((item) => (
                    <KeyElementChip active key={`${key}-${item}`}>
                      {item}
                    </KeyElementChip>
                  )),
                )}
              </div>
            </section>

            <LongEssayEditor topic={topic} />

            {topic.common_mistakes?.length > 0 && (
              <section className="long-mistakes-card">
                <span className="essay-section-kicker">Tipikus hibák</span>
                <ul>
                  {topic.common_mistakes.map((mistake) => (
                    <li key={mistake}>{mistake}</li>
                  ))}
                </ul>
              </section>
            )}

            <section className="essay-minimum-card long-minimum-card">
              <span>Amit ebből biztosan tudnod kell</span>
              <p>{topic.minimum_answer}</p>
            </section>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
