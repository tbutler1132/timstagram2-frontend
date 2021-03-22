import React from 'react';

function DeleteButton(props) {

    const deletePhoto = () => {
        fetch(`http://localhost:3000/pictures/${props.pictureId}`, {
            method: 'DELETE',
        })
        .then(r => r.json()) 
        .then(data => {
            props.deletePicture(props.pictureId)})
    }

    return (
        <div className="delete-button">
            <button onClick={deletePhoto}>Delete</button>
        </div>
    );
}

export default DeleteButton;