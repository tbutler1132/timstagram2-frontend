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