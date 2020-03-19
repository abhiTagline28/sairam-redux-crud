import validation from "../../util/validation";
import { HANDLE_SUBMIT } from "../constants";
import { undefinedValidation, objectValues } from "../../util/regex";

export default (list, state, dispatch) => {
    const formError = { ...state.forms.formError }
    const form = { ...state.forms.form }
    const formMap = objectValues(list)
    formMap.forEach(({ pattern }, index) => {
        const name = Object.keys(list)[index]
        const value = undefinedValidation(objectValues(form)[index], true)
        if (value) return formError[name] = !validation(pattern, value)
        return formError[name] = true;

    });
    const isValid = !objectValues(formError).some(formErrorValue => formErrorValue)
    dispatch({
        type: HANDLE_SUBMIT,
        form,
        formError,
        isValid: !isValid
    })
    return { isValid, form }
}
