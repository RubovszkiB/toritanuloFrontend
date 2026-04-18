export default function AppFooter() {
  return (
    <footer className="app-footer text-white mt-auto py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-5">
            <div className="d-flex align-items-center gap-3 mb-3">
              <span className="brand-mark">TT</span>
              <div>
                <div className="fw-bold">TöriTanuló</div>
                <div className="text-white-50 small">Tételolvasás és évszámgyakorlás egy helyen</div>
              </div>
            </div>
            <p className="text-white-50 mb-0">
              A felület úgy lett kialakítva, hogy mobilon és nagyobb kijelzőn is gyorsan használható maradjon.
            </p>
          </div>

          <div className="col-6 col-lg-3">
            <div className="fw-semibold mb-3">Modulok</div>
            <ul className="list-unstyled footer-links mb-0">
              <li>Tételek olvasása</li>
              <li>Évszám kvízek</li>
              <li>Többféle feladattípus</li>
            </ul>
          </div>

          <div className="col-6 col-lg-4">
            <div className="fw-semibold mb-3">Jelenlegi állapot</div>
            <ul className="list-unstyled footer-links mb-0">
              <li>Reszponzív főoldal</li>
              <li>Modern kvíznézet</li>
              <li>Őskor helyett már az ókor feltöltve</li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between gap-2 text-white-50 small">
          <span>© 2026 TöriTanuló</span>
          <span>React + Bootstrap felület a történelem érettségi gyakorláshoz</span>
        </div>
      </div>
    </footer>
  )
}
