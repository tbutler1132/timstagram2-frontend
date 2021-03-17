import React, {useState} from 'react';
import { withRouter } from 'react-router-dom'

function AddPicture(props) {
    const [url, setUrl] = useState("")
    const [caption, setCaption] = useState("")

    const urlHandler = (e) => {
        setUrl(e.target.value)
    }

    const captionHandler = (e) => {
        setCaption(e.target.value)
    }

    const submitPhoto = (e) => {
        e.preventDefault()
        const newPicture = {
            photo_url: url,
            user_id: props.currentUserObj.id,
            Caption: caption
        }
        const options = {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "accept": "application/json"
            },
            body: JSON.stringify({ picture: newPicture })
        }
        fetch("http://localhost:3000/pictures", options)
        .then(r => r.json())
        .then(data => {
            props.updateUserPictures(data)
            props.history.push("/profile")})
        .catch(error => {
            console.log('Error:', error);
        });

    }

    return (
        <div>
            <form onSubmit={submitPhoto}>
                <label>Photo Url</label>
                <input type="text" placeholder="Photo URL" value={url} onChange={urlHandler}/>
                <label>Caption</label>
                <input type="text" placeholder="Caption" value={caption} onChange={captionHandler}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default withRouter(AddPicture);