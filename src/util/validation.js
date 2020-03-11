import { email, password, username, confirmPassword } from "./validationConstants";
import { emailValidation, passwordValidation, userNameValidation } from "./regex";
let passwordValue = ''
export default (pattern, value) => {
    if (pattern === password) {
        passwordValue = value
    }
    switch (pattern) {
        case email:
            return emailValidation(value)
        case password:
            return passwordValidation(value)
        case username:
            return userNameValidation(value)
        case confirmPassword:
            return (value === passwordValue)
        default:
            return false;
    }
}