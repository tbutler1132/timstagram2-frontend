import React from 'react';
import DeleteButton from './DeleteButton'

function Post(props) {

    const renderComments = () => {return props.pictureObj.comments.map(comment => comment.content ? 
        <div className="post-comment" key={comment.id}>
            <p>{comment.user}: {comment.content}</p>
        </div> 
        : null)}

    return (
        <div className="post">
            <img id="post-image" src={props.pictureObj.photo_url} alt="Post" width="400" height="400"></img>
            <div className="post-text">
                <div className="post-caption">
                    <h4>{props.userObj.username}:</h4>
                    <p>{props.pictureObj.Caption}</p>
                </div>
                {renderComments()}
                <DeleteButton pictureId={props.pictureObj.id} deletePicture={props.deletePicture}/>
            </div>
        </div>
    );
}

export default Post