import AppShell from '../components/AppShell'
import HubCard from '../components/hub/HubCard'
import HubHero from '../components/hub/HubHero'
import SwipeScreenContainer from '../components/SwipeScreenContainer'

export default function LearnHubPage() {
  return (
    <AppShell>
      <SwipeScreenContainer activeRoute="/tanulas">
        <HubHero
          eyebrow="Tanulás"
          title="Olvass, rendszerezz, folytasd."
          description="Itt találod a tételolvasót és azokat a tanulási belépőket, amelyek hosszabb felkészüléshez kellenek."
        >
          <div className="hub-stat-card">
            <strong>30</strong>
            <span>PDF tétel</span>
            <small>képekkel és mentett olvasási pozícióval</small>
          </div>
        </HubHero>

        <section className="hub-section">
          <div className="container">
            <div className="hub-grid">
              <HubCard
                to="/tetelek"
                kicker="PDF olvasó"
                title="Tételolvasó"
                description="Eredeti formázás, képek, automatikus folytatás és mobilra igazított PDF nézet."
                meta="Folytatás és haladás mentése"
              />
              <HubCard
                to="/tesztek"
                kicker="Gyors ismétlés"
                title="Évszám gyakorlás"
                description="Ha olvasás után ellenőriznéd a kronológiát, innen egyből indíthatod."
                meta="Témakörös tesztek"
                tone="amber"
              />
              <HubCard
                to="/essze-hub"
                kicker="Kifejtés"
                title="Esszéfelkészítő"
                description="Rövid, hosszú és komplex esszék segédfogalmazással és eredeti feladat-preview-val."
                meta="Emelt szintű gyakorlás"
                tone="rose"
              />
            </div>
          </div>
        </section>
      </SwipeScreenContainer>
    </AppShell>
  )
}
