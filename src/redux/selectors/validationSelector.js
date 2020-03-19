import validation from "../../util/validation";
import { HANDLE_SUBMIT } from "../constants";
import { undefinedValidation, objectValues, objectKeys } from "../../util/regex";

export default (list, state, dispatch) => {
    const formError = { ...state.forms.formError }
    const form = { ...state.forms.form }
    const formErrorPattern = { ...state.forms.formErrorPattern }
    const formMapValues = objectValues(list)
    objectKeys(form).length !== objectKeys(list).length ?
        formMapValues.forEach(({ pattern }, index) => {
            const name = objectKeys(list)[index]
            const value = undefinedValidation(objectValues(form)[index], false)
            form[name] = value
            formErrorPattern[name] = pattern
            if (value) return formError[name] = !validation(pattern, value)
            return formError[name] = true;
        }) :
        objectValues(form).forEach((value, index) => {
            objectKeys(formError)[index] = !validation(formErrorPattern[index], value)
        })
    const isValid = !objectValues(formError).some(formErrorValue => formErrorValue)
    dispatch({
        type: HANDLE_SUBMIT,
        form,
        formError,
        formErrorPattern
    })
    return { isValid, form }
}
