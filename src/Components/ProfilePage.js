import React, {useState, useEffect} from 'react';
import ProfileHeader from './ProfileHeader'
import ProfileFeed from './ProfileFeed'

function ProfilePage(props) {
    const [pictureArray, setPictureArray] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/pictures')
        .then(r => r.json())
        .then(data => setPictureArray(data))
    }, []);

    console.log(pictureArray)

    return (
        <div>
            <ProfileHeader />
            <hr></hr>
            <ProfileFeed pictures={pictureArray}/>
        </div>
    );
}

export default ProfilePage;