import { HANDLE_SUBMIT, ADD_USER, ADD_USER_ERROR, CLEAR_FORM } from "../constants";
import validation from "../../util/validation";

export const submit = () => (dispatch, getState) => {

    const state = getState();
    const clonedForm = { ...state.forms.form }
    let userList = []
    const formMap = Object.values(clonedForm)

    formMap.forEach(({ pattern, value }, index) => {
        const key = Object.keys(clonedForm)[index]
        if (value.trim().length) {
            formMap[index].showError = !validation(pattern, value)
        }
        else {
            formMap[index].showError = true;
        }
        userList = { ...userList, [key]: value }
    });

    const isValid = formMap.some(({ showError }) => showError)
    dispatch({
        type: HANDLE_SUBMIT,
        validatedForm: clonedForm,
        isValid: !isValid
    })

    if (!isValid) {
        const isExist = [...state.user.userList].some(({ email }) => email === clonedForm.email.value)
        if (!isExist) {

            for (let index = 0; index < formMap.length; index++) {
                formMap[index].value = ''
            }

            dispatch({
                type: ADD_USER,
                userList
            })

            dispatch({
                type: CLEAR_FORM,
                form: clonedForm
            })
        } else {

            dispatch({
                type: ADD_USER_ERROR,
                errorMessage: 'Already Email Exist'
            })

        }
    }
}
