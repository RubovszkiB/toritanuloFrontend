import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const routes = ['/home', '/tanulas', '/gyakorlas', '/essze-hub', '/profil']

export default function SwipeScreenContainer({ activeRoute, children }) {
  const navigate = useNavigate()
  const startXRef = useRef(null)
  const startYRef = useRef(null)

  function handleTouchStart(event) {
    const touch = event.touches[0]
    startXRef.current = touch.clientX
    startYRef.current = touch.clientY
  }

  function handleTouchEnd(event) {
    if (startXRef.current === null || startYRef.current === null) {
      return
    }

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - startXRef.current
    const deltaY = touch.clientY - startYRef.current
    startXRef.current = null
    startYRef.current = null

    if (Math.abs(deltaX) < 70 || Math.abs(deltaX) < Math.abs(deltaY) * 1.35) {
      return
    }

    const index = routes.indexOf(activeRoute)
    if (index === -1) {
      return
    }

    const nextIndex = deltaX < 0 ? index + 1 : index - 1
    if (nextIndex >= 0 && nextIndex < routes.length) {
      navigate(routes[nextIndex])
    }
  }

  return (
    <main
      className="swipe-screen"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </main>
  )
}
