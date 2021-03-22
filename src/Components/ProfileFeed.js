import React from 'react';
import { render } from 'react-dom';
import Post from './Post'

function ProfileFeed(props) {

    const renderPictures = () => {return props.pictures.map(picture => <Post loggedInUser={props.loggedInUser} pictureObj={picture} key={picture.id} userObj={props.userObj} deletePicture={props.deletePicture}/>)}

    return (
        <div className="profile-feed">
            {renderPictures()}
        </div>
    );
}

export default ProfileFeed;