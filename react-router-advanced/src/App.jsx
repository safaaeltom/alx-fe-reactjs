import { Routes, Route, Navigate } from 'react-router-dom'
import Profile from './pages/Profile'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      {/* Redirect root to profile */}
      <Route path="/" element={<Navigate to="/profile" replace />} />

      {/* Protected profile route */}
      <Route 
        path="/profile/*" 
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      {/* Nested profile route with userId */}
      <Route 
        path="/profile/:userId" 
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } 
      />
    </Routes>
  )
}

export default App;