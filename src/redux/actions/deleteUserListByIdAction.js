import { DELETE_USER } from "../constants"

export default (deleteId) => (dispatch, getState) => {
    const state = getState()
    const clonedUserList = [...state.user.userList]
    const index = clonedUserList.findIndex(({ id }) => id === deleteId)
    if (index > -1) {
        clonedUserList.splice(clonedUserList, 1)
    }
    dispatch({
        type: DELETE_USER,
        clonedUserList
    })
}
