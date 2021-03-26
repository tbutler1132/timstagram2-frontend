import React, {useState} from 'react';
import Modal from 'react-modal'
import Signup from './Signup'

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [modalIsOpen, setModal] = useState(false)

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

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
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
            <p onClick={openModal}>Not a user? Sign up!</p>
            <Modal ariaHideApp={false} isOpen={modalIsOpen}>
                <Signup signupHandler={props.signupHandler} closeModal={closeModal}/>
            </Modal>
        </div>
    );
}

export default Login;