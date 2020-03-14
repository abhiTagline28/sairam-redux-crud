import { CLEAR_FORM } from "../constants";

export default () => (dispatch, getState) => {
    const state = getState();
    const clonedForm = { ...state.forms.form }
    const formMap = Object.values(clonedForm)
    for (let index = 0; index < formMap.length; index++) {
        formMap[index].value = ''
    }

    dispatch({
        type: CLEAR_FORM,
        form: clonedForm
    })
}
