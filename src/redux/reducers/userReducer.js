import { ADD_USER, ADD_USER_ERROR, MAINTAIN_USERLIST } from "../constants";

const initialState = {
    userList: [],
    errorMessage: '',
    showError: false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                userList: [...state.userList, action.userList],
                errorMessage: '',
                showError: false
            }
        case ADD_USER_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage,
                showError: true
            }
        case MAINTAIN_USERLIST:
            return {
                ...state,
                userList: [...action.userList]
            }
        default:
            return state;
    }
}