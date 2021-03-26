import {combineReducers} from 'redux'

const defaultState = {
    users: []
}

function usersReducer(currentState = defaultState.users, action){
    console.log(action.payload)
    const user = currentState.find(user => user.id === action.payload.userObj?.id)
    const userIndex = currentState.indexOf(user)
    switch (action.type){
        case "add_users_from_fetch":
            return action.payload
        case "add_comment":
            // const user = currentState.find(user => user.id === action.payload.userObj.id)
            // const userIndex = currentState.indexOf(user)
            const newArray = currentState.slice()
            const picture = user.pictures.find(picture => picture.id === action.payload.picture.id)
            const pictureIndex = user.pictures.indexOf(picture)
            action.payload.picture = action.payload.picture.id
            action.payload.user = action.payload.user.username
            newArray[userIndex].pictures[pictureIndex].comments.push(action.payload)
            return newArray
        case "add_like":
            const user2 = currentState.find(user => user.id === action.payload.userObj.id)
            const userIndex2 = currentState.indexOf(user2)
            const newArray2 = currentState.slice()
            const picture2 = user2.pictures.find(picture => picture.id === action.payload.picture.id)
            const pictureIndex2 = user2.pictures.indexOf(picture2)
            action.payload.picture = action.payload.picture.id
            action.payload.user = action.payload.user.username
            newArray2[userIndex2].pictures[pictureIndex2].likes.push(action.payload)
            return newArray2
        case "delete_like":
            const newArrayDeleteLike = currentState.slice()
            const pictureDeleteLike = user.pictures.find(picture => picture.id === action.payload.picture_id)
            console.log(action.payload)
            console.log(user)
            const pictureIndexDeleteLike = user.pictures.indexOf(pictureDeleteLike)
            const likeIndex = pictureDeleteLike.likes.indexOf(action.payload)
            newArrayDeleteLike[userIndex].pictures[pictureIndexDeleteLike].likes.splice(likeIndex, 1)
            return newArrayDeleteLike
        case "update_username":
        case "add_picture":
            const findLoggedInUser = currentState.find(user => user.id === action.payload.user.id)
            const loggedInUserIndex = currentState.indexOf(findLoggedInUser)
            const newArrayAddPicture = currentState.slice()
            newArrayAddPicture[loggedInUserIndex].pictures.push(action.payload)
            return newArrayAddPicture

        default:
            return currentState
    }
}

const rootReducer = combineReducers({
    users: usersReducer
})

export default rootReducer
