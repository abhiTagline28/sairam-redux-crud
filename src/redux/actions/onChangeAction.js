import { ONCHANGE } from "../constants";
import validation from "../../util/validation";

export const onChange = (name, value) => (dispatch, getState) => {
    const state = getState()
    const formClone = { ...state.forms.form }
    // console.log('name', name)
    // console.log('value', value)
    formClone[name] = value
    // formClone[name].value = value
    // formClone[name].showError = !validation(formClone[name].pattern, value)
    dispatch(
        {
            type: ONCHANGE,
            updatedForm: formClone
        }
    )
}