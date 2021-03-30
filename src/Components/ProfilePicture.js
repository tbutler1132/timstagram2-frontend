import React from 'react';

function ProfilePicture(props) {

    return (
        <div className="profile-picture">
            {props.userObj.profile_photo_url != null ?
            <img id="profile-pic" src={props.userObj.profile_photo_url} alt="Post" width="200" height="200"></img>
            :
            <img id="profile-pic" src="https://media.tarkett-image.com/large/TH_25094225_25187225_001.jpg" alt="Post" width="200" height="200"></img>
            }
        </div>
    );
}

export default ProfilePicture