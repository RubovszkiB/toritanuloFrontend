import longEssaySource from '../data/longEssaySource.json'
import helperSource from '../data/hosszuKiegeszitoSegedFogalmazasV2.json'
import longEssayTaskPreviews from '../data/longEssayTaskPreviews.json'
import { normalizeEssayText } from './essayService'

const STRUCTURE_KEYS = ['bevezetes', 'elozmenyek', 'targyalas', 'kovetkezmenyek', 'lezaras']

const CATEGORY_KEYS = [
  'important_time',
  'important_space',
  'important_people',
  'important_concepts',
  'causes',
  'processes',
  'consequences',
  'long_term_effects',
]

export const longEssayCategoryMeta = {
  important_time: { label: 'Időadat', shortLabel: 'évszám', target: 2 },
  important_space: { label: 'Tér', shortLabel: 'helyszín', target: 1 },
  important_people: { label: 'Személy', shortLabel: 'személy', target: 2 },
  important_concepts: { label: 'Fogalom', shortLabel: 'fogalom', target: 3 },
  causes: { label: 'Ok', shortLabel: 'ok', target: 2 },
  processes: { label: 'Folyamat', shortLabel: 'folyamat', target: 2 },
  consequences: { label: 'Következmény', shortLabel: 'következmény', target: 2 },
  long_term_effects: { label: 'Hosszú távú hatás', shortLabel: 'hosszú távú hatás', target: 1 },
}

export const longEssayStructureMeta = {
  bevezetes: { label: 'Bevezetés', hint: 'Helyezd el a témát korszakban és problémában.' },
  elozmenyek: { label: 'Előzmények', hint: 'Mutasd meg, miből következik a fő folyamat.' },
  targyalas: { label: 'Tárgyalás', hint: 'Fejtsd ki a fő eseménysort, intézkedéseket és összefüggéseket.' },
  kovetkezmenyek: { label: 'Következmények', hint: 'Zárd le közvetlen és távolabbi következményekkel.' },
  lezaras: { label: 'Lezárás', hint: 'Adj rövid értékelést vagy történeti jelentőséget.' },
}

function slugify(value) {
  return normalizeEssayText(value).replace(/\s+/g, '-').replace(/-+/g, '-')
}

function getGroup(entry) {
  return (entry.era || 'Egyéb').split('/')[0].trim()
}

function getContentWords(value = '') {
  return normalizeEssayText(value)
    .split(' ')
    .filter((word) => word.length >= 4 && !['mint', 'volt', 'utan', 'elott', 'kozott', 'soran', 'illetve'].includes(word))
}

const taskPreviewsByPrompt = (longEssayTaskPreviews.entries || []).reduce((map, preview) => {
  const key = `${preview.topicId}:${preview.promptIndex}`
  map[key] = preview
  return map
}, {})

const helperById = (helperSource.entries || []).reduce((map, helper) => {
  map[helper.id] = helper
  return map
}, {})

function normalizeEntry(entry, index) {
  const keyElementCount = CATEGORY_KEYS.reduce((sum, key) => sum + (entry[key]?.length || 0), 0)
  const requiredCount = Object.values(entry.required_elements_min || {}).reduce((sum, items) => sum + (items?.length || 0), 0)
  const pastPrompts = (entry.past_prompts || []).map((prompt, promptIndex) => ({
    ...prompt,
    taskPreview: taskPreviewsByPrompt[`${entry.id}:${promptIndex}`] || null,
  }))

  return {
    ...entry,
    past_prompts: pastPrompts,
    slug: entry.slug || slugify(entry.id || entry.tema || `hosszu-essze-${index + 1}`),
    group: getGroup(entry),
    helperContent: helperById[entry.id] || null,
    keyElementCount,
    requiredCount,
    pastPromptCount: pastPrompts.length,
    taskPreviewCount: pastPrompts.filter((prompt) => prompt.taskPreview).length,
  }
}

export const longEssayTopics = (longEssaySource.entries || []).map(normalizeEntry)

export function getLongEssayTopics() {
  return longEssayTopics
}

export function getLongEssayTopicBySlug(slug) {
  return longEssayTopics.find((topic) => topic.slug === slug || topic.id === slug) || null
}

function extractYears(value = '') {
  return String(value).match(/\b\d{3,4}\b/g) || []
}

