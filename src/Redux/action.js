export const getUsers = () => {
    return function (dispatch){
        fetch(`http://localhost:3000/users`, {
        })
        .then(r => r.json())
        .then(data => {
            dispatch({type: "add_users_from_fetch", payload: data})
        })
    }   
}

export const addPicture = (pictureObj) => {
    return function(dispatch){
        dispatch({type: "add_picture", payload: pictureObj})
    }
}

export const addNewComment = (commentObj) => {
    return function (dispatch){
        dispatch({type: "add_comment", payload: commentObj})
    }
}

export const addLike = (likeObj) => {
    return function (dispatch){
        dispatch({type: "add_like", payload: likeObj})
    }
}

export const deleteLike = (likeObj) => {
    return function (dispatch){
        dispatch({type: "delete_like", payload: likeObj})
    }
}

export const deletePicture = (pictureObj) => {
    return function (dispatch){
        dispatch({type: "delete_picture", payload: pictureObj})
    }
}

export const addFollow = (followObj) => {
    return function (dispatch){
        dispatch({type: "follow", payload: followObj})
    }
}

export const unfollow = (followObj) => {
    return function (dispatch){
        dispatch({type: "unfollow", payload: followObj})
    }
}