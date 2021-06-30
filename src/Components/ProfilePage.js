import React, {useState, useEffect} from 'react';
import ProfileHeader from './ProfileHeader'
import ProfileFeed from './ProfileFeed'
import {Route, Switch, Link} from 'react-router-dom'

function ProfilePage(props) {

    console.log(props)

    return (
        <div className="profile-page">
            {props.userObj ?
            <Switch>
                <Route path="/profiles/:id"
                    render={() =>
                        {
                            return( 
                                <>
                                    <ProfileHeader loggedInUser={props.loggedInUser} userObj={props.userObj}/>
                                    <hr></hr>
                                    <ProfileFeed loggedInUser={props.loggedInUser} userObj={props.userObj} deletePicture={props.deletePicture}/>
                                </>
                            )
                        }
                    } 
                />

                <Link to={`profiles/${props.userObj._id}`}>{props.userObj.username}</Link>
            </Switch>
                    :
                    null
                    }
        </div>
    );
}

export default ProfilePage;