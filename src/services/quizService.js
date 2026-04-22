import { fallbackQuizData } from '../data/fallbackQuizData'
import { largeQuizData } from '../data/largeQuizData'
import { questionBankData } from '../data/questionBankData'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://localhost:7072'

function getAuthHeaders() {
  const token = localStorage.getItem('token')
  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {}
}

async function fetchJsonCandidate(paths) {
  let lastError = null

  for (const path of paths) {
    try {
      const response = await fetch(`${API_BASE_URL}${path}`, {
        headers: {
          ...getAuthHeaders(),
        },
      })

      if (!response.ok) {
        lastError = new Error(`HTTP ${response.status}`)
        continue
      }

      return await response.json()
    } catch (error) {
      lastError = error
    }
  }

  throw lastError || new Error('Nem sikerült betölteni az adatokat.')
}

function pick(obj, keys, fallback = null) {
  for (const key of keys) {
    if (obj?.[key] !== undefined && obj?.[key] !== null) {
      return obj[key]
    }
  }

  return fallback
}

const windows1252Controls = new Map([
  [0x2018, 0x91],
  [0x2019, 0x92],
  [0x201c, 0x93],
  [0x201d, 0x94],
  [0x2013, 0x96],
  [0x2014, 0x97],
])

function fixMojibake(value) {
  if (typeof value !== 'string' || !/[ÃÂÅ]/.test(value)) {
    return value
  }

  try {
    const bytes = Uint8Array.from([...value].map((char) => {
      const code = char.charCodeAt(0)
      return windows1252Controls.get(code) ?? code
    }))

    return new TextDecoder('utf-8', { fatal: true }).decode(bytes)
  } catch {
    return value
  }
}

function pickText(obj, keys, fallback = '') {
  return fixMojibake(pick(obj, keys, fallback))
}

function normalizeTopics(rawTopics) {
  const list = Array.isArray(rawTopics)
    ? rawTopics
    : rawTopics?.items || rawTopics?.data || rawTopics?.temakorok || []

  return list.map((item, index) => ({
    id: pick(item, ['id', 'temakorId', 'topicId'], index + 1),
    code: pick(item, ['kod', 'code', 'slug'], `temakor-${index + 1}`),
    title: pickText(item, ['nev', 'title', 'name'], `Témakör ${index + 1}`),
    description: pickText(item, ['leiras', 'description'], ''),
    order: pick(item, ['sorszam', 'order'], index + 1),
    testCount: pick(item, ['testCount', 'tesztDb'], 0),
    questionCount: pick(item, ['questionCount', 'kerdesDb'], 0),
  }))
}

