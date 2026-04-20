export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'https://localhost:7072').replace(/\/+$/, '')
export const API_URL = `${API_BASE_URL}/api`

export function getToken() {
  return localStorage.getItem('token')
}

function buildHeaders(headers = {}, hasBody = false) {
  const token = getToken()

  return {
    ...(hasBody ? { 'Content-Type': 'application/json' } : {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...headers,
  }
}

async function readResponse(response) {
  const contentType = response.headers.get('content-type') || ''
  if (!contentType.includes('application/json')) {
    return null
  }

  try {
    return await response.json()
  } catch {
    return null
  }
}

function getFriendlyMessage(response, data, fallbackMessage) {
  if (response.status === 401) {
    return 'Lejárt a bejelentkezés. Jelentkezz be újra.'
  }

  if (response.status === 403) {
    return 'Ehhez a művelethez nincs jogosultságod.'
  }

  if (response.status >= 500) {
    return 'Szerverhiba történt. Próbáld újra később.'
  }

  return data?.message || data?.title || fallbackMessage
}

export async function apiRequest(path, options = {}) {
  const url = path.startsWith('http') ? path : `${API_URL}${path}`
  const hasBody = options.body !== undefined

  const response = await fetch(url, {
    ...options,
    headers: buildHeaders(options.headers, hasBody),
  })

  const data = await readResponse(response)

  if (!response.ok) {
    throw new Error(getFriendlyMessage(response, data, options.errorMessage || 'Nem sikerült betölteni az adatokat.'))
  }

  return data
}
