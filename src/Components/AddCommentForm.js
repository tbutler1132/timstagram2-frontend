import React, {useState} from 'react';
import {addComment} from '../Redux/action'
import {connect} from 'react-redux'

function AddCommentForm(props) {
    const [comment, setComment] = useState("")

    const commentHandler = (e) => {
        setComment(e.target.value)
    }

    const submitComment = (e) => {
        e.preventDefault()
        const newComment = {
            picture_id: props.pictureId,
            user_id: props.userObj.id,
            content: comment
        }
        const options = {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "accept": "application/json"
            },
            body: JSON.stringify({ comment: newComment })
        }
        fetch("http://localhost:3000/comments", options)
        .then(r => r.json())
        .then(data => {
            props.addNewComment(data)
        })
        .catch(error => {
            console.log('Error:', error);
        });
    }

    return (
        <div>
            <form onSubmit={submitComment}>
                <label>Comment</label>
                <input type="text" placeholder="Add comment" value={comment} onChange={commentHandler}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

const mdp = (dispatch) => {
    return {addNewComment: (commentObj) => dispatch({type: "add_comment", payload: commentObj})}
}

export default connect(null, mdp)(AddCommentForm);