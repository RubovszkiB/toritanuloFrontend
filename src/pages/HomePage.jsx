import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import AppShell from '../components/AppShell'
import HubCard from '../components/hub/HubCard'
import SwipeScreenContainer from '../components/SwipeScreenContainer'
import { getRecentTetelProgress } from '../services/tetelProgressService'
import { getTetelek } from '../services/tetelService'
import { enrichTetelWithPdf, formatLastOpened } from '../services/tetelPdfService'

export default function HomePage() {
  const username = localStorage.getItem('username') || 'Felhasználó'
  const [tetelek, setTetelek] = useState([])
  const [recentProgress, setRecentProgress] = useState([])

  useEffect(() => {
    let cancelled = false

    Promise.all([
      getTetelek('').catch(() => []),
      getRecentTetelProgress().catch(() => []),
    ]).then(([tetelData, progressData]) => {
      if (!cancelled) {
        setTetelek(tetelData)
        setRecentProgress(progressData)
      }
    })

    return () => {
      cancelled = true
    }
  }, [])

  const continueTetel = useMemo(() => {
    const recent = recentProgress.find((item) => Number(item.haladasSzazalek || 0) < 100) || recentProgress[0]
    const tetel = tetelek.find((item) => Number(item.id) === Number(recent?.tetelId))
    return tetel ? enrichTetelWithPdf(tetel, recent) : null
  }, [recentProgress, tetelek])

  return (
    <AppShell>
      <SwipeScreenContainer activeRoute="/home">
        <section className="home-screen-hero">
          <div className="container">
            <div className="home-screen-grid">
              <div>
                <span className="hub-eyebrow">Kezdőlap</span>
                <h1>Szia, {username}! Mit gyakoroljunk ma?</h1>
                <p>
                  Folytasd az olvasást, indíts egy gyors tesztet, vagy lépj be az esszéfelkészítőbe.
                  Minden fő útvonal egy érintésre van.
                </p>
              </div>

              <div className="home-focus-card">
                <span>Mai fókusz</span>
                <strong>25 perc</strong>
                <p>Olvass egy tételt, majd zárd le egy rövid évszámkvízzel.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="hub-section">
          <div className="container">
            {continueTetel ? (
              <div className="home-continue-panel">
                <div>
                  <span className="hub-eyebrow">Folytasd itt</span>
                  <h2>{continueTetel.cim}</h2>
                  <p>
                    {continueTetel.progress?.lastPage || 1}. oldal · {continueTetel.progress?.haladasSzazalek || 0}% ·{' '}
                    {formatLastOpened(continueTetel.progress?.utolsoMentesAt)}
                  </p>
                </div>
                <Link to={`/tetelek/${continueTetel.id}`} className="btn btn-primary rounded-4 fw-bold px-4">
                  Folytatás
                </Link>
              </div>
            ) : (
              <div className="home-continue-panel">
                <div>
                  <span className="hub-eyebrow">Első lépés</span>
                  <h2>Nyiss meg egy tételt PDF-ben</h2>
                  <p>A rendszer ezután automatikusan menti, hol tartasz.</p>
                </div>
                <Link to="/tetelek" className="btn btn-primary rounded-4 fw-bold px-4">
                  Tételolvasó
                </Link>
              </div>
            )}

            <div className="home-action-grid">
              <HubCard
                to="/tanulas"
                kicker="Tanulás"
                title="Tételek és olvasás"
                description="PDF-alapú tételolvasó, automatikus folytatással."
                meta="Hosszabb tanuláshoz"
              />
              <HubCard
                to="/gyakorlas"
                kicker="Tesztek"
                title="Napi gyors gyakorlás"
                description="Évszámok és személyek rövid, célzott ellenőrzése."
                meta="Pár perces körök"
                tone="amber"
              />
              <HubCard
                to="/essze-hub"
                kicker="Esszék"
                title="Segédfogalmazások"
                description="Rövid, hosszú és komplex esszék tanulható mintagondolatokkal."
                meta="Emelt felkészülés"
                tone="rose"
              />
            </div>

            <div className="home-insight-grid">
              <div className="home-insight-card">
                <span>Ismétlendő</span>
                <strong>Évszámok</strong>
                <p>Ha bizonytalan vagy egy korszakban, indíts egy célzott évszámtesztet.</p>
              </div>
              <div className="home-insight-card">
                <span>Esszé tipp</span>
                <strong>Minimum + segéd</strong>
                <p>Először olvasd el a minimum választ, utána a kibővített segédfogalmazást.</p>
              </div>
            </div>
          </div>
        </section>
      </SwipeScreenContainer>
    </AppShell>
  )
}
