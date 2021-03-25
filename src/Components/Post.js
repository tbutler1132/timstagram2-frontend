import React from 'react';
import DeleteButton from './DeleteButton'
import AddCommentForm from './AddCommentForm'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {connect} from 'react-redux'

function Post(props) {

    const renderComments = () => {return props.pictureObj.comments.map(comment => comment.content ? 
        <div className="post-comment" key={comment.id}>
            <p>{comment.user}: {comment.content}</p>
        </div> 
        : null)
    }

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
            // data.userObj = props.userObj
            // props.addLike(data)
        })
        .catch(error => {
            console.log('Error:', error);
        });
    }

    return (
        <div className="post">
            <img id="post-image" src={props.pictureObj.photo_url} alt="Post" width="400" height="400"></img>
            <div className="post-text">
                <div className="post-caption">
                    <h4>{props.userObj.username}:</h4>
                    <p>{props.pictureObj.Caption}</p>
                </div>
                <div className="post-comment-section">
                    {renderComments()}
                </div>
                <div className="post-like">
                    <p>Likes</p>
                    <p>{props.pictureObj.likes.length}</p>
                    <FavoriteIcon onClick={likePicture}/>
                </div>
                <div className="post-buttons">
                    <AddCommentForm loggedInUser={props.loggedInUser} userObj={props.userObj} pictureId={props.pictureObj.id}/>
                    {props.userObj.id === props.loggedInUser.id ?
                        <DeleteButton pictureId={props.pictureObj.id} deletePicture={props.deletePicture}/>
                    :
                        null
                    }
                </div>
            </div>
        </div>
    );
}

const mdp = (dispatch) => {
    return {addLike: (likeObj) => dispatch({type: "add_like", payload: likeObj})}
}

export default connect(null, mdp)(Post)