import { ADD_USER, ADD_USER_ERROR } from "../constants";
import clearFormAction from "./clearFormAction";
import validationSelector from "../selectors/validationSelector";

export const submit = () => (dispatch, getState) => {

    const state = getState();
    const clonedForm = { ...state.forms.form }
    const isValid = validationSelector(state, dispatch)

    if (isValid) {
        const cloneduserList = [...state.user.userList]
        let userList = []
        const id = cloneduserList.length + 1
        const formMap = Object.values(clonedForm)
        const isExist = cloneduserList.some(({ email }) => email === clonedForm.email.value)
        if (!isExist) {
            formMap.forEach(({ pattern, value }, index) => {
                const key = Object.keys(clonedForm)[index]
                if (key !== 'confirmPassword') {
                    userList = { ...userList, id, [key]: value, }
                }
            })
            dispatch(clearFormAction())
            dispatch({
                type: ADD_USER,
                userList
            })
        } else {

            dispatch({
                type: ADD_USER_ERROR,
                errorMessage: 'Already Email Exist'
            })

        }
    }
}
