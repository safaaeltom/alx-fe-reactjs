import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const isAuthenticated = true // change to false to test redirect

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute;