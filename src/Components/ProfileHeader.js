import React, {useState} from 'react';
import ProfilePicture from './ProfilePicture'
import FollowButton from './FollowButton'
import SettingsIcon from '@material-ui/icons/Settings';
import Modal from 'react-modal'
import FollowList from './FollowList'
import {withRouter} from 'react-router-dom'


function ProfileHeader(props) {
    const [modalIsOpen, setModal] = useState(false)

    const doesLoggedInUserFollowUser = () => {
        const followerIds = (props.loggedInUser.followees.map(user => user.id))
        return followerIds.includes(props.userObj.id)
    }

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    const pushToEditProfile = () => {
        props.history.push("/editprofile")
    }

    return (
        <div className="profile-header">
            <ProfilePicture userObj={props.userObj}/>
            <div className="header-bio">
                <h2>{props.userObj.username}</h2>
                <h4>{props.userObj.bio}</h4>
                <p onClick={openModal}>Followers: {props.userObj.followers.length}</p>
                <p>Following: {props.userObj.followees.length}</p>
            </div>
            <div className="profile-header-buttons">
                {props.loggedInUser.id === props.userObj.id ?
                <SettingsIcon onClick={pushToEditProfile}/>
                :
                
                !doesLoggedInUserFollowUser() ? 
                <FollowButton loggedInUser={props.loggedInUser} userObj={props.userObj}/>
                :
                <p>Following</p>
                }
            </div>
            <Modal isOpen={modalIsOpen}>
                <FollowList userObj={props.userObj} closeModal={closeModal}/>
            </Modal>
        </div>
    );
}

export default withRouter(ProfileHeader);