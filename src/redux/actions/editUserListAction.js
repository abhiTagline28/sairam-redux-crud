import { EDIT_USER } from "../constants"


export const editUserList = (editId) => (dispatch, getState) => {
    const state = getState()
    const { id, ...rest } = [...state.user.userList].find(({ id }) => id === editId)
    const clonedFormList = { ...state.forms.form }
    if (id) {
        for (let index = 0; index < Object.values(clonedFormList).length; index++) {
            if (Object.keys(clonedFormList)[index] === Object.keys(rest)[index]) {
                Object.values(clonedFormList)[index].value = Object.values(rest)[index]
            }
        }
        dispatch({
            type: EDIT_USER,
            form: clonedFormList,
            isEdit: true,
            editId: id
        })
    }
}
