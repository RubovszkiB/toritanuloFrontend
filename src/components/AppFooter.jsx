import { useEffect, useState } from 'react'

export default function AppFooter() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <footer className="app-footer text-white mt-auto py-4">
      <div className="container">
        <div className="row g-3 align-items-start">
          <div className="col-12 col-lg-5">
            <div className="d-flex align-items-center gap-3 mb-3">
              <span className="brand-mark">TT</span>
              <div>
                <div className="fw-bold">TöriTanuló</div>
                <div className="text-white-50 small">Érettségi gyakorló</div>
              </div>
            </div>
            <p className="footer-credit mb-0">
              Rubovszki Balázs készítette, Prillné Csordás Csilla tanárnő tételei alapján.
            </p>
          </div>

          <div className="col-6 col-lg-3">
            <div className="fw-semibold mb-2">Modulok</div>
            <ul className="list-unstyled footer-links mb-0">
              <li>Tételek</li>
              <li>Évszám kvíz</li>
              <li>Személy kvíz</li>
            </ul>
          </div>

          <div className="col-6 col-lg-4">
            <div className="fw-semibold mb-2">Megjelenés</div>
            <button
              type="button"
              className={`theme-toggle ${darkMode ? 'is-on' : ''}`}
              onClick={() => setDarkMode((current) => !current)}
              aria-pressed={darkMode}
            >
              <span className="theme-toggle-track">
                <span className="theme-toggle-thumb" />
              </span>
              <span>{darkMode ? 'Sötét mód' : 'Világos mód'}</span>
            </button>
          </div>
        </div>

        <hr className="footer-divider my-3" />

        <div className="d-flex flex-column flex-md-row justify-content-between gap-2 text-white-50 small">
          <span>© 2026 TöriTanuló</span>
          <span>Mobilra hangolt gyakorlófelület</span>
        </div>
      </div>
    </footer>
  )
}
