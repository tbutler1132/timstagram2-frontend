import React, {useEffect, useState} from 'react';
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import ProfilePage from './ProfilePage';
import {compose} from 'redux'
import {connect} from 'react-redux'
import {getUsers} from '../Redux/action'


function ProfileContainer(props) {

    // const [profiles, addProfiles] = useState([])

    useEffect(() => {
        props.fetchUsers()
        // fetch(`http://localhost:3000/users`, {
        //   })
        //   .then(r => r.json())
        //     .then(data => {
        //       console.log(data);
        //       addProfiles(data)
        //   })
    }, [])

    const renderProfiles = () => {
        return props.profiles.map(profile => 
            
            <ProfilePage key={profile.id} loggedInUser={props.loggedInUser} deletePicture={props.deletePicture} userObj={profile} />

        )
    }

    console.log(props)

    return (
        <div>
                    {props.profiles.length === 0 ? <p>Loading</p> : 
                    <Switch>
                        <Route path="/profiles/:id" render={({match}) => {
                            const id = parseInt(match.params.id)
                            const foundProfile = props.profiles.find((profile) => profile.id === id)
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

const mapStateToProps = (state) => {
    return {profiles: state.users}
}

const mapDispatchToProps = (dispatch) => {
    return {fetchUsers: () => dispatch(getUsers())}
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withRouter)
(ProfileContainer);