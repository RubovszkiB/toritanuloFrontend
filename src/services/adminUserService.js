import { apiRequest } from './apiClient'

export function getUsers() {
  return apiRequest('/Users', {
    errorMessage: 'Hiba történt a felhasználók betöltése közben.',
  })
}

export function createUser(payload) {
  return apiRequest('/Users', {
    method: 'POST',
    body: JSON.stringify(payload),
    errorMessage: 'Hiba történt a felhasználó létrehozása közben.',
  })
}

export function updateUser(userId, payload) {
  return apiRequest(`/Users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    errorMessage: 'Hiba történt a felhasználó módosítása közben.',
  })
}
