import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'

const adminCards = [
  {
    title: 'Kvízek kezelése',
    text: 'Később itt lehet majd témaköröket, teszteket és kérdéseket létrehozni vagy módosítani.',
  },
  {
    title: 'Feladattípusok',
    text: 'Egyválasztós, többválasztós, évszám beírása, sorrend és párosítás nézetek adminoldali karbantartása.',
  },
  {
    title: 'Statisztikák',
    text: 'A későbbiekben ide kerülhetnek a próbálkozások, eredmények és tanulói teljesítmények.',
  },
]

export default function AdminPage() {
  return (
    <div className="app-shell d-flex flex-column">
      <AppNavbar />

      <main className="py-5">
        <div className="container">
          <div className="admin-header rounded-5 p-4 p-md-5 mb-4">
            <span className="badge text-bg-warning rounded-pill px-3 py-2 mb-3">Csak admin</span>
            <h1 className="fw-bold text-white mb-3">Admin nézet előkészítve a tesztekhez</h1>
            <p className="text-white-50 mb-0">
              A felületet úgy készítettem el, hogy később a kérdéskezelő és tartalomfeltöltő részek is kényelmesen ráépíthetők legyenek.
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
