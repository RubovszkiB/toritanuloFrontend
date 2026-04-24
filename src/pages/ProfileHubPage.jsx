import { useNavigate } from 'react-router-dom'
import AppShell from '../components/AppShell'
import HubCard from '../components/hub/HubCard'
import HubHero from '../components/hub/HubHero'
import SwipeScreenContainer from '../components/SwipeScreenContainer'
import { clearAuth } from '../services/authService'

export default function ProfileHubPage() {
  const navigate = useNavigate()
  const username = localStorage.getItem('username') || 'Felhasználó'
  const role = (localStorage.getItem('role') || 'Student').toLowerCase()
  const isAdmin = role === 'admin'

  function logout() {
    clearAuth()
    navigate('/', { replace: true })
  }

  return (
    <AppShell>
      <SwipeScreenContainer activeRoute="/profil">
        <HubHero
          eyebrow="Profil"
          title={`Szia, ${username}!`}
          description="Itt találod a fiókhoz kapcsolódó gyors műveleteket és a speciális belépőket."
        >
          <div className="hub-stat-card">
            <strong>{isAdmin ? 'Admin' : 'Tanuló'}</strong>
            <span>fióktípus</span>
            <small>személyes haladással</small>
          </div>
        </HubHero>

        <section className="hub-section">
          <div className="container">
            <div className="hub-grid">
              <HubCard
                to="/tetelek"
                kicker="Haladás"
                title="Olvasási állapotok"
                description="A tétellistán látod, melyik PDF-ben hol tartasz, és egy érintéssel folytathatod."
                meta="Felhasználóhoz mentve"
              />
              <HubCard
                to="/essze-hub"
                kicker="Esszék"
                title="Esszéfelkészülés"
                description="Rövid, hosszú és komplex esszéútvonalak egy helyen, segédfogalmazásokkal."
                meta="Gyakorláshoz"
                tone="rose"
              />
              {isAdmin && (
                <HubCard
                  to="/admin"
                  kicker="Admin"
                  title="Admin felület"
                  description="Külön belépő az adminisztrációhoz, a tanulói navigációtól elkülönítve."
                  meta="Jogosultsághoz kötött"
                  tone="amber"
                />
              )}
            </div>

            <div className="profile-logout-panel">
              <div>
                <span>Fiók</span>
                <h2>Kijelentkezés</h2>
                <p>Ha végeztél a gyakorlással, egy érintéssel biztonságosan lezárhatod a munkamenetet.</p>
              </div>
              <button type="button" className="btn btn-outline-danger rounded-pill px-4 fw-semibold" onClick={logout}>
                Kijelentkezem
              </button>
            </div>
          </div>
        </section>
      </SwipeScreenContainer>
    </AppShell>
  )
}