function matchesItem(item, normalizedDraft, strict = false) {
  const normalizedItem = normalizeEssayText(item)
  const years = extractYears(item)

  if (years.some((year) => normalizedDraft.includes(year))) {
    return true
  }

  if (normalizedItem.length >= 4 && normalizedDraft.includes(normalizedItem)) {
    return true
  }

  const words = getContentWords(item)
  if (!words.length) {
    return false
  }

  const requiredMatches = strict ? Math.min(words.length, 4) : Math.min(words.length, words.length >= 6 ? 3 : 2)
  return words.filter((word) => normalizedDraft.includes(word)).length >= requiredMatches
}

function analyzeCategory(topic, key, normalizedDraft) {
  const items = topic[key] || []
  const target = Math.min(longEssayCategoryMeta[key].target, Math.max(items.length, 1))
  const strict = ['causes', 'processes', 'consequences', 'long_term_effects'].includes(key)
  const used = items.filter((item) => matchesItem(item, normalizedDraft, strict))

  return {
    key,
    ...longEssayCategoryMeta[key],
    items,
    used,
    missing: items.filter((item) => !used.includes(item)),
    target,
    covered: items.length === 0 || used.length >= target,
  }
}

function analyzeRequiredElements(topic, normalizedDraft) {
  return Object.entries(topic.required_elements_min || {}).map(([key, items]) => {
    const used = items.filter((item) => matchesItem(item, normalizedDraft, false))

    return {
      key,
      label:
        key === 'szemely'
          ? 'Kötelező személy'
          : key === 'evszam'
            ? 'Kötelező évszám'
            : key === 'fogalom'
              ? 'Kötelező fogalom'
              : 'Kötelező ok/következmény',
      items,
      used,
      missing: items.filter((item) => !used.includes(item)),
      covered: used.length >= Math.min(items.length, 1),
    }
  })
}

function analyzeStructure(topic, normalizedDraft) {
  const outline = topic.extended_outline || {}

  return STRUCTURE_KEYS.map((key) => {
    const outlineText = outline[key] || ''
    const words = getContentWords(outlineText)
    const usedWords = words.filter((word) => normalizedDraft.includes(word))
    const target = Math.min(words.length, key === 'targyalas' ? 4 : 2)

    return {
      key,
      ...longEssayStructureMeta[key],
      outlineText,
      covered: words.length === 0 || usedWords.length >= target,
      usedWords,
      target,
    }
  })
}

export function analyzeLongEssayDraft(topic, draft) {
  const normalizedDraft = normalizeEssayText(draft)
  const categories = CATEGORY_KEYS.map((key) => analyzeCategory(topic, key, normalizedDraft))
  const requiredElements = analyzeRequiredElements(topic, normalizedDraft)
  const structure = analyzeStructure(topic, normalizedDraft)
  const wordCount = normalizedDraft ? normalizedDraft.split(' ').length : 0

  const contentScore = Math.round((categories.filter((category) => category.covered).length / categories.length) * 55)
  const requiredScore = requiredElements.length
    ? Math.round((requiredElements.filter((item) => item.covered).length / requiredElements.length) * 25)
    : 25
  const structureScore = Math.round((structure.filter((item) => item.covered).length / structure.length) * 20)
  const completion = Math.min(100, contentScore + requiredScore + structureScore)

  const suggestions = [
    ...requiredElements.filter((item) => !item.covered).slice(0, 2).map((item) => `${item.label}: ${item.missing[0]}`),
    ...structure.filter((item) => !item.covered).slice(0, 2).map((item) => `Szerkezeti rész hiányzik: ${item.label}`),
    ...categories.filter((item) => !item.covered).slice(0, 2).map((item) => `Erősítsd: ${item.label}`),
  ].slice(0, 5)

  return {
    categories,
    requiredElements,
    structure,
    completion,
    wordCount,
    contentScore,
    requiredScore,
    structureScore,
    usedCount: categories.reduce((sum, category) => sum + category.used.length, 0),
    totalCount: categories.reduce((sum, category) => sum + category.items.length, 0),
    suggestions,
    status:
      completion >= 86
        ? 'Erős hosszú esszévázlat'
        : completion >= 66
          ? 'Jól épül'
          : completion >= 40
            ? 'Alakul, de még hiányos'
            : 'Vázlatindítás',
  }
}
