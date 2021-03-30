import {combineReducers} from 'redux'

const defaultState = {
    users: []
}

function usersReducer(currentState = defaultState.users, action){
    const user = currentState.find(user => user.id === action.payload?.userObj?.id)
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
        case "delete_picture":
            console.log(action.payload)
            const newArrayDeletePicture = currentState.slice()
            const currentUser = currentState.find(user => user.id === action.payload.user_id)
            const currentUserIndex = currentState.indexOf(currentUser)
            const pictureForDeletion = currentUser.pictures.find(picture => picture.id === action.payload.id)
            const pictureForDeletionIndex = currentUser.pictures.indexOf(pictureForDeletion)
            newArrayDeletePicture[currentUserIndex].pictures.splice(pictureForDeletionIndex, 1)
            return newArrayDeletePicture
        case "follow":
            const newArrayFollow = currentState.slice()
            const userFollow = currentState.find(user => user.id === action.payload.user_id)
            const userFollowIndex = currentState.indexOf(userFollow)
            newArrayFollow[userFollowIndex].followees.push(action.payload)

            const userBeingFollowed = currentState.find(user => user.id === action.payload.id)
            const userBeingFollowedIndex = currentState.indexOf(userBeingFollowed)
            newArrayFollow[userBeingFollowedIndex].followers.push(action.payload)


            return newArrayFollow
        case "unfollow":
            const newArrayUnfollow = currentState.slice()

            const userBeingUnfollowed = currentState.find(user => user.id === action.payload.id)
            const userBeingUnfollowedIndex = currentState.indexOf(userBeingUnfollowed)

            const userUnfollowing = currentState.find(user => user.id === action.payload.user_id)
            const userUnfollowingIndex = currentState.indexOf(userUnfollowing)
            const userBeingUnfollowedWithinUser = userUnfollowing.followees.find(user => user.id === action.payload.id)
            const userUserBeingUnfollowedIndexWithinUser = currentState.indexOf(userBeingUnfollowedWithinUser)

            console.log(userUnfollowing)
            newArrayUnfollow[userUnfollowingIndex].followees.splice(userBeingUnfollowedWithinUser, 1)
            console.log(userBeingUnfollowed)
            newArrayUnfollow[userBeingUnfollowedIndex].followers.splice(userUnfollowingIndex, 1)


            return newArrayUnfollow
        default:
            return currentState
    }
}
//

const rootReducer = combineReducers({
    users: usersReducer
})

export default rootReducer
