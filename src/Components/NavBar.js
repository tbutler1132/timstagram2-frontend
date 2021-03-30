import React from 'react';
import {NavLink} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import {withRouter} from 'react-router-dom'
import {Button} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

function NavBar(props) {

    const pushToHome = () => {
        props.history.push(`/profiles/${props.currentUserObj.id}`)
    }

    const pushToAddPhoto = () => {
        props.history.push("/addPhoto")
    }

    const pushToProfiles = () => {
        props.history.push("/profiles")
    }

    return (
        <div className="nav-bar">
            <h1 onClick={pushToHome} className="nav-logo">Timstagram</h1>
            {props.currentUserObj ?
            <>
            <div className="nav-search">
                <input onChange={pushToProfiles} type="text" placeholder="Search.."></input>
                <SearchIcon onClick={pushToProfiles} />
            </div>
            <div className="nav-buttons">
                <h4 onClick={pushToHome}>{props.currentUserObj.username}</h4>
                <AddIcon onClick={pushToAddPhoto}/>
                <HomeIcon onClick={pushToHome}/>
                <Button color="secondary" onClick={props.logoutHandler}>Logout</Button> 
            </div>
            </>
            : 
                null}
        </div>
    );
}

export default withRouter(NavBar);