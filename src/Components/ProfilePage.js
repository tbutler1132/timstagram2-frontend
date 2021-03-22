import React, {useState, useEffect} from 'react';
import ProfileHeader from './ProfileHeader'
import ProfileFeed from './ProfileFeed'
import {Route, Switch} from 'react-router-dom'

function ProfilePage(props) {

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