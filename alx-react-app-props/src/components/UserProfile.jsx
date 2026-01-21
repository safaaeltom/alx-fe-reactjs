import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserProfile() {
    const userData = useContext(UserContext);

    return (
        <div>
            <h1>{userData.name}</h1>
            <p>Age: {userData.age}</p>
            <p>Bio: {userData.bio}</p>
        </div>
    );
}

export default UserProfile;