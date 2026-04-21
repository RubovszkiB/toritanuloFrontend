import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'
import { getQuizBySlug } from '../services/quizService'

const eraOptions = [
  { value: 'BCE', label: 'Kr. e.' },
  { value: 'CE', label: 'Kr. u.' },
  { value: 'NONE', label: 'nincs' },
]

function shuffleArray(items) {
  const array = [...items]
  for (let index = array.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[array[index], array[swapIndex]] = [array[swapIndex], array[index]]
  }
  return array
}

function formatDuration(totalSeconds) {
  if (!totalSeconds) {
    return 'Nincs időkorlát'
  }

  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

function normalizeText(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
}

function buildInitialAnswers(questions) {
  const result = {}

  for (const question of questions) {
    if (question.type === 'multi_choice') {
      result[question.id] = []
    } else if (question.type === 'year_input') {
      result[question.id] = {
        year: '',
        era: question.acceptedAnswers[0]?.era || 'NONE',
      }
    } else if (question.type === 'chronology_order') {
      result[question.id] = shuffleArray(question.options.map((option) => option.id))
    } else if (question.type === 'matching') {
      result[question.id] = Object.fromEntries(question.pairs.map((pair) => [pair.id, '']))
    } else {
      result[question.id] = null
    }
  }

  return result
}

function isQuestionAnswered(question, answer) {
  if (question.type === 'multi_choice') {
    return Array.isArray(answer) && answer.length > 0
  }

  if (question.type === 'year_input') {
    return Boolean(answer?.year?.trim())
  }

  if (question.type === 'matching') {
    return Object.values(answer || {}).every(Boolean)
  }

  if (question.type === 'chronology_order') {
    return Array.isArray(answer) && answer.length === question.options.length
  }

  return answer !== null && answer !== undefined && answer !== ''
}

function getCorrectOptionIds(question) {
  return question.options.filter((option) => option.isCorrect).map((option) => option.id)
}

function getCorrectChronologyOrder(question) {
  return [...question.options]
    .sort((first, second) => (first.correctOrder || 0) - (second.correctOrder || 0))
    .map((option) => option.id)
}

function evaluateQuestion(question, answer) {
  let correct = false
  let userAnswerLabel = 'Nincs válasz'
  let correctAnswerLabel = ''

  if (question.type === 'single_choice' || question.type === 'true_false') {
    const correctOption = question.options.find((option) => option.isCorrect)
    const selectedOption = question.options.find((option) => option.id === answer)
    correct = Boolean(correctOption && selectedOption && correctOption.id === selectedOption.id)
    userAnswerLabel = selectedOption?.text || 'Nincs válasz'
    correctAnswerLabel = correctOption?.text || '—'
  }

  if (question.type === 'multi_choice') {
    const expectedIds = getCorrectOptionIds(question).sort((first, second) => first - second)
    const selectedIds = [...(answer || [])].sort((first, second) => first - second)
    correct = JSON.stringify(expectedIds) === JSON.stringify(selectedIds)
    userAnswerLabel = question.options
      .filter((option) => (answer || []).includes(option.id))
      .map((option) => option.text)
      .join(', ') || 'Nincs válasz'
    correctAnswerLabel = question.options
      .filter((option) => option.isCorrect)
      .map((option) => option.text)
      .join(', ')
  }

  if (question.type === 'year_input') {
    const normalizedYear = normalizeText(answer?.year)
    const normalizedEra = answer?.era || 'NONE'
    correct = question.acceptedAnswers.some((item) => {
      const sameYear = normalizeText(item.normalized || item.text || item.number) === normalizedYear
      const sameEra = item.era === 'NONE' || item.era === normalizedEra
      return sameYear && sameEra
    })
    userAnswerLabel = answer?.year ? `${answer.year} ${eraOptions.find((era) => era.value === normalizedEra)?.label || ''}`.trim() : 'Nincs válasz'
    correctAnswerLabel = question.acceptedAnswers
      .map((item) => `${item.text || item.number} ${eraOptions.find((era) => era.value === item.era)?.label || ''}`.trim())
      .join(' / ')
  }

  if (question.type === 'chronology_order') {
    const expected = getCorrectChronologyOrder(question)
    correct = JSON.stringify(expected) === JSON.stringify(answer || [])
    userAnswerLabel = (answer || [])
      .map((optionId) => question.options.find((option) => option.id === optionId)?.text)
      .filter(Boolean)
      .join(' → ')
    correctAnswerLabel = expected
      .map((optionId) => question.options.find((option) => option.id === optionId)?.text)
      .filter(Boolean)
      .join(' → ')
  }

  if (question.type === 'matching') {
    const userMap = answer || {}
    correct = question.pairs.every((pair) => userMap[pair.id] === pair.right)
    userAnswerLabel = question.pairs
      .map((pair) => `${pair.left} → ${userMap[pair.id] || '—'}`)
      .join(' | ')
    correctAnswerLabel = question.pairs.map((pair) => `${pair.left} → ${pair.right}`).join(' | ')
  }

  return {
    questionId: question.id,
    correct,
    earnedPoints: correct ? question.points : 0,
    maxPoints: question.points,
    userAnswerLabel,
    correctAnswerLabel,
    explanation: question.explanation,
    category: question.category || 'általános',
    skill: question.skill || '',
    sourceHint: question.sourceHint || '',
  }
}

function prepareQuestionOrder(questions) {
  return questions.map((question) => {
    if (question.type === 'single_choice' || question.type === 'multi_choice' || question.type === 'true_false') {
      return {
        ...question,
        options: shuffleArray(question.options || []),
      }
    }

    if (question.type === 'matching') {
      return {
        ...question,
        matchingChoices: shuffleArray((question.pairs || []).map((pair) => pair.right)),
      }
    }

    return question
  })
}

function buildCategoryStats(results) {
  const stats = new Map()

  results.forEach((result) => {
    const key = result.category || 'általános'
    const current = stats.get(key) || { category: key, earned: 0, max: 0, correct: 0, total: 0 }
    current.earned += result.earnedPoints
    current.max += result.maxPoints
    current.correct += result.correct ? 1 : 0
    current.total += 1
    stats.set(key, current)
  })

  return [...stats.values()].sort((first, second) => (first.earned / first.max) - (second.earned / second.max))
}

function getLargeQuizAdvice(categoryStats) {
  return categoryStats
    .filter((item) => item.max > 0 && item.earned / item.max < 0.7)
    .slice(0, 3)
    .map((item) => item.category)
}

function QuestionRenderer({ question, answer, onAnswerChange, submitted, evaluation }) {
  if (question.type === 'single_choice' || question.type === 'true_false') {
    return (
      <div className="d-grid gap-3">
        {question.options.map((option) => (
          <label key={option.id} className={`quiz-option rounded-4 p-3 ${answer === option.id ? 'is-selected' : ''}`}>
            <input
              type="radio"
              name={`question-${question.id}`}
              className="form-check-input me-3"
              checked={answer === option.id}
              onChange={() => onAnswerChange(option.id)}
              disabled={submitted}
            />
            <span>{option.text}</span>
          </label>
        ))}
      </div>
    )
  }

  if (question.type === 'multi_choice') {
    return (
      <div className="d-grid gap-3">
        {question.options.map((option) => {
          const checked = (answer || []).includes(option.id)
          return (
            <label key={option.id} className={`quiz-option rounded-4 p-3 ${checked ? 'is-selected' : ''}`}>
              <input
                type="checkbox"
                className="form-check-input me-3"
                checked={checked}
                onChange={() => {
                  const current = new Set(answer || [])
                  if (current.has(option.id)) {
                    current.delete(option.id)
                  } else {
                    current.add(option.id)
                  }
                  onAnswerChange([...current])
                }}
                disabled={submitted}
              />
              <span>{option.text}</span>
            </label>
          )
        })}
      </div>
    )
  }

  if (question.type === 'year_input') {
    return (
      <div className="row g-3">
        <div className="col-12 col-md-7">
          <label className="form-label fw-semibold">Évszám</label>
          <input
            type="text"
            className="form-control form-control-lg rounded-4"
            value={answer?.year || ''}
            onChange={(event) => onAnswerChange({ ...answer, year: event.target.value })}
            placeholder="Példa: 490"
            disabled={submitted}
          />
        </div>
        <div className="col-12 col-md-5">
          <label className="form-label fw-semibold">Jelölés</label>
          <select
            className="form-select form-select-lg rounded-4"
            value={answer?.era || 'NONE'}
            onChange={(event) => onAnswerChange({ ...answer, era: event.target.value })}
            disabled={submitted}
          >
            {eraOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }

  if (question.type === 'chronology_order') {
    return (
      <div className="d-grid gap-3">
        {(answer || []).map((optionId, index) => {
          const option = question.options.find((item) => item.id === optionId)
          if (!option) {
            return null
          }

          return (
            <div key={optionId} className="chronology-item rounded-4 p-3">
              <div className="d-flex justify-content-between align-items-center gap-3">
                <div className="d-flex align-items-center gap-3">
                  <span className="chronology-index">{index + 1}</span>
                  <span>{option.text}</span>
                </div>
                {!submitted && (
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm rounded-4"
                      disabled={index === 0}
                      onClick={() => {
                        const next = [...answer]
                        ;[next[index - 1], next[index]] = [next[index], next[index - 1]]
                        onAnswerChange(next)
                      }}
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm rounded-4"
                      disabled={index === answer.length - 1}
                      onClick={() => {
                        const next = [...answer]
                        ;[next[index + 1], next[index]] = [next[index], next[index + 1]]
                        onAnswerChange(next)
                      }}
                    >
                      ↓
                    </button>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  if (question.type === 'matching') {
    const choices = question.matchingChoices?.length ? question.matchingChoices : shuffleArray(question.pairs.map((pair) => pair.right))
    return (
      <div className="d-grid gap-3">
        {question.pairs.map((pair) => (
          <div key={pair.id} className="matching-row rounded-4 p-3">
            <div className="row g-3 align-items-center">
              <div className="col-12 col-md-5 fw-semibold">{pair.left}</div>
              <div className="col-12 col-md-7">
                <select
                  className="form-select rounded-4"
                  value={answer?.[pair.id] || ''}
                  onChange={(event) => onAnswerChange({ ...answer, [pair.id]: event.target.value })}
                  disabled={submitted}
                >
                  <option value="">Válassz párt</option>
                  {choices.map((choice) => (
                    <option key={`${pair.id}-${choice}`} value={choice}>
                      {choice}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="alert alert-warning rounded-4 mb-0">
      Ezt a kérdéstípust még nem kezeli a felület.
    </div>
  )
}

export default function QuizPlayPage({ quizType = null }) {
  const { slug } = useParams()
  const hubPath = quizType === 'szemely' ? '/szemely-kviz' : quizType === 'nagy' ? '/nagy-tesztek' : quizType === 'kerdesbank' ? '/kerdesbank' : '/tesztek'
  const hubLabel = quizType === 'szemely' ? 'személykvízekhez' : quizType === 'nagy' ? 'nagy témaköri tesztekhez' : quizType === 'kerdesbank' ? 'kérdésbankhoz' : 'évszám kvízekhez'
  const [quizState, setQuizState] = useState({ source: 'loading', item: null })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [results, setResults] = useState([])
  const [timeLeft, setTimeLeft] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError('')

    getQuizBySlug(slug, quizType)
      .then((state) => {
        if (cancelled) {
          return
        }

        const sourceQuestions = state.item.type === 'kerdesbank' ? shuffleArray(state.item.questions) : state.item.questions
        const preparedQuestions = prepareQuestionOrder(sourceQuestions)
        setQuizState({
          ...state,
          item: {
            ...state.item,
            questions: preparedQuestions,
          },
        })
        setAnswers(buildInitialAnswers(preparedQuestions))
        setCurrentIndex(0)
        setSubmitted(false)
        setResults([])
        setTimeLeft(state.item.timeLimitSec)
      })
      .catch((loadError) => {
        if (!cancelled) {
          setError(loadError.message)
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [quizType, slug])

  const questions = quizState.item?.questions || []
  const activeQuestion = questions[currentIndex] || null

  useEffect(() => {
    if (!quizState.item?.timeLimitSec || submitted || loading) {
      return undefined
    }

    const timerId = window.setInterval(() => {
      setTimeLeft((current) => {
        if (current === null) {
          return current
        }

        if (current <= 1) {
          window.clearInterval(timerId)
          return 0
        }

        return current - 1
      })
    }, 1000)

    return () => {
      window.clearInterval(timerId)
    }
  }, [loading, quizState.item?.timeLimitSec, submitted])

  useEffect(() => {
    if (timeLeft === 0 && !submitted && questions.length) {
      handleSubmit()
    }
  }, [questions.length, submitted, timeLeft])

  const answeredCount = useMemo(
    () => questions.filter((question) => isQuestionAnswered(question, answers[question.id])).length,
    [answers, questions],
  )

  const totalScore = results.reduce((sum, result) => sum + result.earnedPoints, 0)
  const maxScore = questions.reduce((sum, question) => sum + question.points, 0)
  const scorePercent = maxScore ? Math.round((totalScore / maxScore) * 100) : 0
  const categoryStats = useMemo(() => buildCategoryStats(results), [results])
  const largeQuizAdvice = useMemo(() => getLargeQuizAdvice(categoryStats), [categoryStats])
  const activeEvaluation = results.find((result) => result.questionId === activeQuestion?.id) || null

  function handleAnswerChange(questionId, value) {
    setAnswers((current) => ({
      ...current,
      [questionId]: value,
    }))
  }

  function handleSubmit() {
    const nextResults = questions.map((question) => evaluateQuestion(question, answers[question.id]))
    setResults(nextResults)
    setSubmitted(true)
  }

  function handleRestart() {
    if (!quizState.item) {
      return
    }

    const sourceQuestions = quizState.item.type === 'kerdesbank' ? shuffleArray(quizState.item.questions) : quizState.item.questions
    const preparedQuestions = prepareQuestionOrder(sourceQuestions)
    setQuizState((current) => ({
      ...current,
      item: {
        ...current.item,
        questions: preparedQuestions,
      },
    }))
    setAnswers(buildInitialAnswers(preparedQuestions))
    setResults([])
    setSubmitted(false)
    setCurrentIndex(0)
    setTimeLeft(quizState.item.timeLimitSec)
  }

  return (
    <div className="app-shell d-flex flex-column">
      <AppNavbar />

      <main>
        <section className="reader-hero py-5">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-8">
                <Link to={hubPath} className="btn btn-outline-light rounded-4 mb-3">
                  Vissza a {hubLabel}
                </Link>
                <span className="badge rounded-pill section-badge px-3 py-2 mb-3 d-inline-block">
                  {quizState.item?.type || 'teszt'} · {quizState.item?.difficulty || 'vegyes'}
                </span>
                <h1 className="reader-main-title fw-bold text-white mb-3">
                  {quizState.item?.title || 'Teszt betöltése...'}
                </h1>
                <p className="lead text-white-50 mb-0">
                  {quizState.item?.description || 'A kérdések és feladattípusok betöltése folyamatban van.'}
                </p>
              </div>

              <div className="col-12 col-lg-4">
                <div className="reader-progress-card rounded-5 p-4 shadow-lg">
                  <div className="reader-progress-labels small mb-3">Teszt állapota</div>
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="reader-stat-card rounded-4 p-3 h-100">
                        <div className="reader-stat-value">{answeredCount}/{questions.length}</div>
                        <div className="reader-stat-label">Megválaszolva</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="reader-stat-card rounded-4 p-3 h-100">
                        <div className="reader-stat-value">{formatDuration(timeLeft)}</div>
                        <div className="reader-stat-label">Hátralévő idő</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 small text-muted">
                    Forrás: {quizState.source === 'api' ? 'backend API' : 'fallback SQL mintaadat'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section py-5">
          <div className="container">
            {loading && (
              <div className="empty-state-card rounded-5 p-5 text-center">
                <h2 className="h4 fw-bold mb-2">Teszt betöltése</h2>
                <p className="text-muted mb-0">Készül a kérdéssor és a válasznézet.</p>
              </div>
            )}

            {!loading && error && (
              <div className="alert alert-danger rounded-4">{error}</div>
            )}

            {!loading && !error && activeQuestion && (
              <div className="row g-4 reader-topbar align-items-start">
                <div className="col-12 col-xl-8">
                  {submitted && (
                    <div className={`quiz-result-banner rounded-5 p-4 p-md-5 mb-4 ${totalScore === maxScore ? 'is-perfect' : ''}`}>
                      <div className="d-flex flex-column flex-md-row justify-content-between gap-3 align-items-md-center">
                        <div>
                          <div className="small text-uppercase text-muted mb-2">Eredmény</div>
                          <h2 className="fw-bold mb-2">{totalScore} / {maxScore} pont · {scorePercent}%</h2>
                          <p className="mb-0 text-muted">
                            {results.filter((result) => result.correct).length} helyes válasz a {questions.length} kérdésből.
                          </p>
                        </div>
                        <button type="button" className="btn btn-primary rounded-4 fw-semibold" onClick={handleRestart}>
                          Újrapróbálom
                        </button>
                      </div>
                      {(quizType === 'nagy' || quizType === 'kerdesbank') && (
                        <div className="large-result-panel rounded-4 p-3 mt-4">
                          <div className="fw-semibold mb-3">Tudásterületi bontás</div>
                          <div className="d-grid gap-2">
                            {categoryStats.map((item) => {
                              const percent = item.max ? Math.round((item.earned / item.max) * 100) : 0
                              return (
                                <div key={item.category} className="large-result-row">
                                  <span>{item.category}</span>
                                  <strong>{percent}%</strong>
                                </div>
                              )
                            })}
                          </div>
                          <div className="small text-muted mt-3">
                            {largeQuizAdvice.length
                              ? `Ezt érdemes újravenni: ${largeQuizAdvice.join(', ')}.`
                              : 'Stabil teljesítmény: a fő tudásterületek legalább 70% körül sikerültek.'}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="reader-card rounded-5 shadow-sm border-0 card mb-4">
                    <div className="card-body p-4 p-md-5">
                      <div className="d-flex flex-wrap justify-content-between gap-3 mb-4">
                        <div>
                          <span className="reader-badge rounded-pill px-3 py-2 d-inline-block mb-3">
                            {currentIndex + 1}. kérdés · {activeQuestion.typeLabel}
                          </span>
                          <h2 className="h3 fw-bold mb-2">{activeQuestion.text}</h2>
                          {activeQuestion.instruction && (
                            <p className="text-muted mb-0">{activeQuestion.instruction}</p>
                          )}
                        </div>
                        <div className="reader-meta-box rounded-4 p-3 small text-muted">
                          {activeQuestion.points} pont
                        </div>
                      </div>

                      <QuestionRenderer
                        question={activeQuestion}
                        answer={answers[activeQuestion.id]}
                        onAnswerChange={(value) => handleAnswerChange(activeQuestion.id, value)}
                        submitted={submitted}
                        evaluation={activeEvaluation}
                      />

                      {submitted && activeEvaluation && (
                        <div className={`answer-review mt-4 rounded-4 p-4 ${activeEvaluation.correct ? 'is-correct' : 'is-wrong'}`}>
                          <div className="fw-semibold mb-2">
                            {activeEvaluation.correct ? 'Helyes válasz' : 'Ez most nem lett jó'}
                          </div>
                          <div className="small mb-2"><strong>A te válaszod:</strong> {activeEvaluation.userAnswerLabel}</div>
                          <div className="small mb-2"><strong>Helyes megoldás:</strong> {activeEvaluation.correctAnswerLabel}</div>
                          {activeEvaluation.category && (
                            <div className="small mb-2"><strong>Mért terület:</strong> {activeEvaluation.category}</div>
                          )}
                          {activeEvaluation.explanation && (
                            <div className="small text-muted mb-0">{activeEvaluation.explanation}</div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-between">
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-4 px-4"
                      disabled={currentIndex === 0}
                      onClick={() => setCurrentIndex((current) => Math.max(0, current - 1))}
                    >
                      Előző kérdés
                    </button>

                    {!submitted ? (
                      <button type="button" className="btn btn-primary rounded-4 px-4 fw-semibold" onClick={handleSubmit}>
                        Teszt leadása
                      </button>
                    ) : (
                      <div className="text-muted small align-self-center">A teszt lezárva, nézd át a kérdéseket.</div>
                    )}

                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-4 px-4"
                      disabled={currentIndex === questions.length - 1}
                      onClick={() => setCurrentIndex((current) => Math.min(questions.length - 1, current + 1))}
                    >
                      Következő kérdés
                    </button>
                  </div>
                </div>

                <div className="col-12 col-xl-4">
                  <div className="reader-side-card rounded-5 shadow-sm border-0 card">
                    <div className="card-body p-4">
                      <div className="fw-bold mb-3">Kérdés navigáció</div>
                      <div className="quiz-nav-grid mb-4">
                        {questions.map((question, index) => {
                          const answered = isQuestionAnswered(question, answers[question.id])
                          const result = results.find((item) => item.questionId === question.id)
                          return (
                            <button
                              key={question.id}
                              type="button"
                              className={`quiz-nav-item ${index === currentIndex ? 'is-current' : ''} ${answered ? 'is-answered' : ''} ${submitted && result?.correct ? 'is-correct' : ''} ${submitted && result && !result.correct ? 'is-wrong' : ''}`}
                              onClick={() => setCurrentIndex(index)}
                            >
                              {index + 1}
                            </button>
                          )
                        })}
                      </div>

                      <div className="d-grid gap-3 small text-muted">
                        <div className="d-flex align-items-center gap-2"><span className="legend-dot is-current"></span> aktuális</div>
                        <div className="d-flex align-items-center gap-2"><span className="legend-dot is-answered"></span> van válasz</div>
                        {submitted && <div className="d-flex align-items-center gap-2"><span className="legend-dot is-correct"></span> helyes</div>}
                        {submitted && <div className="d-flex align-items-center gap-2"><span className="legend-dot is-wrong"></span> hibás</div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