function normalizeQuestion(rawQuestion, index = 0) {
  const rawOptions =
    rawQuestion?.options ||
    rawQuestion?.valaszOpcioK ||
    rawQuestion?.valaszopciok ||
    rawQuestion?.opciok ||
    []
  const rawAcceptedAnswers =
    rawQuestion?.acceptedAnswers ||
    rawQuestion?.helyesValaszok ||
    rawQuestion?.answers ||
    []
  const rawPairs = rawQuestion?.pairs || rawQuestion?.parok || []
  const correctOptionIds = rawQuestion?.correctOptionIds || rawQuestion?.interaction?.correctOptionIds || []

  return {
    id: pick(rawQuestion, ['id', 'kerdesId'], index + 1),
    typeId: pick(rawQuestion, ['typeId', 'kerdesTipusId'], null),
    type: pick(rawQuestion, ['type', 'tipusKod', 'kerdesTipusKod'], 'single_choice'),
    typeLabel: pickText(rawQuestion, ['typeLabel', 'tipusNev', 'kerdesTipusNev'], 'Kérdés'),
    text: pickText(rawQuestion, ['text', 'kerdesSzoveg', 'questionText'], 'Kérdés'),
    instruction: pickText(rawQuestion, ['instruction', 'instrukcio'], ''),
    explanation: pickText(rawQuestion, ['explanation', 'magyarazat'], ''),
    difficulty: pick(rawQuestion, ['difficulty', 'nehezseg'], 2),
    points: pick(rawQuestion, ['points', 'pontszam'], 1),
    order: pick(rawQuestion, ['order', 'sorszam'], index + 1),
    category: pickText(rawQuestion, ['category', 'kategoria'], 'általános'),
    skill: pickText(rawQuestion, ['skill', 'kompetencia'], ''),
    sourceHint: pickText(rawQuestion, ['sourceHint', 'forrasTipp'], ''),
    sourceBlocks: rawQuestion?.sourceBlocks || [],
    interaction: rawQuestion?.interaction || {},
    statements: rawQuestion?.statements || rawQuestion?.interaction?.statements || [],
    items: rawQuestion?.items || rawQuestion?.interaction?.items || [],
    correctOptionIds,
    correctOrderIds: rawQuestion?.correctOrderIds || rawQuestion?.interaction?.correctOrderIds || [],
    correctPairs: rawQuestion?.correctPairs || rawQuestion?.interaction?.correctPairs || [],
    sentenceWithBlank: rawQuestion?.sentenceWithBlank || rawQuestion?.interaction?.sentenceWithBlank || '',
    knowledgeElements: rawQuestion?.knowledgeElements || {},
    tags: rawQuestion?.tags || [],
    chronologyEvent: pick(rawQuestion, ['chronologyEvent', 'kronologiaEsemeny'], null),
    options: rawOptions.map((option, optionIndex) => ({
      id: pick(option, ['id', 'valaszId'], optionIndex + 1),
      text: pickText(option, ['text', 'valaszSzoveg'], `Opció ${optionIndex + 1}`),
      isCorrect: Boolean(pick(option, ['isCorrect', 'helyes'], false)) || correctOptionIds.includes(option.id),
      correctOrder: pick(option, ['correctOrder', 'helyesSorrend'], null),
      order: pick(option, ['order', 'sorszam'], optionIndex + 1),
    })),
    acceptedAnswers: rawAcceptedAnswers.map((answer, answerIndex) => ({
      id: pick(answer, ['id'], answerIndex + 1),
      text: pickText(answer, ['text', 'valaszSzoveg'], ''),
      number: pick(answer, ['number', 'valaszSzam'], null),
      era: pick(answer, ['era'], 'NONE'),
      normalized: pick(answer, ['normalized', 'normalizaltValasz'], ''),
    })),
    pairs: rawPairs.map((pair, pairIndex) => ({
      id: pick(pair, ['id'], pairIndex + 1),
      left: pickText(pair, ['left', 'balOldal'], `Bal oldal ${pairIndex + 1}`),
      right: pickText(pair, ['right', 'jobbOldal'], `Jobb oldal ${pairIndex + 1}`),
      order: pick(pair, ['order', 'sorszam'], pairIndex + 1),
    })),
  }
}

function normalizeTests(rawTests) {
  const list = Array.isArray(rawTests)
    ? rawTests
    : rawTests?.items || rawTests?.data || rawTests?.tesztek || []

  return list.map((item, index) => ({
    id: pick(item, ['id', 'tesztId'], index + 1),
    topicId: pick(item, ['topicId', 'temakorId'], null),
    topicTitle: pickText(item, ['topicTitle', 'temakorNev'], ''),
    slug: pick(item, ['slug', 'kod'], `teszt-${index + 1}`),
    title: pickText(item, ['title', 'cim', 'name'], `Teszt ${index + 1}`),
    description: pickText(item, ['description', 'leiras'], ''),
    type: pick(item, ['type', 'tesztTipus'], 'evszam'),
    difficulty: pick(item, ['difficulty', 'nehezseg'], 'konnyu'),
    timeLimitSec: pick(item, ['timeLimitSec', 'idokeretMp'], null),
    questionCount: pick(item, ['questionCount', 'kerdesDb'], item?.questions?.length || item?.kerdesek?.length || 0),
    questions: (item?.questions || item?.kerdesek || []).map(normalizeQuestion),
  }))
}

