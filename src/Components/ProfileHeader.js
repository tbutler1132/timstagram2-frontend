import React from 'react';
import ProfilePicture from './ProfilePicture'
import FollowButton from './FollowButton'
import SettingsIcon from '@material-ui/icons/Settings';

function ProfileHeader(props) {

    const doesLoggedInUserFollowUser = () => {
        const followerIds = (props.loggedInUser.followees.map(user => user.id))
        return followerIds.includes(props.userObj.id)
    }

    return (
        <div className="profile-header">
            <ProfilePicture userObj={props.userObj}/>
            <div className="header-bio">
                <h2>{props.userObj.username}</h2>
                <h4>{props.userObj.bio}</h4>
                <p>Followers: {props.userObj.followers.length}</p>
                <p>Following: {props.userObj.followees.length}</p>
            </div>
            <div className="profile-header-buttons">
                {props.loggedInUser.id === props.userObj.id ?
                <SettingsIcon />
                :
                
                !doesLoggedInUserFollowUser() ? 
                <FollowButton loggedInUser={props.loggedInUser} userObj={props.userObj}/>
                :
                <p>Following</p>
                }
            </div>
        </div>
    );
}

export default ProfileHeader;