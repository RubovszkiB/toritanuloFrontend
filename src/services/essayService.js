import essaySource from '../data/essaySource.json'
import helperSource from '../data/rovidKiegeszitoSegedFogalmazasV2.json'
import shortEssayTaskPreviews from '../data/shortEssayTaskPreviews.json'

const CATEGORY_KEYS = [
  'important_time',
  'important_space',
  'important_people',
  'important_concepts',
  'causes',
  'processes',
  'consequences',
]

export const essayCategoryMeta = {
  important_time: { label: 'Idő', shortLabel: 'évszám', weight: 1 },
  important_space: { label: 'Tér', shortLabel: 'helyszín', weight: 1 },
  important_people: { label: 'Személy', shortLabel: 'személy', weight: 1 },
  important_concepts: { label: 'Fogalom', shortLabel: 'fogalom', weight: 1 },
  causes: { label: 'Ok', shortLabel: 'ok', weight: 1 },
  processes: { label: 'Folyamat', shortLabel: 'folyamat', weight: 1 },
  consequences: { label: 'Következmény', shortLabel: 'következmény', weight: 1 },
}

const accentMap = {
  á: 'a',
  é: 'e',
  í: 'i',
  ó: 'o',
  ö: 'o',
  ő: 'o',
  ú: 'u',
  ü: 'u',
  ű: 'u',
}

export function normalizeEssayText(value = '') {
  return String(value)
    .toLowerCase()
    .replace(/[áéíóöőúüű]/g, (letter) => accentMap[letter] || letter)
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function slugify(value) {
  return normalizeEssayText(value).replace(/\s+/g, '-').replace(/-+/g, '-')
}

function extractYears(value = '') {
  return String(value).match(/\b\d{3,4}\b/g) || []
}

function getContentWords(value = '') {
  return normalizeEssayText(value)
    .split(' ')
    .filter((word) => word.length >= 4 && !['mint', 'volt', 'utan', 'elott', 'kozott', 'soran'].includes(word))
}

function getTopicGroup(entry) {
  const era = entry.era || 'Egyéb'
  return era.split('/')[0].trim()
}

const taskPreviewsByPrompt = (shortEssayTaskPreviews.entries || []).reduce((map, preview) => {
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
  const pastPrompts = (entry.past_prompts || []).map((prompt, promptIndex) => ({
    ...prompt,
    taskPreview: taskPreviewsByPrompt[`${entry.id}:${promptIndex}`] || null,
  }))

  return {
    ...entry,
    past_prompts: pastPrompts,
    slug: entry.slug || slugify(entry.id || entry.tema || `essze-${index + 1}`),
    group: getTopicGroup(entry),
    helperContent: helperById[entry.id] || null,
    keyElementCount,
    pastPromptCount: pastPrompts.length,
    taskPreviewCount: pastPrompts.filter((prompt) => prompt.taskPreview).length,
  }
}

export const essayTopics = (essaySource.entries || []).map(normalizeEntry)

export function getEssayTopics() {
  return essayTopics
}

export function getEssayTopicBySlug(slug) {
  return essayTopics.find((topic) => topic.slug === slug || topic.id === slug) || null
}

function matchDirectItem(item, normalizedDraft) {
  const normalizedItem = normalizeEssayText(item)
  const years = extractYears(item)

  if (years.some((year) => normalizedDraft.includes(year))) {
    return true
  }

  if (normalizedItem.length >= 4 && normalizedDraft.includes(normalizedItem)) {
    return true
  }

  const words = getContentWords(item)
  if (words.length <= 1) {
    return false
  }

  const requiredMatches = Math.min(words.length, words.length >= 5 ? 3 : 2)
  return words.filter((word) => normalizedDraft.includes(word)).length >= requiredMatches
}

function matchIdeaItem(item, normalizedDraft) {
  const words = getContentWords(item)
  if (!words.length) {
    return false
  }

  const requiredMatches = Math.min(words.length, words.length >= 7 ? 4 : 3)
  return words.filter((word) => normalizedDraft.includes(word)).length >= requiredMatches
}

function analyzeCategory(topic, key, normalizedDraft) {
  const items = topic[key] || []
  const matcher = ['causes', 'processes', 'consequences'].includes(key) ? matchIdeaItem : matchDirectItem
  const used = items.filter((item) => matcher(item, normalizedDraft))
  const missing = items.filter((item) => !used.includes(item))
  const target = key === 'important_concepts' ? Math.min(2, items.length || 1) : 1
  const covered = items.length === 0 || used.length >= target

  return {
    key,
    ...essayCategoryMeta[key],
    items,
    used,
    missing,
    covered,
    target,
  }
}

export function analyzeEssayDraft(topic, draft) {
  const normalizedDraft = normalizeEssayText(draft)
  const categories = CATEGORY_KEYS.map((key) => analyzeCategory(topic, key, normalizedDraft))
  const coveredCount = categories.filter((category) => category.covered).length
  const completion = Math.round((coveredCount / categories.length) * 100)
  const usedCount = categories.reduce((sum, category) => sum + category.used.length, 0)
  const totalCount = categories.reduce((sum, category) => sum + category.items.length, 0)
  const wordCount = normalizedDraft ? normalizedDraft.split(' ').length : 0

  const missingCategories = categories.filter((category) => !category.covered)
  const suggestions = missingCategories.slice(0, 3).map((category) => {
    const example = category.missing[0]
    return example
      ? `Tegyél bele legalább egy ${category.shortLabel} elemet: ${example}`
      : `Erősítsd ezt a kategóriát: ${category.label}`
  })

  return {
    categories,
    completion,
    coveredCount,
    usedCount,
    totalCount,
    wordCount,
    missingCategories,
    suggestions,
    status:
      completion >= 85
        ? 'Stabil vázlat'
        : completion >= 60
          ? 'Jó irány'
          : completion >= 30
            ? 'Alakul'
            : 'Kezdő vázlat',
  }
}
