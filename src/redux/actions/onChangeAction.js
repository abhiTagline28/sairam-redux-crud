import { ONCHANGE } from "../constants";
import validation from "../../util/validation";

export const onChange = (name, value, pattern) => (dispatch, getState) => {
    const state = getState()
    const formClone = { ...state.forms.form }
    const formErrorClone = { ...state.forms.formError }
    formClone[name] = value
    formErrorClone[name] = !validation(pattern, value)
    dispatch(
        {
            type: ONCHANGE,
            updatedForm: formClone,
            updatedFormError: formErrorClone,
        }
    )
}