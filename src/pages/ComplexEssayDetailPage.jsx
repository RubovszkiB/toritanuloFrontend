import { Link, Navigate, useParams } from 'react-router-dom'
import AppFooter from '../components/AppFooter'
import AppNavbar from '../components/AppNavbar'
import ComplexEssayTaskPreview from '../components/complexEssay/ComplexEssayTaskPreview'
import EssayGuidanceCard from '../components/essay/EssayGuidanceCard'
import KeyElementChip from '../components/essay/KeyElementChip'
import { getComplexEssayTopicBySlug } from '../services/complexEssayService'

const chipSections = [
  ['required_axes', 'Kötelező szempontok'],
  ['required_concepts', 'Kötelező fogalmak'],
  ['required_people', 'Személyek'],
  ['required_dates', 'Évszámok'],
  ['required_places', 'Helyszínek'],
]

function ChipSection({ title, items = [], active = false }) {
  if (!items.length) {
    return null
  }

  return (
    <section className="essay-info-card complex-info-card">
      <h2>{title}</h2>
      <div className="essay-chip-cloud">
        {items.map((item) => (
          <KeyElementChip active={active} key={item}>
            {item}
          </KeyElementChip>
        ))}
      </div>
    </section>
  )
}

export default function ComplexEssayDetailPage() {
  const { slug } = useParams()
  const topic = getComplexEssayTopicBySlug(slug)

  if (!topic) {
    return <Navigate to="/komplex-esszek" replace />
  }

  return (
    <div className="app-shell d-flex flex-column">
      <AppNavbar />

      <main>
        <section className="essay-detail-hero complex-essay-hero">
          <div className="container">
            <Link to="/komplex-esszek" className="essay-back-link">
              Vissza a komplex esszékhez
            </Link>
            <div className="essay-detail-grid">
              <div>
                <span className="essay-hero-badge complex-essay-badge">{topic.typeMeta?.label}</span>
                <h1>{topic.theme}</h1>
                <p>{topic.period} · {topic.exam}</p>
              </div>

              <div className="essay-detail-summary">
                <strong>{topic.requiredAxisCount}</strong>
                <span>kötelező szempont</span>
                <small>{topic.keyElementCount} kulcselem, {topic.common_mistakes?.length || 0} tipikus hiba</small>
              </div>
            </div>
          </div>
        </section>

        <section className="essay-section">
          <div className="container">
            <div className="essay-prompt-panel complex-prompt-panel">
              <span>Kapcsolódó korábbi komplex esszékérdés</span>
              {topic.past_prompts?.map((prompt) => (
                <article className="essay-past-prompt-card complex-past-prompt-card" key={`${prompt.exam}-${prompt.prompt}`}>
                  <blockquote>
                    <strong>{prompt.exam}</strong>
                    {prompt.prompt}
                  </blockquote>
                  <ComplexEssayTaskPreview preview={prompt.taskPreview} />
                </article>
              ))}
            </div>

            <div className="essay-info-grid">
              {chipSections.map(([key, title]) => (
                <ChipSection title={title} items={topic[key]} active={key === 'required_axes'} key={key} />
              ))}
            </div>

            {topic.related_tetelek?.length > 0 && (
              <section className="long-required-card complex-related-card">
                <div>
                  <span className="essay-section-kicker">Kapcsolódó tételek</span>
                  <h2>Tételszámok</h2>
                </div>
                <div className="essay-chip-cloud">
                  {topic.related_tetelek.map((tetel) => (
                    <KeyElementChip active key={`tetel-${tetel}`}>
                      {tetel}. tétel
                    </KeyElementChip>
                  ))}
                </div>
              </section>
            )}

            <section className="complex-requirements-card">
              <span className="essay-section-kicker">Részletes követelmények</span>
              <ul>
                {topic.detailed_requirements?.map((requirement) => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>
            </section>

            {topic.common_mistakes?.length > 0 && (
              <section className="long-mistakes-card complex-mistakes-card">
                <span className="essay-section-kicker">Tipikus hibák</span>
                <ul>
                  {topic.common_mistakes.map((mistake) => (
                    <li key={mistake}>{mistake}</li>
                  ))}
                </ul>
              </section>
            )}

            <section className="essay-minimum-card complex-minimum-card">
              <span>Minimum fókusz</span>
              <p>{topic.minimum_answer_focus}</p>
            </section>

            <EssayGuidanceCard
              helper={topic.helperContent}
              variant={topic.complexType === 'osszehasonlito' ? 'comparison' : 'timeline'}
              typeLabel={topic.complexType === 'osszehasonlito' ? 'Összehasonlító segéd' : 'Átívelő segéd'}
            />
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
