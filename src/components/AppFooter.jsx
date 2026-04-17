export default function AppFooter() {
  return (
    <footer className="app-footer mt-5 pt-5 pb-4" id="kapcsolat">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-5">
            <div className="footer-brand d-inline-flex align-items-center gap-2 mb-3">
              <span className="brand-mark">T</span>
              <span className="fw-bold text-white">TöriTanuló</span>
            </div>
            <p className="text-white-50 mb-0">
              Reszponzív történelem tanulófelület tételolvasóval, kereséssel és később
              bővíthető gyakorló modulokkal.
            </p>
          </div>

          <div className="col-6 col-lg-3">
            <h6 className="text-white mb-3">Navigáció</h6>
            <ul className="list-unstyled footer-links mb-0">
              <li><a href="/home">Főoldal</a></li>
              <li><a href="/tetelek">Tételek</a></li>
              <li><a href="/home#elonyok">Előnyök</a></li>
            </ul>
          </div>

          <div className="col-6 col-lg-4">
            <h6 className="text-white mb-3">Tanulási részek</h6>
            <ul className="list-unstyled footer-links mb-0">
              <li>Tétellista és olvasó nézet</li>
              <li>Keresés címre és szövegre</li>
              <li>Későbbi gyakorló és admin bővítések</li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between gap-2 text-white-50 small">
          <span>© 2026 TöriTanuló</span>
          <span>Telefonra és tabletre optimalizált felület</span>
        </div>
      </div>
    </footer>
  )
}
