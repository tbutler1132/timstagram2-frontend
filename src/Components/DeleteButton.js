import React from 'react';
import {connect} from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'

function DeleteButton(props) {

    const deletePhoto = () => {
        axios(`http://localhost:7000/users/${props.loggedInUser._id}/pictures`, {
            method: 'DELETE',
            data: {id: props.pictureObj._id}
        })
        .then(picture => {
            console.log(picture)
            // props.pictureObj.user_id = props.loggedInUser.id
            // props.deletePicture(props.pictureObj) 
        }
        )
    }

    return (
        <div>
            <DeleteIcon onClick={deletePhoto}/>
        </div>
    );
}

const mdp = (dispatch) => {
    return {deletePicture: (pictureObj) => dispatch({type: "delete_picture", payload: pictureObj})}
}

export default connect(null, mdp)(DeleteButton);