function filterTestsByType(tests = [], quizType = 'evszam') {
  return tests.filter((test) => test.type === quizType)
}

function findFallbackTopicById(topicId) {
  return [...fallbackQuizData.topics, ...largeQuizData.topics, ...questionBankData.topics].find((topic) => String(topic.id) === String(topicId)) || null
}

function findFallbackTestBySlug(slug) {
  return [...fallbackQuizData.tests, ...largeQuizData.tests, ...questionBankData.tests].find((test) => test.slug === slug) || null
}

function getTopicKey(topic) {
  return String(topic.code || topic.id)
}

function getTestKey(test) {
  return String(test.slug || test.id)
}

function getQuizDataByType(quizType = 'evszam') {
  if (quizType === 'kerdesbank') {
    return questionBankData
  }

  return quizType === 'nagy' ? largeQuizData : fallbackQuizData
}

function mergeTopics(apiTopics = []) {
  const merged = new Map()

  fallbackQuizData.topics.forEach((topic) => {
    merged.set(getTopicKey(topic), { ...topic })
  })

  largeQuizData.topics.forEach((topic) => {
    merged.set(getTopicKey(topic), { ...topic })
  })

  questionBankData.topics.forEach((topic) => {
    merged.set(getTopicKey(topic), { ...topic })
  })

  apiTopics.forEach((topic) => {
    const key = getTopicKey(topic)
    const fallbackTopic = merged.get(key)

    merged.set(key, {
      ...(fallbackTopic || {}),
      ...topic,
      testCount: topic.testCount || fallbackTopic?.testCount || 0,
      questionCount: topic.questionCount || fallbackTopic?.questionCount || 0,
    })
  })

  return [...merged.values()].sort((first, second) => {
    const orderDelta = (first.order || 999) - (second.order || 999)
    if (orderDelta !== 0) {
      return orderDelta
    }

    return first.title.localeCompare(second.title, 'hu')
  })
}

function mergeTests(apiTests = []) {
  const merged = new Map()

  fallbackQuizData.tests.forEach((test) => {
    merged.set(getTestKey(test), { ...test })
  })

  largeQuizData.tests.forEach((test) => {
    merged.set(getTestKey(test), { ...test })
  })

  questionBankData.tests.forEach((test) => {
    merged.set(getTestKey(test), { ...test })
  })

  apiTests.forEach((test) => {
    const key = getTestKey(test)
    const fallbackTest = merged.get(key)
    const apiQuestions = Array.isArray(test.questions) ? test.questions : []

    merged.set(key, {
      ...(fallbackTest || {}),
      ...test,
      questionCount: test.questionCount || apiQuestions.length || fallbackTest?.questionCount || 0,
      questions: apiQuestions.length ? apiQuestions : fallbackTest?.questions || [],
    })
  })

  return [...merged.values()].sort((first, second) => {
    const topicDelta = (first.topicId || 999) - (second.topicId || 999)
    if (topicDelta !== 0) {
      return topicDelta
    }

    return first.title.localeCompare(second.title, 'hu')
  })
}

function getSourceLabel(apiCount, mergedCount) {
  if (apiCount > 0 && mergedCount > apiCount) {
    return 'mixed'
  }

  if (apiCount > 0) {
    return 'api'
  }

  return 'fallback'
}

export async function getQuizTopics(quizType = null) {
  if (quizType === 'kerdesbank') {
    try {
      const rawData = await fetchJsonCandidate(['/api/emelt-kerdesbank/temak'])
      return {
        source: 'api',
        items: normalizeTopics(rawData),
      }
    } catch {
      return {
        source: 'fallback',
        items: questionBankData.topics,
      }
    }
  }

  if (quizType === 'nagy') {
    return {
      source: 'fallback',
      items: largeQuizData.topics,
    }
  }

  try {
    const rawData = await fetchJsonCandidate([
      '/api/TesztTemakorok',
      '/api/teszttemakorok',
      '/api/Quiz/topics',
      '/api/quiz/topics',
    ])

    const apiTopics = normalizeTopics(rawData)
    const mergedTopics = mergeTopics(apiTopics)

    return {
      source: getSourceLabel(apiTopics.length, mergedTopics.length),
      items: mergedTopics,
    }
  } catch {
    const quizData = getQuizDataByType(quizType || 'evszam')
    return {
      source: 'fallback',
      items: quizData.topics,
    }
  }
}

