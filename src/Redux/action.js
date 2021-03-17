export const saveCurrentUserObj = (userObj) => {
    return ({type: "save_current_user_obj", payload: userObj})
}