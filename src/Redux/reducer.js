import {combineReducers} from 'redux'

const defaultState = {
    currentUserRedux: false
}

function currentUserReducer(currentState = defaultState.currentUserRedux, action){
    switch (action.type){
        case "save_current_user_obj":
            return action.payload
        default:
            return currentState
    }
}

const rootReducer = combineReducers({
    currentUser: currentUserReducer
})

export default rootReducer
