import { email, password, alphabetWithSpace, confirmPassword, number } from "./validationConstants";
import { emailValidation, passwordValidation, userNameValidation, numberValidation } from "./regex";
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
        case alphabetWithSpace:
            return userNameValidation(value)
        case confirmPassword:
            return (value === passwordValue)
        case number:
            return numberValidation(value)
        default:
            return false;
    }
}