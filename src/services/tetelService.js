const API_BASE_URL = 'https://localhost:7072/api'

function getToken() {
  return localStorage.getItem('token')
}

async function apiGet(url) {
  const token = getToken()

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    let message = 'Hiba történt a tételek betöltése közben.'

    try {
      const data = await response.json()
      message = data.message || message
    } catch {
      // nincs teendő
    }

    throw new Error(message)
  }

  return response.json()
}

export function getTetelek(search = '') {
  const query = search.trim() ? `?q=${encodeURIComponent(search.trim())}` : ''
  return apiGet(`${API_BASE_URL}/Tetelek${query}`)
}

export function getTetelById(id) {
  return apiGet(`${API_BASE_URL}/Tetelek/${id}`)
}
