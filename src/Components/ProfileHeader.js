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
        const followerIds = (props.loggedInUser.followees.map(followeeDoc => followeeDoc.userId))
        return followerIds.includes(props.userObj._id)
    }

    console.log(doesLoggedInUserFollowUser())

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
                {props.loggedInUser._id === props.userObj._id ?
                <SettingsIcon className="settings-icon" onClick={pushToEditProfile}/>
                :
                
                !doesLoggedInUserFollowUser() ? 
                <FollowButton following={false} loggedInUser={props.loggedInUser} userObj={props.userObj}/>
                :
                <FollowButton following={true} loggedInUser={props.loggedInUser} userObj={props.userObj}/>
                }
            </div>
            <Modal style={{
                content: {
                    left: '500px',
                    right: '500px',
                    top: '250px',
                    bottom: '250px',
                    alignContent: 'center',
                }
            }} ariaHideApp={false} isOpen={modalIsOpen}>
                <FollowList userObj={props.userObj} closeModal={closeModal}/>
            </Modal>
        </div>
    );
}

export default withRouter(ProfileHeader);