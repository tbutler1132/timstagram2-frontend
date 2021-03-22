import React from 'react';
import {NavLink} from 'react-router-dom'

function NavBar(props) {
    return (
        <div>
            <h1 className="logo">Timstagram</h1>
            {props.currentUserObj ?
                <div className="nav-buttons">
                    <NavLink to="/profiles">View Other Users</NavLink> 
                    <NavLink to="/addPhoto">Create Post</NavLink>
                    <NavLink to={`/profiles/${props.currentUserObj.id}`}>Home</NavLink>
                    <button type="button" onClick={props.logoutHandler}>Logout</button> 
                </div>
            : 
                null}
        </div>
    );
}

export default NavBar;