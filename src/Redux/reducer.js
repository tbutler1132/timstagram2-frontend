import {combineReducers} from 'redux'

const defaultState = {
    users: []
}

function usersReducer(currentState = defaultState.users, action){
    switch (action.type){
        case "add_users_from_fetch":
            return action.payload
        case "add_comment":
            const user = currentState.find(user => user.id === action.payload.userObj.id)
            const userIndex = currentState.indexOf(user)
            const newArray = currentState.slice()
            const picture = user.pictures.find(picture => picture.id === action.payload.picture.id)
            const pictureIndex = user.pictures.indexOf(picture)
            action.payload.picture = action.payload.picture.id
            action.payload.user = action.payload.user.username
            newArray[userIndex].pictures[pictureIndex].comments.push(action.payload)
            console.log(newArray)
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
            console.log(newArray2)
            return newArray2
        case "update_username":
        default:
            return currentState
    }
}

const rootReducer = combineReducers({
    users: usersReducer
})

export default rootReducer
