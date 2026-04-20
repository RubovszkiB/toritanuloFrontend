import { Link, useLocation } from 'react-router-dom'

const items = [
  { to: '/home', label: 'Kezdőlap', icon: '⌂', match: ['/home'] },
  { to: '/tanulas', label: 'Tanulás', icon: '▤', match: ['/tanulas', '/tetelek'] },
  { to: '/gyakorlas', label: 'Tesztek', icon: '◉', match: ['/gyakorlas', '/tesztek', '/szemely-kviz'] },
  { to: '/essze-hub', label: 'Esszék', icon: '✎', match: ['/essze-hub', '/esszek', '/hosszu-esszek', '/komplex-esszek'] },
  { to: '/profil', label: 'Profil', icon: '◌', match: ['/profil', '/admin'] },
]

export default function MobileBottomNav() {
  const location = useLocation()

  return (
    <nav className="mobile-bottom-nav" aria-label="Fő mobil navigáció">
      {items.map((item) => (
        <Link
          to={item.to}
          className={`mobile-bottom-nav-item ${item.match.some((path) => location.pathname.startsWith(path)) ? 'active' : ''}`}
          key={item.to}
        >
          <span className="mobile-bottom-nav-icon">{item.icon}</span>
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}
