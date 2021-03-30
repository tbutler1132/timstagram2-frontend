import React from 'react';
import {connect} from 'react-redux'

function DeleteButton(props) {

    console.log(props.pictureObj.id)

    const deletePhoto = () => {
        fetch(`http://localhost:3000/pictures/${props.pictureObj.id}`, {
            method: 'DELETE',
        })
        .then(r => r.json()) 
        .then(data => {
            console.log(data)
            props.pictureObj.user_id = props.loggedInUser.id
            props.deletePicture(props.pictureObj) 
        }
        )
    }

    return (
        <div>
            <button onClick={deletePhoto}>Well Hello There, I am a Delete Button</button>
        </div>
    );
}

const mdp = (dispatch) => {
    return {deletePicture: (pictureObj) => dispatch({type: "delete_picture", payload: pictureObj})}
}

export default connect(null, mdp)(DeleteButton);