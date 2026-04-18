import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'
import { getQuizTests, getQuizTopics } from '../services/quizService'

const difficultyOrder = {
  konnyu: 1,
  kozepes: 2,
  nehez: 3,
}

const difficultyLabel = {
  konnyu: 'Könnyű',
  kozepes: 'Közepes',
  nehez: 'Nehéz',
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

export default function QuizHubPage() {
  const [topicsState, setTopicsState] = useState({ source: 'loading', items: [] })
  const [testsState, setTestsState] = useState({ source: 'loading', items: [] })
  const [selectedTopic, setSelectedTopic] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [search, setSearch] = useState('')

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

  useEffect(() => {
    if ((!selectedTopic || selectedTopic === 'all') && topicStats.length) {
      setSelectedTopic(String(topicStats[0].id))
      return
    }

    const stillExists = topicStats.some((topic) => String(topic.id) === String(selectedTopic))
    if (!stillExists && topicStats.length) {
      setSelectedTopic(String(topicStats[0].id))
    }
  }, [selectedTopic, topicStats])

  const selectedTopicMeta = topicStats.find((topic) => String(topic.id) === String(selectedTopic)) || null

  const filteredTests = useMemo(() => {
    return [...testsState.items]
      .filter((test) => selectedTopic === 'all' || String(test.topicId) === String(selectedTopic))
      .filter((test) => selectedDifficulty === 'all' || test.difficulty === selectedDifficulty)
      .filter((test) => {
        const haystack = `${test.title} ${test.description}`.toLowerCase()
        return haystack.includes(search.trim().toLowerCase())
      })
      .sort((a, b) => {
        const difficultyDelta = (difficultyOrder[a.difficulty] || 99) - (difficultyOrder[b.difficulty] || 99)
        if (difficultyDelta !== 0) {
          return difficultyDelta
        }

        return a.title.localeCompare(b.title, 'hu')
      })
  }, [search, selectedDifficulty, selectedTopic, testsState.items])

  const totalQuestions = filteredTests.reduce((sum, test) => sum + (test.questionCount || 0), 0)
  const sourceIsFallback =
    topicsState.source === 'fallback' ||
    topicsState.source === 'mixed' ||
    testsState.source === 'fallback' ||
    testsState.source === 'mixed'

  return (
    <div className="app-shell d-flex flex-column">
      <AppNavbar />

      <main>
        <section className="page-hero py-5">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-7">
                <span className="badge rounded-pill section-badge px-3 py-2 mb-3">Évszám kvízközpont</span>
                <h1 className="display-6 fw-bold text-white mb-3">
                  Mostantól a társadalmi, állampolgári, pénzügyi és munkavállalói ismeretek blokkja is külön, csak évszámokra épülő tesztekkel jelenik meg.
                </h1>
                <p className="lead text-white-50 mb-0">
                  Először válassz témakört, utána a hozzá tartozó évszámteszteket látod külön blokkban.
                </p>
              </div>

              <div className="col-12 col-lg-5">
                <div className="page-hero-card rounded-5 p-4 p-md-5 shadow-lg">
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="mini-stat rounded-4 p-3 h-100">
                        <div className="mini-stat-value">{topicStats.length}</div>
                        <div className="mini-stat-label">Látható témakör</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mini-stat rounded-4 p-3 h-100">
                        <div className="mini-stat-value">{filteredTests.length}</div>
                        <div className="mini-stat-label">Látható teszt</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mini-stat rounded-4 p-3 h-100">
                        <div className="mini-stat-value">{totalQuestions}</div>
                        <div className="mini-stat-label">Kérdés a mostani szűrésben</div>
                      </div>
                    </div>
                  </div>

                  {sourceIsFallback && (
                    <div className="alert alert-warning rounded-4 mt-4 mb-0 small">
                      A felület most már csak évszámteszteket mutat. Ha a backendben még ott vannak a régi vegyes tesztek,
                      azokat ez a nézet automatikusan kiszűri.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section py-5">
          <div className="container d-grid gap-4 gap-lg-5">
            <div className="stage-panel rounded-5 p-4 p-md-5 shadow-sm">
              <div className="stage-header d-flex flex-column flex-lg-row justify-content-between gap-3 mb-4">
                <div>
                  <div className="step-kicker">1. lépés</div>
                  <h2 className="h3 fw-bold mb-2">Témakör kiválasztása</h2>
                  <p className="text-muted mb-0">
                    Itt csak a fő témakörök vannak. A tényleges tesztek külön, lejjebb jelennek meg.
                  </p>
                </div>
                <div className="stage-badges d-flex flex-wrap gap-2 align-items-start">
                  <span className="badge text-bg-light rounded-pill px-3 py-2">Csak évszám</span>
                  <span className="badge text-bg-primary rounded-pill px-3 py-2">{topicStats.length} témakör</span>
                </div>
              </div>

              <div className="row g-4">
                {topicStats.map((topic) => {
                  const isActive = String(topic.id) === String(selectedTopic)
                  return (
                    <div className="col-12 col-md-6 col-xl-4" key={topic.id}>
                      <button
                        type="button"
                        className={`topic-card text-start w-100 border-0 rounded-5 p-4 ${isActive ? 'is-active' : ''}`}
                        onClick={() => setSelectedTopic(String(topic.id))}
                      >
                        <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                          <span className="badge text-bg-light rounded-pill px-3 py-2">{topic.code}</span>
                          <span className="topic-counter">{topic.testCount} teszt</span>
                        </div>
                        <h2 className="h4 fw-bold mb-2">{topic.title}</h2>
                        <p className="text-muted mb-3">{topic.description}</p>
                        <div className="small text-muted">{topic.questionCount} kérdés</div>
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="stage-panel stage-panel-contrast rounded-5 p-4 p-md-5 shadow-sm">
              <div className="stage-header d-flex flex-column flex-xl-row justify-content-between gap-3 mb-4">
                <div>
                  <div className="step-kicker">2. lépés</div>
                  <h2 className="h3 fw-bold mb-2">Évszámtesztek</h2>
                  <p className="text-muted mb-0">
                    {selectedTopicMeta
                      ? `${selectedTopicMeta.title} témakörhöz tartozó évszámtesztek.`
                      : 'Válassz témakört a tesztek megjelenítéséhez.'}
                  </p>
                </div>

                {selectedTopicMeta && (
                  <div className="selected-topic-summary rounded-4 p-3">
                    <div className="small text-uppercase fw-semibold text-muted mb-1">Aktív témakör</div>
                    <div className="fw-bold">{selectedTopicMeta.title}</div>
                    <div className="small text-muted">
                      {selectedTopicMeta.testCount} teszt • {selectedTopicMeta.questionCount} kérdés
                    </div>
                  </div>
                )}
              </div>

              <div className="search-panel rounded-5 p-3 p-md-4 mb-4">
                <div className="row g-3 align-items-end">
                  <div className="col-12 col-lg-8">
                    <label className="form-label fw-semibold">Keresés</label>
                    <input
                      type="text"
                      className="form-control rounded-4"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Teszt címére vagy leírására"
                    />
                  </div>
                  <div className="col-8 col-lg-3">
                    <label className="form-label fw-semibold">Nehézség</label>
                    <select
                      className="form-select rounded-4"
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                    >
                      <option value="all">Mindegyik</option>
                      <option value="konnyu">Könnyű</option>
                      <option value="kozepes">Közepes</option>
                      <option value="nehez">Nehéz</option>
                    </select>
                  </div>
                  <div className="col-4 col-lg-1 d-grid">
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-4"
                      onClick={() => {
                        setSelectedDifficulty('all')
                        setSearch('')
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>

              <div className="row g-4">
                {filteredTests.map((test) => (
                  <div className="col-12 col-md-6 col-xl-4" key={test.slug}>
                    <div className="card border-0 shadow-sm rounded-5 h-100 module-card test-card-emphasis">
                      <div className="card-body p-4 d-flex flex-column">
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          <span className="badge text-bg-light rounded-pill px-3 py-2 text-uppercase">évszám</span>
                          <span className="badge text-bg-warning rounded-pill px-3 py-2 text-uppercase">
                            {difficultyLabel[test.difficulty] || test.difficulty}
                          </span>
                        </div>
                        <h2 className="h4 fw-bold mb-3">{test.title}</h2>
                        <p className="text-muted mb-4">{test.description}</p>
                        <div className="quiz-card-meta d-flex flex-wrap gap-3 small text-muted mb-4">
                          <span>{test.questionCount} kérdés</span>
                          <span>{Math.round((test.timeLimitSec || 0) / 60)} perc</span>
                        </div>
                        <Link to={`/tesztek/${test.slug}`} className="btn btn-primary rounded-4 fw-semibold mt-auto">
                          Teszt indítása
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {!filteredTests.length && (
                <div className="empty-state-card rounded-5 p-5 mt-4 text-center">
                  <h3 className="h4 fw-bold mb-2">Nincs találat</h3>
                  <p className="text-muted mb-0">Próbálj másik témakört vagy nehézséget választani.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
