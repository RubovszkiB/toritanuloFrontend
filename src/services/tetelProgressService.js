import { apiRequest } from './apiClient'

export function getTetelProgress(tetelId) {
  return apiRequest(`/TetelProgress/${tetelId}`, {
    errorMessage: 'Hiba történt a haladás betöltése közben.',
  })
}

export function getAllTetelProgress() {
  return apiRequest('/TetelProgress', {
    errorMessage: 'Hiba történt a haladás betöltése közben.',
  })
}

export function getRecentTetelProgress() {
  return apiRequest('/TetelProgress/recent', {
    errorMessage: 'Hiba történt a legutóbbi tételek betöltése közben.',
  })
}

export function saveTetelProgress(tetelId, progress) {
  const payload = typeof progress === 'number'
    ? { haladasSzazalek: progress }
    : {
        haladasSzazalek: Number(progress?.haladasSzazalek || 0),
        lastPage: Number(progress?.lastPage || 1),
        scrollProgress: Number(progress?.scrollProgress || 0),
        pageCount: Number(progress?.pageCount || 0),
        completed: Boolean(progress?.completed),
      }

  return apiRequest(`/TetelProgress/${tetelId}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    errorMessage: 'Hiba történt a haladás mentése közben.',
  })
}
