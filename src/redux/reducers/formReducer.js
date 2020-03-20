import { ONCHANGE, HANDLE_SUBMIT, CLEAR_FORM, EDIT_USER } from "../constants";
const initialState = {
    form: {
        userName: "sairam",
        email: "sairam.beti.67@gmail.com",
        age: "11",
        password: "Qqqqqq!1",
        confirmPassword: "Qqqqqq!1"
    },
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