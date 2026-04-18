import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clearAuth, getMe, login, saveAuth } from '../services/authService'

const highlights = [
  'Évszám kvízek több feladattípussal',
  'Mobilbarát, gyorsan használható kezelőfelület',
  'Később könnyen bővíthető admin nézet',
]

export default function LoginPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      return
    }

    getMe(token)
      .then(() => navigate('/home', { replace: true }))
      .catch(() => clearAuth())
  }, [navigate])

  async function handleSubmit(event) {
    event.preventDefault()
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
    <div className="login-page min-vh-100 d-flex align-items-center py-4 py-md-5">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-center">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="login-showcase text-white">
              <span className="badge rounded-pill hero-badge px-3 py-2 mb-3">
                Történelem gyakorlóplatform
              </span>
              <h1 className="display-5 fw-bold mb-3">
                Egy helyen olvashatod a tételeket és rögtön gyakorolhatod is az évszámokat.
              </h1>
              <p className="lead text-white-50 mb-4">
                A belépés után modern főoldal, külön kvízközpont és részletes tesztnézet fogad.
              </p>

              <div className="row g-3">
                {highlights.map((item) => (
                  <div className="col-12 col-sm-6" key={item}>
                    <div className="glass-card h-100 p-3 rounded-4">
                      <div className="small text-uppercase text-white-50 mb-2">Újdonság</div>
                      <div className="fw-semibold">{item}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className="card border-0 shadow-lg login-card mx-auto">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="brand-icon">TT</div>
                  <div>
                    <div className="text-muted small">Üdv újra</div>
                    <h2 className="h3 fw-bold mb-0">Bejelentkezés</h2>
                  </div>
                </div>

                <p className="text-muted mb-4">
                  Lépj be a fiókodba, és nyisd meg a tételolvasót vagy a többféle kérdéstípust használó évszám kvízeket.
                </p>

                {error && (
                  <div className="alert alert-danger rounded-4" role="alert">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="d-grid gap-3">
                  <div>
                    <label className="form-label fw-semibold">Felhasználónév</label>
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-4"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      autoComplete="username"
                      placeholder="Add meg a felhasználóneved"
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label fw-semibold">Jelszó</label>
                    <input
                      type="password"
                      className="form-control form-control-lg rounded-4"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      placeholder="Add meg a jelszavad"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-4 fw-semibold py-3 mt-2"
                    disabled={loading}
                  >
                    {loading ? 'Belépés...' : 'Belépés'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
