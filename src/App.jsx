import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import AdminRoute from './components/AdminRoute'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import TetelekPage from './pages/TetelekPage'
import TetelReaderPage from './pages/TetelReaderPage'
import QuizHubPage from './pages/QuizHubPage'
import QuizPlayPage from './pages/QuizPlayPage'

export default function App() {
  const hasToken = Boolean(localStorage.getItem('token'))

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tetelek"
        element={
          <ProtectedRoute>
            <TetelekPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tetelek/:id"
        element={
          <ProtectedRoute>
            <TetelReaderPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tesztek"
        element={
          <ProtectedRoute>
            <QuizHubPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tesztek/:slug"
        element={
          <ProtectedRoute>
            <QuizPlayPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminPage />
          </AdminRoute>
        }
      />

      <Route path="*" element={<Navigate to={hasToken ? '/home' : '/'} replace />} />
    </Routes>
  )
}
