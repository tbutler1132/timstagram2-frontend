import React from 'react';
import {NavLink} from 'react-router-dom'

function NavBar(props) {
    return (
        <div>
            <h1>I am Nav, King of the navs</h1>
            <button type="button" onClick={props.logoutHandler}>Logout</button>
            <NavLink to="/addPhoto">Add Photo</NavLink>
        </div>
    );
}

export default NavBar;