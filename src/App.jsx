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
import EssayHubPage from './pages/EssayHubPage'
import EssayDetailPage from './pages/EssayDetailPage'
import LongEssayHubPage from './pages/LongEssayHubPage'
import LongEssayDetailPage from './pages/LongEssayDetailPage'
import ComplexEssayHubPage from './pages/ComplexEssayHubPage'
import ComplexEssayDetailPage from './pages/ComplexEssayDetailPage'

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
            <QuizHubPage quizType="evszam" />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tesztek/:slug"
        element={
          <ProtectedRoute>
            <QuizPlayPage quizType="evszam" />
          </ProtectedRoute>
        }
      />

      <Route
        path="/szemely-kviz"
        element={
          <ProtectedRoute>
            <QuizHubPage quizType="szemely" />
          </ProtectedRoute>
        }
      />

      <Route
        path="/szemely-kviz/:slug"
        element={
          <ProtectedRoute>
            <QuizPlayPage quizType="szemely" />
          </ProtectedRoute>
        }
      />

      <Route
        path="/esszek"
        element={
          <ProtectedRoute>
            <EssayHubPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/esszek/:slug"
        element={
          <ProtectedRoute>
            <EssayDetailPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/hosszu-esszek"
        element={
          <ProtectedRoute>
            <LongEssayHubPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/hosszu-esszek/:slug"
        element={
          <ProtectedRoute>
            <LongEssayDetailPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/komplex-esszek"
        element={
          <ProtectedRoute>
            <ComplexEssayHubPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/komplex-esszek/:slug"
        element={
          <ProtectedRoute>
            <ComplexEssayDetailPage />
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
