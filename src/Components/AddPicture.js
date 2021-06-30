import React, {useState} from 'react';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {Button} from '@material-ui/core'
import axios from 'axios'

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
            url: url,
            caption: caption,
            comments: [],
            likes: []
        }
        const options = {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "accept": "application/json"
            },
            data: newPicture
        }
        axios(`http://localhost:7000/users/${props.loggedInUser._id}/pictures`, options)
        .then(picture => {
            console.log(picture)
            props.addNewPicture(picture.data)
            props.history.push(`/profiles/${props.loggedInUser.id}`)})
        .catch(error => {
            console.log('Error:', error);
        });

    }

    return (
        <div>
            <form className="edit-profile-form" onSubmit={submitPhoto}>
                <label>Photo Url</label>
                <input className="picture-add-input" type="text" placeholder="Photo URL" value={url} onChange={urlHandler}/>
                <label>Caption</label>
                <input className="picture-add-input" type="text" placeholder="Caption" value={caption} onChange={captionHandler}/>
                <Button type="submit" value="Submit">Submit</Button>
            </form>
        </div>
    );
}

const mdp = (dispatch) => {
    return {addNewPicture: (pictureObj) => dispatch({type: "add_picture", payload: pictureObj})}
}

export default compose (
    connect(null, mdp),
    withRouter)
(AddPicture);