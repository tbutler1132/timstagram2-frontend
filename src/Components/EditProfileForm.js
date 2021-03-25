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

    const editUsername = (e) => {
        e.preventDefault()
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

    const editBio = (e) => {
        e.preventDefault()
        const options = {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
              "accept": "application/json"
            },
            body: JSON.stringify({ bio: bio })
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
        <div className="edit-profile-form">
            <form onSubmit={editUsername}>
                <label>username</label>
                <input type="text" placeholder={props.loggedInUser.username} value={username} onChange={usernameHandler}/>
                <input type="submit" value="Submit"/>
            </form>
            <form onSubmit={editBio}>
                <label>Bio</label>
                <input type="text" placeholder="Bio" value={bio} onChange={bioHandler}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default EditProfileForm;