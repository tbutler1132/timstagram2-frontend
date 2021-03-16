import React from 'react';

function Post(props) {

    const renderComments = () => {return props.pictureObj.comments.map(comment => comment.content ? 
        <div key={comment.id}>
            <h5>{comment.user}:</h5>
            <p>{comment.content}</p>
        </div> 
        : null)}

    return (
        <div className="post">
            <img src={props.pictureObj.photo_url} alt="Post" width="400" height="400"></img>
            <h4>{props.pictureObj.user.username}:</h4>
            <p>{props.pictureObj.Caption}</p>
            <hr></hr>
            {renderComments()}
        </div>
    );
}

export default Post;<p>I am a post</p>