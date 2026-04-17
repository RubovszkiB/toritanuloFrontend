import { Navigate } from 'react-router-dom'

export default function AdminRoute({ children }) {
  const token = localStorage.getItem('token')
  const role = (localStorage.getItem('role') || '').toLowerCase()

  if (!token) {
    return <Navigate to="/" replace />
  }

  if (role !== 'admin') {
    return <Navigate to="/home" replace />
  }

  return children
}
