import React, {useState} from 'react';

function EditProfileForm(props) {

    const [username, setUsername] = useState("")
    const [bio, setBio] = useState("")

    const usernameHandler = (e) => {
        setUsername(e.target.value)
    }

    const bioHandler = (e) => {
        setBio(e.target.value)
    }

    const editProfile = (e) => {
        e.preventDefault()
        // const newProfile = {
        //     userName: username
        // }
        const options = {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
              "accept": "application/json"
            },
            body: JSON.stringify({ username: username })
        }
        fetch(`http://localhost:3000/users/${props.loggedInUser.id}`, options)
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log('Error:', error);
        });
    }

    return (
        <div>
            <form onSubmit={editProfile}>
                <label>username</label>
                <input type="text" placeholder={props.loggedInUser.username} value={username} onChange={usernameHandler}/>
                {/* <label>Bio</label>
                <input type="text" placeholder="Bio" value={bio} onChange={bioHandler}/> */}
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default EditProfileForm;