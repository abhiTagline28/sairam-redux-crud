import { ONCHANGE } from "../constants";

export const onChange = (name, value) => (dispatch, getState) => {
    const state = getState()
    const formClone = { ...state.forms.form }
    formClone[name].value = value
    dispatch(
        {
            type: ONCHANGE,
            updatedForm: formClone
        }
    )
}