import { Link } from 'react-router-dom'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'

const modules = [
  {
    title: 'Tételek olvasása',
    text: 'A történelem tételek külön oldalon jelennek meg, kereshető listával és kényelmes olvasó nézettel.',
    badge: 'Elérhető most',
    buttonText: 'Tétellista megnyitása',
    buttonLink: '/tetelek',
  },
  {
    title: 'Gyakorlás',
    text: 'Évszámok, személyek, helyszínek és fogalmak gyakorlása gyors feladatokkal.',
    badge: 'Fejlesztés alatt',
    buttonText: 'Hamarosan',
    buttonLink: '/home#elonyok',
  },
  {
    title: 'Fejlődéskövetés',
    text: 'Később eredmények, ismétlendő témák és tanulási statisztikák is bekerülhetnek.',
    badge: 'Terv',
    buttonText: 'További infó',
    buttonLink: '/home#elonyok',
  },
]

const benefits = [
  'Telefonon is kényelmes olvasás',
  'Kereshető tétellista',
  'Külön olvasó nézet haladási csúszkával',
  'Tablet nézetben két hasábosabb, szellősebb elrendezés',
]

export default function HomePage() {
  const username = localStorage.getItem('username') || 'Felhasználó'
  const role = localStorage.getItem('role') || 'Student'
  const isAdmin = role.toLowerCase() === 'admin'

  return (
    <div className="app-shell">
      <AppNavbar />

      <main>
        <section className="hero-section py-5 py-lg-6">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-7">
                <span className="badge rounded-pill section-badge px-3 py-2 mb-3">
                  Tételolvasó központ
                </span>
                <h1 className="display-5 fw-bold mb-3 text-white">
                  Szia, {username}! Most már a tételek olvasása kapja a főszerepet.
                </h1>
                <p className="lead text-white-50 mb-4">
                  Belépés után egy rendezett főoldal vár, ahonnan egy külön oldalon
                  meg tudod nyitni a történelem tételeket, majd kényelmesen el is tudod olvasni őket.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3">
                  <Link to="/tetelek" className="btn btn-warning btn-lg fw-semibold px-4 rounded-4">
                    Tételek olvasása
                  </Link>
                  <a href="#modulok" className="btn btn-outline-light btn-lg px-4 rounded-4">
                    Modulok megtekintése
                  </a>
                </div>
              </div>

              <div className="col-12 col-lg-5">
                <div className="card hero-info-card border-0 shadow-lg rounded-5">
                  <div className="card-body p-4 p-md-5">
                    <div className="d-flex justify-content-between align-items-start gap-3 mb-4">
                      <div>
                        <div className="text-muted small mb-1">Aktív fiók</div>
                        <h2 className="h4 fw-bold mb-0">{username}</h2>
                      </div>
                      <span className="badge text-bg-dark rounded-pill px-3 py-2">{role}</span>
                    </div>

                    <div className="row g-3">
                      <div className="col-6">
                        <div className="mini-stat rounded-4 p-3 h-100">
                          <div className="mini-stat-value">30</div>
                          <div className="mini-stat-label">Tétel</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mini-stat rounded-4 p-3 h-100">
                          <div className="mini-stat-value">Mobil</div>
                          <div className="mini-stat-label">Optimalizált</div>
                        </div>
                      </div>
                    </div>

                    <div className="reading-preview rounded-4 mt-4 p-3">
                      <div className="small text-muted mb-2">Kiemelt indulás</div>
                      <div className="fw-semibold mb-2">Tétellista → tétel megnyitása → olvasás</div>
                      <div className="progress progress-soft rounded-pill" role="progressbar" aria-label="Mintahaladás" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar progress-bar-soft rounded-pill" style={{ width: '68%' }}></div>
                      </div>
                    </div>

                    {isAdmin && (
                      <div className="alert alert-warning rounded-4 mt-4 mb-0">
                        Admin vagy, ezért a felső menüben megjelent az <strong>Admin felület</strong> pont is.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section py-5" id="modulok">
          <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
              <div>
                <span className="section-kicker">Tanulási felület</span>
                <h2 className="fw-bold mb-2">Fő modulok</h2>
                <p className="text-muted mb-0">
                  A tételolvasó most már külön, komolyabb blokkot kapott a rendszerben.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {modules.map((module) => (
                <div className="col-12 col-md-6 col-xl-4" key={module.title}>
                  <div className="card border-0 shadow-sm rounded-5 h-100 module-card">
                    <div className="card-body p-4 d-flex flex-column">
                      <span className="badge text-bg-light rounded-pill px-3 py-2 mb-3">
                        {module.badge}
                      </span>
                      <h3 className="h4 fw-bold mb-3">{module.title}</h3>
                      <p className="text-muted mb-4">{module.text}</p>
                      {module.buttonLink.startsWith('/tetelek') ? (
                        <Link to={module.buttonLink} className="btn btn-primary rounded-4 fw-semibold mt-auto">
                          {module.buttonText}
                        </Link>
                      ) : (
                        <a href={module.buttonLink} className="btn btn-outline-dark rounded-4 fw-semibold mt-auto">
                          {module.buttonText}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section pt-0 pb-5" id="elonyok">
          <div className="container">
            <div className="row g-4 align-items-stretch">
              <div className="col-12 col-lg-6">
                <div className="card border-0 shadow-sm rounded-5 h-100">
                  <div className="card-body p-4 p-md-5">
                    <span className="section-kicker">Miért jobb?</span>
                    <h2 className="fw-bold mb-3">Kényelmesebb olvasás kisebb kijelzőn is</h2>
                    <p className="text-muted mb-4">
                      Az új tételolvasó felület már nem csak listáz, hanem rendesen olvasható
                      szöveges nézetet is ad, nagyobb térközökkel és haladási sávval.
                    </p>

                    <div className="list-group list-group-flush benefit-list">
                      {benefits.map((benefit) => (
                        <div className="list-group-item px-0 py-3" key={benefit}>
                          <div className="d-flex align-items-start gap-3">
                            <span className="check-bubble">✓</span>
                            <span>{benefit}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="card border-0 shadow-sm rounded-5 h-100 faq-card">
                  <div className="card-body p-4 p-md-5">
                    <span className="section-kicker">Gyors áttekintés</span>
                    <h2 className="fw-bold mb-3">Hogyan működik?</h2>

                    <div className="accordion accordion-flush" id="homeAccordion">
                      <div className="accordion-item">
                        <h3 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne">
                            Főoldalról megnyitható tétellista
                          </button>
                        </h3>
                        <div id="faqOne" className="accordion-collapse collapse show" data-bs-parent="#homeAccordion">
                          <div className="accordion-body">
                            A főoldalon külön kártya és gomb visz át a tételek oldalára, ahol cím alapján kereshetsz is.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo">
                            Külön olvasó nézet
                          </button>
                        </h3>
                        <div id="faqTwo" className="accordion-collapse collapse" data-bs-parent="#homeAccordion">
                          <div className="accordion-body">
                            A kiválasztott tétel egy új oldalon jelenik meg nagyobb betűkkel, tagolt bekezdésekkel és olvasási csúszkával.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree">
                            Telefon és tablet nézet
                          </button>
                        </h3>
                        <div id="faqThree" className="accordion-collapse collapse" data-bs-parent="#homeAccordion">
                          <div className="accordion-body">
                            Mobilon egymás alá rendezett, tableten és nagyobb képernyőn szellősebb, kényelmesebb elrendezést kap a felület.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