export async function getQuizTests(topicId = null, quizType = 'evszam') {
  try {
    const typeQuery = `type=${encodeURIComponent(quizType)}`
    const separator = topicId ? '&' : '?'
    const rawData = await fetchJsonCandidate([
      ...(quizType === 'kerdesbank'
        ? [topicId ? `/api/emelt-kerdesbank/tests?topicId=${topicId}` : '/api/emelt-kerdesbank/tests']
        : []),
      topicId ? `/api/Tesztek?temakorId=${topicId}${separator}${typeQuery}` : `/api/Tesztek?${typeQuery}`,
      topicId ? `/api/tesztek?temakorId=${topicId}${separator}${typeQuery}` : `/api/tesztek?${typeQuery}`,
      topicId ? `/api/Quiz/tests?topicId=${topicId}${separator}${typeQuery}` : `/api/Quiz/tests?${typeQuery}`,
      topicId ? `/api/quiz/tests?topicId=${topicId}${separator}${typeQuery}` : `/api/quiz/tests?${typeQuery}`,
    ])

    const apiTests = normalizeTests(rawData)
    let tests = filterTestsByType(mergeTests(apiTests), quizType)

    if (topicId) {
      tests = tests.filter((test) => String(test.topicId) === String(topicId))
    }

    return {
      source: getSourceLabel(filterTestsByType(apiTests, quizType).length, tests.length),
      items: tests.map((test) => ({
        ...test,
        questions: [],
      })),
    }
  } catch {
    const quizData = getQuizDataByType(quizType)
    let tests = filterTestsByType([...quizData.tests], quizType)
    if (topicId) {
      tests = tests.filter((test) => String(test.topicId) === String(topicId))
    }

    return {
      source: 'fallback',
      items: tests.map((test) => ({
        ...test,
        questions: [],
      })),
    }
  }
}

export async function getQuizBySlug(slug, quizType = null) {
  const fallbackTest = findFallbackTestBySlug(slug)

  try {
    const rawData = await fetchJsonCandidate([
      ...(quizType === 'kerdesbank' ? [`/api/emelt-kerdesbank/tests/${slug}`] : []),
      `/api/Tesztek/slug/${slug}`,
      `/api/tesztek/slug/${slug}`,
      `/api/Tesztek/${slug}`,
      `/api/tesztek/${slug}`,
      `/api/Quiz/tests/${slug}`,
      `/api/quiz/tests/${slug}`,
    ])

    const test = normalizeTests(rawData)[0] || normalizeTests([rawData])[0]
    if (!test || (quizType && test.type !== quizType)) {
      throw new Error('Hiányos tesztadat')
    }

    const mergedTest = {
      ...(fallbackTest || {}),
      ...test,
      questions: test.questions?.length ? test.questions : fallbackTest?.questions || [],
      questionCount: test.questionCount || test.questions?.length || fallbackTest?.questionCount || 0,
    }

    if (!mergedTest.questions?.length) {
      throw new Error('Hiányos tesztadat')
    }

    return {
      source: fallbackTest ? 'mixed' : 'api',
      item: mergedTest,
    }
  } catch {
    if (!fallbackTest || (quizType && fallbackTest.type !== quizType)) {
      throw new Error('A teszt nem található.')
    }

    return {
      source: 'fallback',
      item: fallbackTest,
    }
  }
}

export function getQuizTopicMeta(topicId) {
  return findFallbackTopicById(topicId)
}
