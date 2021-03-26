import React, {useEffect, useState} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {connect} from 'react-redux'

function LikePost(props) {
    // Initial Like -> Like added, color change, no delete/no color change on second click
    //First refresh -> Like count accurate, color still red
    //First click after refresh -> Record deleted, heart color changed to gray
    //Second click after refresh -> Record added, heart color changed to red
    //Third click after refresh -> Error, heart color changed to gray


    const [pictureLiked, setPictureLiked] = useState("action")

    const liked = () => {
        return props.loggedInUser.likes.map(like => like.picture.id).includes(props.pictureObj.id)
    }

    useEffect(() => {
            if (liked()) {setPictureLiked("secondary")}
    }, [])

    const likeClickHandler = () => {
        console.log(pictureLiked)
        if (pictureLiked === "action") {
            likePicture()
        } else if (pictureLiked === "secondary") {
            unlikePicture()
        }
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
            data.userObj = props.userObj
            props.addLike(data)
            console.log(data)
            setPictureLiked("secondary")
        })
        .catch(error => {
            console.log('Error:', error);
        });
    }

    const unlikePicture = () => {
        const like = props.pictureObj.likes.find(like => like.user_id === props.loggedInUser.id)
        if (like){
            const options = {
                method: "DELETE"
            }
              
            fetch(`http://localhost:3000/likes/${like.id}`, options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPictureLiked("action")        
            })
            .catch(error => {
                setPictureLiked("action");
            });
        }
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
    return {addLike: (likeObj) => dispatch({type: "add_like", payload: likeObj})}
}

export default connect(null, mdp)(LikePost)