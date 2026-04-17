const API_BASE_URL = 'https://localhost:7072/api'

function getToken() {
  return localStorage.getItem('token')
}

async function apiRequest(url, options = {}) {
  const token = getToken()

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  })

  if (!response.ok) {
    let message = 'Hiba történt a haladás mentése közben.'

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

export function getTetelProgress(tetelId) {
  return apiRequest(`${API_BASE_URL}/TetelProgress/${tetelId}`)
}

export function saveTetelProgress(tetelId, haladasSzazalek) {
  return apiRequest(`${API_BASE_URL}/TetelProgress/${tetelId}`, {
    method: 'PUT',
    body: JSON.stringify({ haladasSzazalek }),
  })
}
