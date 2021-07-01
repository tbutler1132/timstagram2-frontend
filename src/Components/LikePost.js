import React, {useEffect, useState} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {connect} from 'react-redux'
import axios from 'axios'

function LikePost(props) {
    // Initial Like -> Like added, color change, no delete/no color change on second click
    //First refresh -> Like count accurate, color still red
    //First click after refresh -> Record deleted, heart color changed to gray
    //Second click after refresh -> Record added, heart color changed to red
    //Third click after refresh -> Error, heart color changed to gray


    const [pictureLiked, setPictureLiked] = useState("action")

    const liked = () => {
        const idsOfUsersWhoLikedPic = () => {return props.pictureObj.likes.map(like => like.userId)}
        return idsOfUsersWhoLikedPic().includes(props.loggedInUser._id)
        // return props.loggedInUser.likes.map(like => like.picture.id).includes(props.pictureObj.id)
    }

    console.log(liked())

    useEffect(() => {
            if (liked()) {setPictureLiked("secondary")}
    }, [])

    const likeClickHandler = () => {
        if (pictureLiked === "action") {
            likePicture()
        } else if (pictureLiked === "secondary") {
            unlikePicture()
        }
    }

    const likePicture = () => {
        const payload =  {
            like: {
                userId: props.loggedInUser._id,
                username: props.loggedInUser.username
            },
            id: props.pictureObj._id
        }
        const options = {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "accept": "application/json"
            },
            data: payload
        }
        axios(`http://localhost:7000/users/${props.userObj._id}/pictures/likes`, options)
        .then(like => {
            // data.userObj = props.userObj
            // props.addLike(data)
            // setPictureLiked("secondary")
            console.log(like)
        })
        .catch(error => {
            console.log('Error:', error);
        });
    }

    const unlikePicture = () => {
        const like = props.pictureObj.likes.find(like => like.userId === props.loggedInUser._id)

            const options = {
                method: "DELETE",
                data: {likeId: like._id, pictureId: props.pictureObj._id}
            }
              
            axios(`http://localhost:7000/users/${props.userObj._id}/pictures/likes`, options)
            .then(like => {
                console.log(like)
                setPictureLiked("action")        
            })
            .catch(error => {
                setPictureLiked("action");
            });
        
    }
    
    return (
        <div>
            <div className="post-like-button">
                <FavoriteIcon color={pictureLiked} onClick={likeClickHandler}/>
            </div>
        </div>
    );
}

const mdp = (dispatch) => {
    return {
        addLike: (likeObj) => dispatch({type: "add_like", payload: likeObj}),
        deleteLike: (likeObj) => dispatch({type: "delete_like", payload: likeObj})
    }
}

export default connect(null, mdp)(LikePost)