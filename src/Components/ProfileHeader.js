import React from 'react';
import ProfilePicture from './ProfilePicture'

function ProfileHeader(props) {
    return (
        <div>
            <ProfilePicture />
            <h1>I am a the Username</h1>
            <p>I am the Bio</p>
        </div>
    );
}

export default ProfileHeader;