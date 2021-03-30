import React, {useState} from 'react';
import DeleteButton from './DeleteButton'
import AddCommentForm from './AddCommentForm'
import LikePost from './LikePost'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Post(props) {
    
    const renderComments = () => {return props.pictureObj.comments.map(comment => comment.content ? 
        <div className="post-comment" key={comment.id}>
            <p>
                {comment.user.username ? comment.user.username : comment.user}: {comment.content} 
                {comment.user === props.loggedInUser ? <MoreHorizIcon /> : null}
            </p>
        </div> 
        : null)
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
                <div className="post-actions">
                    <p>Likes</p>
                    <p>{props.pictureObj.likes.length}</p>
                    <LikePost loggedInUser={props.loggedInUser} pictureObj={props.pictureObj} userObj={props.userObj}/>
                </div>
                <div className="post-buttons">
                    <AddCommentForm loggedInUser={props.loggedInUser} userObj={props.userObj} pictureId={props.pictureObj.id}/>
                    {props.userObj.id === props.loggedInUser.id ?
                        // <DeleteButton pictureId={props.pictureObj.id} deletePicture={props.deletePicture}/>
                        <DeleteButton pictureObj={props.pictureObj} loggedInUser={props.loggedInUser}/>
                    :
                        null
                    }
                </div>
            </div>
        </div>
    );
}

export default Post