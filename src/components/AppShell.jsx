import AppFooter from './AppFooter'
import AppNavbar from './AppNavbar'

export default function AppShell({ children, hideFooter = false }) {
  return (
    <div className="app-shell modern-app-shell d-flex flex-column">
      <AppNavbar />
      {children}
      {!hideFooter && <AppFooter />}
    </div>
  )
}
