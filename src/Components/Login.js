import React, {useState} from 'react';

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameHandler = (e) => {
        setUsername(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.loginHandler({username: username, password: password})
    }

    return (
        <div>
            <h1>Please Login</h1>
            <form onSubmit={submitHandler}>
                <label>Username</label>
                <input type="text" placeholder="username" value={username} onChange={usernameHandler}/>
                <label>Password</label>
                <input type="text" placeholder="password" value={password} onChange={passwordHandler}/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Login;