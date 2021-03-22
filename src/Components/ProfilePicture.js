import React from 'react';

function ProfilePicture(props) {
    return (
        <div className="profile-picture">
            <img id="profile-pic" src={props.userObj.profile_photo_url} alt="Post" width="100" height="100"></img>
        </div>
    );
}

export default ProfilePicture