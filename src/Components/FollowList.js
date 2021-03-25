import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {NavLink} from 'react-router-dom'

function FollowList(props) {

    const renderFollowers = () => {
        return props.userObj.followers.map(follower => <NavLink to={`profiles/${follower.id}`}>{follower.username}</NavLink>)
    }

    const renderFollowees = () => {
        return props.userObj.followees.map(followee => <p>{followee.username}</p>)
    }

    return (
        <div>
            <h3>Followers</h3>
            {renderFollowers()}
            <h3>Following</h3>
            {renderFollowees()}
            <CloseIcon onClick={props.closeModal}/>
        </div>
    );
}

export default FollowList;