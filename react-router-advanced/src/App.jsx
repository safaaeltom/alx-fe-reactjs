import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Profile from './components/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import BlogPost from './components/BlogPost'

function App() {
  return (
    <BrowserRouter>
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
      {/* Blog post route */}
      <Route path="/blog/:id" element={<BlogPost />} />
    
    </Routes>
  </BrowserRouter>
  )
}

export default App;