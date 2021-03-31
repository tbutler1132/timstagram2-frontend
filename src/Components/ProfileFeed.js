import React from 'react';
import Post from './Post'

function ProfileFeed(props) {

    const renderPictures = () => {return props.userObj.pictures.map(picture => <Post comments={picture.comments} loggedInUser={props.loggedInUser} pictureObj={picture} key={picture.id} userObj={props.userObj} deletePicture={props.deletePicture}/>)}

    return (
        <div className="profile-feed">
            {renderPictures()}
        </div>
    );
}

export default ProfileFeed;