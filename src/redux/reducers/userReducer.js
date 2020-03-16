import { ADD_USER, ADD_USER_ERROR, DELETE_USER, UPDATE_USER } from "../constants";

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
        case DELETE_USER:
            return {
                ...state,
                userList: action.clonedUserList
            }
        case UPDATE_USER:
            return {
                ...state,
                userList: action.clonedUserList,
            }
        default:
            return state;
    }
}