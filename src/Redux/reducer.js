import {combineReducers} from 'redux'

const defaultState = {
    users: []
}

function usersReducer(currentState = defaultState.users, action){
    switch (action.type){
        case "add_users_from_fetch":
            return action.payload
        case "add_comment":
            console.log(action.payload.picture)
            const user = currentState.find(user => user.id === action.payload.userObj.id)
            const userIndex = currentState.indexOf(user)
            const newArray = currentState.slice()
            const picture = user.pictures.find(picture => picture.id === action.payload.picture.id)
            const pictureIndex = user.pictures.indexOf(picture)
            console.log(pictureIndex)
            action.payload.picture = action.payload.picture.id
            action.payload.user = action.payload.user.username
            newArray[userIndex].pictures[pictureIndex].comments.push(action.payload)
            console.log(newArray)
            return newArray
        default:
            return currentState
    }
}

const rootReducer = combineReducers({
    users: usersReducer
})

export default rootReducer
