import { HANDLE_SUBMIT, ADD_USER, ADD_USER_ERROR } from "../constants";
import validation from "../../util/validation";
import clearFormAction from "./clearFormAction";

export const submit = () => (dispatch, getState) => {

    const state = getState();
    const clonedForm = { ...state.forms.form }
    const cloneduserList = [...state.user.userList]
    let userList = []
    const id = cloneduserList.length + 1
    const formMap = Object.values(clonedForm)

    formMap.forEach(({ pattern, value }, index) => {
        const key = Object.keys(clonedForm)[index]
        if (value.trim().length) {
            const validationResponse = !validation(pattern, value)
            formMap[index].showError = validationResponse
            if (key !== 'confirmPassword' && !validationResponse) {
                userList = { ...userList, id, [key]: value, }
            }
        }
        else {
            formMap[index].showError = true;
        }
    });

    const isValid = formMap.some(({ showError }) => showError)
    dispatch({
        type: HANDLE_SUBMIT,
        validatedForm: clonedForm,
        isValid: !isValid
    })

    if (!isValid) {
        const isExist = cloneduserList.some(({ email }) => email === clonedForm.email.value)
        if (!isExist) {
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
