import React from 'react';
import ProfilePicture from './ProfilePicture'

function ProfileHeader(props) {
    return (
        <div>
            <ProfilePicture currentUserObj={props.currentUserObj}/>
            <h1>{props.currentUserObj.username}</h1>
            <p>{props.currentUserObj.bio}</p>
        </div>
    );
}

export default ProfileHeader;