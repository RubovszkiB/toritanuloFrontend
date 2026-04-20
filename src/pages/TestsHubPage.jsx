import AppShell from '../components/AppShell'
import HubCard from '../components/hub/HubCard'
import HubHero from '../components/hub/HubHero'
import SwipeScreenContainer from '../components/SwipeScreenContainer'

export default function TestsHubPage() {
  return (
    <AppShell>
      <SwipeScreenContainer activeRoute="/gyakorlas">
        <HubHero
          eyebrow="Tesztek"
          title="Rövid gyakorlás, gyors visszajelzés."
          description="Válassz célzott gyakorlást: évszám, személy vagy vegyes ismétlés. A mélyebb tesztoldalak változatlanul megmaradtak."
        >
          <div className="hub-stat-card">
            <strong>2</strong>
            <span>aktív kvíztípus</span>
            <small>évszám és személy alapú gyakorlás</small>
          </div>
        </HubHero>

        <section className="hub-section">
          <div className="container">
            <div className="hub-grid">
              <HubCard
                to="/tesztek"
                kicker="Kronológia"
                title="Évszám kvízek"
                description="Témakörönként gyakorolhatod a legfontosabb dátumokat és korszakhatárokat."
                meta="Gyors ellenőrzés"
              />
              <HubCard
                to="/szemely-kviz"
                kicker="Szereplők"
                title="Személy kvíz"
                description="Történelmi személyekhez, szerepekhez és fogalmakhoz kötött gyakorlás."
                meta="Emelt témákhoz"
                tone="amber"
              />
              <HubCard
                to="/tesztek"
                kicker="Napi kör"
                title="Gyors ismétlés"
                description="Indíts egy rövid tesztet, ha csak pár perced van, de szeretnél haladni."
                meta="Telefonon is gyors"
                tone="green"
              />
            </div>
          </div>
        </section>
      </SwipeScreenContainer>
    </AppShell>
  )
}
