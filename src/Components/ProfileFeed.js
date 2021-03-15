import React from 'react';
import { render } from 'react-dom';
import Post from './Post'

function ProfileFeed(props) {
    console.log(props.pictures)

    const renderPictures = () => {props.pictures.map(picture => <Post pictureObj={picture} id={picture.id}/>)}

    console.log(renderPictures())

    return (
        <div>
            <h1>I am the profile feed, container of Posts!!!</h1>
            {renderPictures()}
        </div>
    );
}

export default ProfileFeed;