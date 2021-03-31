import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom'

function FollowList(props) {

    const renderFollowers = () => {
        return props.userObj.followers.map(follower => <Link onClick={props.closeModal} key={follower.id} to={`${follower.id}`}>{follower.username}</Link>)
    }

    const renderFollowees = () => {
        return props.userObj.followees.map(followee => <Link onClick={props.closeModal} key={followee.id} to={`${followee.id}`}>{followee.username}</Link>)
    }

    return (
        <div>
            <CloseIcon className="modal-close-icon" onClick={props.closeModal}/>
            <h3>Followers</h3>
            {renderFollowers()}
            <h3>Following</h3>
            {renderFollowees()}
        </div>
    );
}

export default FollowList;