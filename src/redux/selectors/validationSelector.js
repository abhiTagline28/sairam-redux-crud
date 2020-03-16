import validation from "../../util/validation";
import { HANDLE_SUBMIT } from "../constants";

export default (state, dispatch) => {
    const clonedForm = { ...state.forms.form }
    const formMap = Object.values(clonedForm)
    formMap.forEach(({ pattern, value }, index) => {
        if (value.trim().length) {
            const validationResponse = !validation(pattern, value)
            formMap[index].showError = validationResponse
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
    return !isValid
}
