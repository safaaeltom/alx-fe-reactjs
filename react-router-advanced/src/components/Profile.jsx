import { Routes, Route, Link, useParams } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'

function Profile() {
  const { userId } = useParams()

  return (
    <div>
      <h1>Profile Page</h1>

      {userId && <h2>User ID: {userId}</h2>}

      <nav>
        <Link to="details">Details</Link> | 
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  )
}

export default Profile;