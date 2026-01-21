import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);
  return (
    <div>
      <p>{userData.name}</p>
      <p>{userData.email}</p>
    </div>
  );
}

export default UserDetails;