import React, {useState} from 'react';
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'
import axios from 'axios'

function AddCommentForm(props) {

    const [comment, setComment] = useState("")

    const commentHandler = (e) => {
        setComment(e.target.value)
    }

    const submitComment = (e) => {
        e.preventDefault()
        const body = {
            comment: {
                content: comment,
                userId: props.loggedInUser._id,
                username: props.loggedInUser.username
            },
            id: props.pictureId
        }
        const options = {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "accept": "application/json"
            },
            data: body
        }
        axios(`http://localhost:7000/users/${props.userObj._id}/pictures/comments`, options)
        .then(comment => {
            console.log(comment.data)
        })
        .catch(error => {
            console.log('Error:', error);
        });
    }

    return (
        <div>
            <form onSubmit={submitComment}>
                <input className="comment-input-bar" type="text" placeholder="Add comment" value={comment} onChange={commentHandler}/>
                <Button color="primary" type="Submit">Submit</Button>
                {/* <input type="submit" value="Submit"/> */}
            </form>
        </div>
    );
}

const mdp = (dispatch) => {
    return {addNewComment: (commentObj) => dispatch({type: "add_comment", payload: commentObj})}
}

export default connect(null, mdp)(AddCommentForm);