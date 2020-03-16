import { ONCHANGE, HANDLE_SUBMIT, CLEAR_FORM, EDIT_USER } from "../constants";
import formFields from '../constants/formFields'
const initialState = {
    isvalid: false,
    form: { ...formFields },
    isEdit: false,
    editId: 0
}
export default function (state = initialState, action) {
    switch (action.type) {
        case ONCHANGE:
            return {
                ...state,
                form: action.updatedForm,
            };
        case HANDLE_SUBMIT:
            return {
                ...state,
                form: action.validatedForm,
                isvalid: action.isValid
            }
        case CLEAR_FORM:
            return {
                ...state,
                form: action.form,
                isvalid: false,
                isEdit: false,
                editId: 0
            }
        case EDIT_USER:
            return {
                ...state,
                form: action.form,
                isEdit: action.isEdit,
                editId: action.editId
            }
        default:
            return state;
    }
}