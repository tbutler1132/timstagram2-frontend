import React from 'react';
import { render } from 'react-dom';
import Post from './Post'

function ProfileFeed(props) {

    const renderPictures = () => {return props.pictures.map(picture => <Post pictureObj={picture} key={picture.id} currentUserObj={props.currentUserObj} deletePicture={props.deletePicture}/>)}

    return (
        <div>
            {renderPictures()}
        </div>
    );
}

export default ProfileFeed;