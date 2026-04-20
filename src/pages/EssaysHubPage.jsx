import AppShell from '../components/AppShell'
import HubCard from '../components/hub/HubCard'
import HubHero from '../components/hub/HubHero'
import SwipeScreenContainer from '../components/SwipeScreenContainer'

export default function EssaysHubPage() {
  return (
    <AppShell>
      <SwipeScreenContainer activeRoute="/essze-hub">
        <HubHero
          eyebrow="Esszék"
          title="Feladat, vázlat, segédfogalmazás."
          description="A három esszémodul külön marad, de innen egy helyről eléred a teljes emelt szintű esszéfelkészítőt."
        >
          <div className="hub-stat-card">
            <strong>3</strong>
            <span>esszémodul</span>
            <small>rövid, hosszú és komplex feladatok</small>
          </div>
        </HubHero>

        <section className="hub-section">
          <div className="container">
            <div className="hub-grid">
              <HubCard
                to="/esszek"
                kicker="10 pont"
                title="Rövid esszék"
                description="Tömör témák, eredeti feladat-preview, minimum válasz és kibővített segédfogalmazás."
                meta="Gyors, fókuszált gyakorlás"
              />
              <HubCard
                to="/hosszu-esszek"
                kicker="18 pont"
                title="Hosszú esszék"
                description="Részletesebb gondolatmenet, szerkezeti segítség és hosszabb tanuló fogalmazás."
                meta="Szerkezeti ellenőrzéssel"
                tone="green"
              />
              <HubCard
                to="/komplex-esszek"
                kicker="Komplex"
                title="Komplex esszék"
                description="Korszakokon átívelő és összehasonlító feladatok külön, tiszta logikával."
                meta="Emelt szintű felkészülés"
                tone="rose"
              />
            </div>
          </div>
        </section>
      </SwipeScreenContainer>
    </AppShell>
  )
}
