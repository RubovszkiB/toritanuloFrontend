import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clearAuth, getMe, login, saveAuth } from '../services/authService'

export default function LoginPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return

    getMe(token)
      .then(() => navigate('/home', { replace: true }))
      .catch(() => clearAuth())
  }, [navigate])

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const data = await login(username, password)
      saveAuth(data)
      navigate('/home', { replace: true })
    } catch (err) {
      if (err.message === 'Failed to fetch') {
        setError('A backend nem érhető el. Nézd meg, hogy a 7072-es HTTPS porton fut-e.')
      } else {
        setError(err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-bg d-flex align-items-center justify-content-center min-vh-100 p-3">
      <div className="login-shell card border-0 shadow-lg">
        <div className="card-body p-4 p-md-5">
          <div className="text-center mb-4">
            <div className="brand-pill mb-3">TöriTanuló</div>
            <h1 className="display-6 fw-semibold mb-2">Bejelentkezés</h1>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="form-control form-control-lg rounded-4"
                placeholder="Felhasználónév"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                className="form-control form-control-lg rounded-4"
                placeholder="Jelszó"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>

            <button className="btn btn-primary btn-lg w-100 rounded-4 py-3" disabled={loading}>
              {loading ? 'Belépés...' : 'Belépés'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
