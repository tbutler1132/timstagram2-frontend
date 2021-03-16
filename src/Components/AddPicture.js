import React, {useState} from 'react';

function AddPicture(props) {
    const [newPicture, addNewPicture] = useState("")
    const [newCaption, addNewCaption] = useState("")

    const submitPhoto = (e) => {
        e.preventDefault()
        const newPicture = {
            photo_url: newPicture,
            user_id: props.currentUserObj.id,
            Caption: newCaption
        }
    }

    return (
        <div>
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

export default AddPicture;