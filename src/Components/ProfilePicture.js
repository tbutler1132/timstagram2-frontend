import React from 'react';

function ProfilePicture(props) {
    return (
        <div>
            <img src={props.currentUserObj.profile_photo_url} alt="Post" width="100" height="100"></img>
        </div>
    );
}

export default ProfilePicture;<p>I am the profile ProfilePicture</p>