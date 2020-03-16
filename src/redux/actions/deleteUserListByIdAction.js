import { DELETE_USER } from "../constants"
import { findIndex } from "../../util/regex"

export default (deleteId) => (dispatch, getState) => {
    const state = getState()
    const clonedUserList = [...state.user.userList]
    const index = findIndex(clonedUserList, deleteId)
    if (index > -1) {
        clonedUserList.splice(clonedUserList, 1)
    }
    dispatch({
        type: DELETE_USER,
        clonedUserList
    })
}
