import axios from 'axios'

const BASE_API = "http://localhost:7000"

//Get the users from API
export const getUsers = () => {
    return function (dispatch){
        axios({
            method: 'GET',
            url: `${BASE_API}/users`,
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          })
          .then(users => 
            {
                dispatch({type: "add_users_from_fetch", payload: users.data})
            }
          )
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