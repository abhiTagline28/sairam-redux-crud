import { ONCHANGE, HANDLE_SUBMIT, CLEAR_FORM, EDIT_USER } from "../constants";
const initialState = {
    form: {},
    formError: {},
    isEdit: false,
    editId: 0
}
export default function (state = initialState, action) {
    switch (action.type) {
        case ONCHANGE:
            return {
                ...state,
                form: action.updatedForm,
                formError: action.updatedFormError,
            };
        case HANDLE_SUBMIT:
            return {
                ...state,
                form: action.form,
                formError: action.formError,
            }
        case CLEAR_FORM:
            return {
                ...state,
                form: action.form,
                formError: action.formError,
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