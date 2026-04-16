const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://localhost:7072'

export async function login(username, password) {
  const response = await fetch(`${API_BASE_URL}/api/Auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })

  let data = null
  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (!response.ok) {
    throw new Error(data?.message || data?.title || 'Sikertelen bejelentkezés')
  }

  return data
}

export async function getMe(token) {
  const response = await fetch(`${API_BASE_URL}/api/Auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (!response.ok) {
    throw new Error('Lejárt munkamenet')
  }

  return await response.json()
}

export function saveAuth(data) {
  localStorage.setItem('token', data.token)
  localStorage.setItem('username', data.username)
  localStorage.setItem('role', data.role)
}

export function clearAuth() {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  localStorage.removeItem('role')
}
