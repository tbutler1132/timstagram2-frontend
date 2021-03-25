import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {connect} from 'react-redux'

function LikePost(props) {

    const likePicture = () => {
        const newLike = {
            user_id: props.loggedInUser.id,
            picture_id: props.pictureObj.id,
        }
        const options = {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "accept": "application/json"
            },
            body: JSON.stringify({ like: newLike })
        }
        fetch("http://localhost:3000/likes", options)
        .then(r => r.json())
        .then(data => {
            data.userObj = props.userObj
            props.addLike(data)
        })
        .catch(error => {
            console.log('Error:', error);
        });
    }

    return (
        <div>
            <div className="post-like-button">
                <FavoriteIcon color="secondary" onClick={likePicture}/>
            </div>
        </div>
    );
}

const mdp = (dispatch) => {
    return {addLike: (likeObj) => dispatch({type: "add_like", payload: likeObj})}
}

export default connect(null, mdp)(LikePost)