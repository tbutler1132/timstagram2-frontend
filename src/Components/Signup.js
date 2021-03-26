import React, { useState } from 'react';

function Signup(props) {
    const [bio, setBio] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const usernameHandler = (e) => {
        setUsername(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const bioHandler = (e) => {
        setBio(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.signupHandler({username: username, bio: bio, password: password})
    }

    return (
        <div className="signup-form">
            <form onSubmit={submitHandler}>
                <label>Username</label>
                <input type="text" placeholder="username" value={username} onChange={usernameHandler}/>
                <label>Password</label>
                <input type="text" placeholder="password" value={password} onChange={passwordHandler}/>
                <label>Bio</label>
                <input type="text" placeholder="bio" value={bio} onChange={bioHandler}/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Signup;