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

export const addComment = (commentObj) => {
    console.log(commentObj)
    return function (dispatch){
        dispatch({type: "add_comment", payload: commentObj})
    }
}