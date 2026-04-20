import { apiRequest } from './apiClient'

export function getTetelek(search = '') {
  const query = search.trim() ? `?q=${encodeURIComponent(search.trim())}` : ''

  return apiRequest(`/Tetelek${query}`, {
    errorMessage: 'Hiba történt a tételek betöltése közben.',
  })
}

export function getTetelById(id) {
  return apiRequest(`/Tetelek/${id}`, {
    errorMessage: 'Hiba történt a tétel betöltése közben.',
  })
}
