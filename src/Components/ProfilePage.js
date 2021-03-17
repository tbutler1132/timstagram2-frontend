import React, {useState, useEffect} from 'react';
import ProfileHeader from './ProfileHeader'
import ProfileFeed from './ProfileFeed'

function ProfilePage(props) {
    // const [pictureArray, setPictureArray] = useState([]);


    // useEffect(() => {
    //     // if (props.currentUserObj){
    //     //     fetch(`http://localhost:3000/users/${props.currentUserObj.id}`)
    //     //     .then(r => r.json())
    //     //     .then(data => {
    //     //         console.log(data)
    //     //         setPictureArray(data.pictures)
    //     //     })
    //     // }
    // }, []);

    return (
        <div>
            {props.currentUserObj ?
            <>
                <ProfileHeader currentUserObj={props.currentUserObj}/>
                <hr></hr>
                <ProfileFeed pictures={props.currentUserObj.pictures} currentUserObj={props.currentUserObj} deletePicture={props.deletePicture}/>
                </>
            :
            null
            }
        </div>
    );
}

export default ProfilePage;