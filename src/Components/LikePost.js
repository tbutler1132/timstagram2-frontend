import React, {useEffect, useState} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {connect} from 'react-redux'

function LikePost(props) {
    const [pictureLiked, setPictureLiked] = useState("")

    useEffect(() => {
            const liked = props.loggedInUser.likes.map(like => like.picture.id).includes(props.pictureObj.id)
            if (liked) {setPictureLiked("secondary")}
    }, [])

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
            setPictureLiked("secondary")
        })
        .catch(error => {
            console.log('Error:', error);
        });
    }

    const unlikePicture = () => {
        const filteredLike = props.loggedInUser.likes.filter(like => props.pictureObj.likes.includes(like))
        return filteredLike
        // const options = {
        //     method: "DELETE"
        //   }
        
    }

    console.log(unlikePicture())

    return (
        <div>
            <div className="post-like-button">
                <FavoriteIcon color={pictureLiked} onClick={likePicture}/>
            </div>
        </div>
    );
}

const mdp = (dispatch) => {
    return {addLike: (likeObj) => dispatch({type: "add_like", payload: likeObj})}
}

export default connect(null, mdp)(LikePost)