import React from 'react';
import ProfilePicture from './ProfilePicture'

function ProfileHeader(props) {
    return (
        <div className="profile-header">
            <ProfilePicture currentUserObj={props.currentUserObj}/>
            <h1>{props.currentUserObj.username}</h1>
            <p>{props.currentUserObj.bio}</p>
        </div>
    );
}

export default ProfileHeader;