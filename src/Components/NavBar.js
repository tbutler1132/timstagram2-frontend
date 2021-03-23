import React from 'react';
import {NavLink} from 'react-router-dom'

function NavBar(props) {
    return (
        <div className="nav-bar">
            <h1 className="nav-logo">Timstagram</h1>
            {props.currentUserObj ?
            <>
            <div className="nav-search">
                <NavLink to="/profiles">View Other Users</NavLink> 
            </div>
            <div className="nav-buttons">
            <NavLink to="/addPhoto">Create Post</NavLink>
            <NavLink to={`/profiles/${props.currentUserObj.id}`}>Home</NavLink>
            <button type="button" onClick={props.logoutHandler}>Logout</button> 
            </div>
            </>
            : 
                null}
        </div>
    );
}

export default NavBar;