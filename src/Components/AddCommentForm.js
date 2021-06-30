import React, {useState} from 'react';
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'
import axios from 'axios'

function AddCommentForm(props) {
    // console.log(props.userObj)
    // console.log(props.loggedInUser)

    const [comment, setComment] = useState("")

    const commentHandler = (e) => {
        setComment(e.target.value)
    }

    const submitComment = (e) => {
        e.preventDefault()
        const body = {
            comment: {
                content: comment,
                userId: "60db7aae93cc0b2786b53344",
                username: props.loggedInUser.username
            },
            id: "60dbb182e41c1141259381b7"
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