import React from 'react';
import ProfilePicture from './ProfilePicture'
import FollowButton from './FollowButton'

function ProfileHeader(props) {

    const doesLoggedInUserFollowUser = () => {
        const followerIds = (props.loggedInUser.followees.map(user => user.id))
        return followerIds.includes(props.userObj.id)
    }

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
            
            !doesLoggedInUserFollowUser() ? 
            <FollowButton loggedInUser={props.loggedInUser} userObj={props.userObj}/>
            :
            <p>Following</p>
            
            }
        </div>
    );
}

export default ProfileHeader;