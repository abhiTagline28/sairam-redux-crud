import validation from "../../util/validation";
import { HANDLE_SUBMIT } from "../constants";
import { isEmpty, objectValues, objectKeys } from "../../util/regex";

export default (list, state, dispatch) => {
    const formError = { ...state.forms.formError }
    const form = { ...state.forms.form }
    const formMapValues = objectValues(list)
    for (let index = 0; index < formMapValues.length; index++) {
        const name = objectKeys(list)[index]
        formError[name] = !validation(list[name].pattern, isEmpty(form[name], false))
    }
    const isValid = !objectValues(formError).some(formErrorValue => formErrorValue)
    dispatch({
        type: HANDLE_SUBMIT,
        form,
        formError,
    })
    return { isValid, form }
}
