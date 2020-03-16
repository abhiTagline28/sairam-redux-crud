import { UPDATE_USER } from '../constants'
import validationSelector from "../selectors/validationSelector"
import clearFormAction from './clearFormAction'
import { findIndex } from '../../util/regex'

export default () => (dispatch, getState) => {
    const state = getState()
    const editId = state.forms.editId
    const clonedUserList = [...state.user.userList]
    const clonedForm = { ...state.forms.form }
    const isValid = validationSelector(state, dispatch)

    if (isValid) {
        const clonedUserListIndex = findIndex(clonedUserList, editId)
        if (clonedUserListIndex > -1) {
            Object.values(clonedForm).forEach(({ value }, index) => {
                const key = Object.keys(clonedForm)[index]
                if (key !== 'confirmPassword') {
                    clonedUserList[clonedUserListIndex][key] = value
                }
            })
            dispatch({ type: UPDATE_USER, clonedUserList })
            dispatch(clearFormAction())
        }
    }
}
