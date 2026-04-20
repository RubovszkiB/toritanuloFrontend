import complexEssaySource from '../data/complexEssaySource.json'
import helperSource from '../data/komplexKiegeszitoSegedFogalmazasV2.json'
import complexEssayTaskPreviews from '../data/complexEssayTaskPreviews.json'
import { normalizeEssayText } from './essayService'

export const complexEssayTypeMeta = {
  korszakokon_ativelo: {
    label: 'Korszakokon átívelő',
    shortLabel: 'Átívelő',
    routeValue: 'korszakokon-ativelo',
    tone: 'timeline',
  },
  osszehasonlito: {
    label: 'Összehasonlító',
    shortLabel: 'Összehasonlító',
    routeValue: 'osszehasonlito',
    tone: 'compare',
  },
}

const previewsByPrompt = (complexEssayTaskPreviews.entries || []).reduce((map, preview) => {
  map[`${preview.topicId}:${preview.promptIndex}`] = preview
  return map
}, {})

const helperById = [
  ...(helperSource.korszakokon_ativelo || []),
  ...(helperSource.osszehasonlito || []),
].reduce((map, helper) => {
  map[helper.id] = helper
  return map
}, {})

function normalizeEntry(entry) {
  const pastPrompts = (entry.past_prompts || []).map((prompt, promptIndex) => ({
    ...prompt,
    taskPreview: previewsByPrompt[`${entry.id}:${promptIndex}`] || null,
  }))

  return {
    ...entry,
    past_prompts: pastPrompts,
    helperContent: helperById[entry.id] || null,
    typeMeta: complexEssayTypeMeta[entry.complexType],
    keyElementCount:
      (entry.required_axes?.length || 0) +
      (entry.required_concepts?.length || 0) +
      (entry.required_people?.length || 0) +
      (entry.required_dates?.length || 0) +
      (entry.required_places?.length || 0),
    requiredAxisCount: entry.required_axes?.length || 0,
    previewCount: pastPrompts.filter((prompt) => prompt.taskPreview).length,
  }
}

export const complexEssayTopics = (complexEssaySource.entries || []).map(normalizeEntry)

export function getComplexEssayTopics(type = 'all') {
  if (type === 'all') {
    return complexEssayTopics
  }

  return complexEssayTopics.filter((topic) => topic.complexType === type)
}

export function getComplexEssayTopicBySlug(slug) {
  return complexEssayTopics.find((topic) => topic.slug === slug || topic.id === slug) || null
}

export function filterComplexEssayTopics({ type = 'all', search = '' } = {}) {
  const needle = normalizeEssayText(search)

  return getComplexEssayTopics(type).filter((topic) => {
    if (!needle) {
      return true
    }

    return normalizeEssayText(
      `${topic.theme} ${topic.period} ${topic.exam} ${topic.prompt} ${topic.minimum_answer_focus}`,
    ).includes(needle)
  })
}
