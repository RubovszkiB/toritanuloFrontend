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
          title="Gyakorlás gyors körökkel, kérdésbankkal és komoly nagytesztekkel."
          description="Válassz célzott évszám- vagy személygyakorlást, kérdésbankos mini kört, vagy indíts nagy témaköri tesztet emelt szintű ismétléshez."
        >
          <div className="hub-stat-card">
            <strong>4</strong>
            <span>aktív tesztréteg</span>
            <small>gyors gyakorlás, kérdésbank és nagytesztek</small>
          </div>
        </HubHero>

        <section className="hub-section">
          <div className="container">
            <div className="hub-grid">
              <HubCard
                to="/kerdesbank"
                kicker="Mini kérdésbank"
                title="Részletes témaköri kérdésbank"
                description="Tételfókuszú, forráslogikás, tipikus hibákra építő emelt mini kérdések több gyakorlási móddal."
                meta="48 mini mód"
                tone="violet"
              />
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
                to="/nagy-tesztek"
                kicker="Emelt ismétlés"
                title="Nagy témaköri tesztek"
                description="Hosszabb, nehezebb, forráslogikára építő témaköri tesztek a saját tételek és a követelmény alapján."
                meta="Komoly felkészülés"
                tone="green"
              />
            </div>
          </div>
        </section>
      </SwipeScreenContainer>
    </AppShell>
  )
}
