import { Link, NavLink, useNavigate } from 'react-router-dom'
import { clearAuth } from '../services/authService'

export default function AppNavbar() {
  const navigate = useNavigate()
  const username = localStorage.getItem('username') || 'Felhasználó'
  const role = localStorage.getItem('role') || 'Student'
  const isAdmin = role.toLowerCase() === 'admin'

  function handleLogout() {
    clearAuth()
    navigate('/', { replace: true })
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top app-navbar shadow-sm">
      <div className="container">
        <Link to="/home" className="navbar-brand fw-bold d-flex align-items-center gap-2">
          <span className="brand-mark">T</span>
          <span>TöriTanuló</span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Navigáció megnyitása"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-3 mb-lg-0 gap-lg-2">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link">
                Főoldal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tetelek" className="nav-link">
                Tételek olvasása
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/home#modulok">
                Modulok
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/home#elonyok">
                Előnyök
              </a>
            </li>
            {isAdmin && (
              <li className="nav-item">
                <NavLink to="/admin" className="nav-link admin-link">
                  Admin felület
                </NavLink>
              </li>
            )}
          </ul>

          <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-2 gap-lg-3">
            <div className="user-pill text-white-50 small">
              <span className="d-block fw-semibold text-white">{username}</span>
              <span>{role}</span>
            </div>
            <button className="btn btn-warning fw-semibold px-3" onClick={handleLogout}>
              Kilépés
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
