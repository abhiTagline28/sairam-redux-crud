import { HANDLE_SUBMIT, ADD_USER, ADD_USER_ERROR, CLEAR_FORM } from "../constants";
import validation from "../../util/validation";

export const submit = () => (dispatch, getState) => {

    const state = getState();
    const clonedForm = { ...state.forms.form }
    let userList = []
    Object.values(clonedForm).forEach(({ pattern, value }, index) => {
        const key = Object.keys(clonedForm)[index]
        const isPassword = key === 'password'
        if (value.trim().length) {
            const validated = validation(pattern, value, isPassword)
            if (!validated) {
                Object.values(clonedForm)[index].showError = true;
            }
            else {
                Object.values(clonedForm)[index].showError = false;
            }
        }
        else {
            Object.values(clonedForm)[index].showError = true;
        }
        userList = { ...userList, [key]: value }
    });

    const isValid = Object.values(clonedForm).some(({ showError }) => showError === true)
    dispatch({
        type: HANDLE_SUBMIT,
        validatedForm: clonedForm,
        isValid: !isValid
    })

    if (!isValid) {
        const isExist = [...state.user.userList].some(({ email }) => email === clonedForm.email.value)
        if (!isExist) {
            let newValues = {};
            Object.values(clonedForm).forEach(({ value, ...rest }, index) => {
                newValues = { ...newValues, [Object.keys(clonedForm)[index]]: { ...rest, value: '' } }
            })

            dispatch({
                type: ADD_USER,
                userList
            })
            dispatch({
                type: CLEAR_FORM,
                form: newValues
            })
        } else {

            dispatch({
                type: ADD_USER_ERROR,
                errorMessage: 'Already Email Exist'
            })

        }
    }
}
