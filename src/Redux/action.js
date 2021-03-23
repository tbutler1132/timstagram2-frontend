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