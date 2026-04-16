import { useNavigate } from 'react-router-dom'
import { clearAuth } from '../services/authService'

export default function HomePage() {
  const navigate = useNavigate()
  const username = localStorage.getItem('username')
  const role = localStorage.getItem('role')

  function logout() {
    clearAuth()
    navigate('/', { replace: true })
  }

  return (
    <div className="app-bg min-vh-100 p-3 p-md-4">
      <div className="container">
        <div className="card border-0 shadow-lg rounded-5">
          <div className="card-body p-4 p-md-5">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
              <div>
                <div className="brand-pill mb-3">Kezdőoldal</div>
                <h2 className="fw-bold mb-1">Szia, {username}!</h2>
                <p className="text-secondary mb-0">Szerepkör: {role}</p>
              </div>
              <button className="btn btn-outline-primary rounded-4 px-4" onClick={logout}>
                Kilépés
              </button>
            </div>

            <div className="row g-3">
              <div className="col-12 col-md-6">
                <div className="card h-100 rounded-5 border-0 feature-card">
                  <div className="card-body p-4">
                    <h5 className="fw-bold">Tételek</h5>
                    <p className="mb-0 text-secondary">Itt lesznek majd a történelmi témakörök.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="card h-100 rounded-5 border-0 feature-card">
                  <div className="card-body p-4">
                    <h5 className="fw-bold">Gyakorlás</h5>
                    <p className="mb-0 text-secondary">Itt jönnek majd az évszámok, személyek, fogalmak.</p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card rounded-5 border-0 feature-card">
                  <div className="card-body p-4">
                    <h5 className="fw-bold">Alap kész</h5>
                    <p className="mb-0 text-secondary">Most már van belépés és egy kezdetleges kezdőoldal.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
