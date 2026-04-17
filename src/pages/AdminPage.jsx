import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'

const adminCards = [
  {
    title: 'Felhasználók kezelése',
    text: 'Később itt lehet listázni, szerkeszteni és jogosultság szerint kezelni a felhasználókat.',
  },
  {
    title: 'Tartalomkezelés',
    text: 'Tételek, feladatok, évszámok és személyek feltöltése vagy módosítása kerülhet ide.',
  },
  {
    title: 'Statisztikák',
    text: 'Tanulói aktivitás, gyakorlási adatok és későbbi áttekintések számára fenntartott blokk.',
  },
]

export default function AdminPage() {
  return (
    <div className="app-shell">
      <AppNavbar />

      <main className="py-5">
        <div className="container">
          <div className="admin-header rounded-5 p-4 p-md-5 mb-4">
            <span className="badge text-bg-warning rounded-pill px-3 py-2 mb-3">Csak admin</span>
            <h1 className="fw-bold text-white mb-3">Admin felület előkészítve</h1>
            <p className="text-white-50 mb-0">
              Ez most még egy esztétikus alapoldal, de már külön útvonalon van,
              és csak admin szerepkörrel érhető el.
            </p>
          </div>

          <div className="row g-4">
            {adminCards.map((card) => (
              <div className="col-12 col-md-6 col-xl-4" key={card.title}>
                <div className="card border-0 shadow-sm rounded-5 h-100 module-card">
                  <div className="card-body p-4">
                    <h2 className="h4 fw-bold mb-3">{card.title}</h2>
                    <p className="text-muted mb-0">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
