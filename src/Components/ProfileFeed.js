import React from 'react';
import { render } from 'react-dom';
import Post from './Post'

function ProfileFeed(props) {
    console.log(props.pictures)

    const renderPictures = () => {return props.pictures.map(picture => <Post pictureObj={picture} key={picture.id}/>)}

    return (
        <div>
            <h1>I am the profile feed, container of Posts!!!</h1>
            {renderPictures()}
        </div>
    );
}

export default ProfileFeed;