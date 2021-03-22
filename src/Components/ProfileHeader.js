import React from 'react';
import ProfilePicture from './ProfilePicture'

function ProfileHeader(props) {

    return (
        <div className="profile-header">
            <ProfilePicture userObj={props.userObj}/>
            <h1>{props.userObj.username}</h1>
            <p>{props.userObj.bio}</p>
            <p>Followers: {props.userObj.followers.length}</p>
            <p>Following: {props.userObj.followees.length}</p>
            {props.loggedInUser.id === props.userObj.id ?
            <button>Edit Profile</button>
            :
            null}
        </div>
    );
}

export default ProfileHeader;