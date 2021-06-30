import React, {useEffect} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom'
import ProfilePage from './ProfilePage';
import {compose} from 'redux'
import {connect} from 'react-redux'
import {getUsers} from '../Redux/action'


function ProfileContainer(props) {

    useEffect(() => {
        props.fetchUsers()
    }, [])

    const renderProfiles = () => {
        return props.profiles.map(profile => 
            
            <ProfilePage key={profile._id} loggedInUser={props.loggedInUser} deletePicture={props.deleteUserPicture} userObj={profile} />

        )
    }
    
    return (
        <div>
                    {!props.profiles.length > 0 ? <p>Loading</p> : 
                    <Switch>
                        <Route path="/profiles/:id" render={({match}) => {
                            const id = match.params.id
                            const foundProfile = props.profiles.find((profile) => profile._id === id)
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