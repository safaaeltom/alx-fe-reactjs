import { useState } from 'react'

export function useAuth() {
  // simple simulated auth
  const [isAuthenticated] = useState(true)

  return { isAuthenticated }
}