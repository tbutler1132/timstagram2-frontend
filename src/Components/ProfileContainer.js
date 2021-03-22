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
            
            <p>{profile.username}</p>

        )
    }

    return (
        <div>
                    {profiles.length === 0 ? <p>Loading</p> : 
                    <Switch>
                        <Route path="/profiles/:id" render={({match}) => {
                            const id = parseInt(match.params.id)
                            const foundProfile = profiles.find((profile) => profile.id === id)
                            return <ProfilePage currentUserObj={foundProfile} />
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