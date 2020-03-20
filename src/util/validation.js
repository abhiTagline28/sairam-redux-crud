import { email, password, alphabetWithSpace, confirmPassword, number } from "./validationConstants";
import { emailValidation, passwordValidation, stringWithSpaceValidation, isNumber } from "./regex";
let passwordValue = ''
export default (pattern, value) => {
    if (pattern === password) {
        passwordValue = value.trim().length > 0 ? value : false
    }
    switch (pattern) {
        case email:
            return emailValidation(value)
        case password:
            return passwordValidation(value)
        case alphabetWithSpace:
            return stringWithSpaceValidation(value)
        case confirmPassword:
            return (value === passwordValue)
        case number:
            return isNumber(value)
        default:
            return false;
    }
}