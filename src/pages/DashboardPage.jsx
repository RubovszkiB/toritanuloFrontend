import { useNavigate } from 'react-router-dom'
import { clearAuth } from '../services/authService'

function DashboardPage() {
  const navigate = useNavigate()
  const username = localStorage.getItem('username')
  const role = localStorage.getItem('role')

  function handleLogout() {
    clearAuth()
    navigate('/login', { replace: true })
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-shell">
        <div className="dashboard-top">
          <div>
            <div className="dashboard-badge">Sikeres belépés</div>
            <h1 className="dashboard-title">Üdv, {username}!</h1>
            <p className="dashboard-subtitle">Szerepkör: {role}</p>
          </div>

          <button className="btn btn-outline-primary" onClick={handleLogout}>
            Kilépés
          </button>
        </div>

        <div className="dashboard-box">
          Itt lesz később a tanulói és admin felület.
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
