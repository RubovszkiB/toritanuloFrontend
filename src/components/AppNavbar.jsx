import { NavLink, useNavigate } from 'react-router-dom'
import { clearAuth } from '../services/authService'
import MobileBottomNav from './MobileBottomNav'

const mainLinks = [
  { to: '/home', label: 'Kezdőlap' },
  { to: '/tanulas', label: 'Tanulás' },
  { to: '/gyakorlas', label: 'Tesztek' },
  { to: '/essze-hub', label: 'Esszék' },
  { to: '/profil', label: 'Profil' },
]

export default function AppNavbar() {
  const navigate = useNavigate()
  const username = localStorage.getItem('username') || 'Felhasználó'
  const role = (localStorage.getItem('role') || 'Student').toLowerCase()
  const isAdmin = role === 'admin'

  function logout() {
    clearAuth()
    navigate('/', { replace: true })
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg app-navbar sticky-top border-bottom border-white border-opacity-10">
        <div className="container py-2">
          <NavLink to="/home" className="navbar-brand d-flex align-items-center gap-3 text-white fw-bold">
            <span className="brand-mark">TT</span>
            <span>TöriTanuló</span>
          </NavLink>

          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Navigáció váltása"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              {mainLinks.map((link) => (
                <li className="nav-item" key={link.to}>
                  <NavLink to={link.to} className="nav-link px-3">
                    {link.label}
                  </NavLink>
                </li>
              ))}
              {isAdmin && (
                <li className="nav-item">
                  <NavLink to="/admin" className="nav-link px-3 admin-link">
                    Admin
                  </NavLink>
                </li>
              )}
              <li className="nav-item ms-lg-2">
                <div className="user-pill text-white">
                  <div className="fw-semibold small">{username}</div>
                  <div className="text-white-50 small text-capitalize">{role === 'admin' ? 'Admin' : 'Tanuló'}</div>
                </div>
              </li>
              <li className="nav-item ms-lg-2 mt-3 mt-lg-0">
                <button type="button" onClick={logout} className="btn btn-outline-light rounded-4 px-3">
                  Kilépés
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <MobileBottomNav />
    </>
  )
}
