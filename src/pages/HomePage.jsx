import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'
import { getQuizTests, getQuizTopics } from '../services/quizService'

const benefits = [
  'most már csak évszámteszteket mutat a kvízközpont',
  'külön témakör- és külön tesztblokk lett a jobb átláthatóságért',
  'az 1789 és 1945 közötti három új témakör is bekerült',
  'később könnyű lesz külön személy, helyszín és fogalom modulokat hozzáadni',
]

function getSourceLabel(topicSource, testSource) {
  if (topicSource === 'mixed' || testSource === 'mixed') {
    return 'Backend + fallback'
  }

  if (topicSource === 'api' || testSource === 'api') {
    return 'Backend'
  }

  return 'Fallback'
}

function getTopicStats(topics, tests) {
  return topics
    .map((topic) => {
      const topicTests = tests.filter((test) => String(test.topicId) === String(topic.id))
      return {
        ...topic,
        testCount: topicTests.length,
        questionCount: topicTests.reduce((sum, test) => sum + (test.questionCount || 0), 0),
      }
    })
    .filter((topic) => topic.testCount > 0)
}

export default function HomePage() {
  const username = localStorage.getItem('username') || 'Felhasználó'
  const role = localStorage.getItem('role') || 'Student'
  const isAdmin = role.toLowerCase() === 'admin'
  const [topicsState, setTopicsState] = useState({ source: 'loading', items: [] })
  const [testsState, setTestsState] = useState({ source: 'loading', items: [] })

  useEffect(() => {
    let cancelled = false

    Promise.all([getQuizTopics(), getQuizTests()]).then(([topics, tests]) => {
      if (cancelled) {
        return
      }

      setTopicsState(topics)
      setTestsState(tests)
    })

    return () => {
      cancelled = true
    }
  }, [])

  const topicStats = useMemo(
    () => getTopicStats(topicsState.items, testsState.items),
    [testsState.items, topicsState.items],
  )

  const totalQuestions = useMemo(
    () => testsState.items.reduce((sum, test) => sum + (test.questionCount || 0), 0),
    [testsState.items],
  )

  const featuredTests = useMemo(() => {
    const seenTopics = new Set()
    const ordered = [...testsState.items].sort((first, second) => {
      const topicDelta = (second.topicId || 0) - (first.topicId || 0)
      if (topicDelta !== 0) {
        return topicDelta
      }

      return first.title.localeCompare(second.title, 'hu')
    })

    return ordered.filter((test) => {
      if (seenTopics.has(test.topicId)) {
        return false
      }
      seenTopics.add(test.topicId)
      return true
    }).slice(0, 6)
  }, [testsState.items])

  const sourceLabel = getSourceLabel(topicsState.source, testsState.source)

  return (
    <div className="app-shell d-flex flex-column">
      <AppNavbar />

      <main>
        <section className="hero-section py-5 py-lg-6">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-7">
                <span className="badge rounded-pill section-badge px-3 py-2 mb-3">Tételolvasó + évszámkvíz</span>
                <h1 className="display-5 fw-bold mb-3 text-white">Szia, {username}! Innen egyből mehetsz a csak évszámos gyakorlásra.</h1>
                <p className="lead text-white-50 mb-4">
                  Az ókor, a középkor és a kora újkor után bekerült a polgári átalakulás, a magyar polgárosodás és a
                  világháborúk kora is. A kvízközpont most már 8 külön témakörrel dolgozik.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3">
                  <Link to="/tesztek" className="btn btn-warning btn-lg fw-semibold px-4 rounded-4">
                    Kvízközpont megnyitása
                  </Link>
                  <Link to="/tetelek" className="btn btn-outline-light btn-lg px-4 rounded-4">
                    Tételek olvasása
                  </Link>
                </div>
              </div>

              <div className="col-12 col-lg-5">
                <div className="card hero-info-card border-0 shadow-lg rounded-5">
                  <div className="card-body p-4 p-md-5">
                    <div className="d-flex justify-content-between align-items-start gap-3 mb-4">
                      <div>
                        <div className="text-muted small mb-1">Aktív fiók</div>
                        <h2 className="h4 fw-bold mb-0">{username}</h2>
                      </div>
                      <span className="badge text-bg-dark rounded-pill px-3 py-2">{role}</span>
                    </div>

                    <div className="row g-3">
                      <div className="col-6">
                        <div className="mini-stat rounded-4 p-3 h-100">
                          <div className="mini-stat-value">{topicStats.length}</div>
                          <div className="mini-stat-label">Témakör</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mini-stat rounded-4 p-3 h-100">
                          <div className="mini-stat-value">{testsState.items.length}</div>
                          <div className="mini-stat-label">Évszámteszt</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mini-stat rounded-4 p-3 h-100">
                          <div className="mini-stat-value">{totalQuestions}</div>
                          <div className="mini-stat-label">Kérdés</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mini-stat rounded-4 p-3 h-100">
                          <div className="mini-stat-value">{sourceLabel}</div>
                          <div className="mini-stat-label">Forrás</div>
                        </div>
                      </div>
                    </div>

                    {isAdmin && (
                      <div className="alert alert-warning rounded-4 mt-4 mb-0">
                        Admin vagy, ezért külön adminoldal is elérhető a menüből.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-xl-7">
                <div className="card border-0 shadow-sm rounded-5 h-100 module-card">
                  <div className="card-body p-4 p-md-5">
                    <span className="section-kicker">Friss bővítés</span>
                    <h2 className="fw-bold mb-3">Már az 1789–1945 közötti blokkok is bent vannak</h2>
                    <p className="text-muted mb-4">
                      A rendszer most már az ókortól a világháborúk koráig külön, csak évszámokra épülő tesztekkel
                      dolgozik. Nincsenek benne kevert személy-, fogalom- vagy helyszínkérdések.
                    </p>

                    <div className="row g-3">
                      {featuredTests.map((test) => (
                        <div className="col-12" key={test.slug}>
                          <div className="dashboard-test-card rounded-4 p-3 p-md-4 border">
                            <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
                              <div>
                                <div className="d-flex flex-wrap gap-2 mb-2">
                                  <span className="badge text-bg-light rounded-pill px-3 py-2 text-uppercase">évszám</span>
                                  <span className="badge text-bg-warning rounded-pill px-3 py-2 text-uppercase">{test.difficulty}</span>
                                </div>
                                <h3 className="h5 fw-bold mb-2">{test.title}</h3>
                                <p className="text-muted mb-0">{test.description}</p>
                              </div>
                              <div className="text-md-end d-flex flex-md-column gap-2 align-items-md-end justify-content-between">
                                <div className="small text-muted">{test.questionCount} kérdés</div>
                                <Link to={`/tesztek/${test.slug}`} className="btn btn-primary rounded-4 fw-semibold">
                                  Indítás
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-xl-5">
                <div className="card border-0 shadow-sm rounded-5 h-100 faq-card">
                  <div className="card-body p-4 p-md-5">
                    <span className="section-kicker">Mi változott?</span>
                    <h2 className="fw-bold mb-3">Átláthatóbb gyakorlás</h2>
                    <div className="list-group list-group-flush benefit-list">
                      {benefits.map((benefit) => (
                        <div className="list-group-item px-0 py-3" key={benefit}>
                          <div className="d-flex align-items-start gap-3">
                            <span className="check-bubble">✓</span>
                            <span>{benefit}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="topic-summary-grid mt-4">
                      {topicStats.map((topic) => (
                        <div className="topic-summary-pill" key={topic.id}>
                          <strong>{topic.title}</strong>
                          <span>{topic.testCount} teszt</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
