import React, {useEffect, useState} from 'react';
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import ProfilePage from './ProfilePage';


function ProfileContainer(props) {

    const [profiles, addProfiles] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/users`, {
          })
          .then(r => r.json())
            .then(data => {
              console.log(data);
              addProfiles(data)
          })
    }, [])

    const renderProfiles = () => {
        return profiles.map(profile => 
            
            <ProfilePage key={profile.id} loggedInUser={props.loggedInUser} deletePicture={props.deletePicture} userObj={profile} />

        )
    }

    return (
        <div>
                    {profiles.length === 0 ? <p>Loading</p> : 
                    <Switch>
                        <Route path="/profiles/:id" render={({match}) => {
                            const id = parseInt(match.params.id)
                            const foundProfile = profiles.find((profile) => profile.id === id)
                            return <ProfilePage loggedInUser={props.loggedInUser} userObj={foundProfile} deletePicture={props.deletePicture}/>
                        }}/>
                        <Route path="/profiles" render={() =>
                        <>
                            <div className="track-container">
                                {renderProfiles()}
                            </div>
                        </>   
                            
                        } />
                    </Switch>
                    }
        </div>
    );
}

export default withRouter(ProfileContainer);