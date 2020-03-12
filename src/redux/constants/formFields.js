import { email, password, alphabetWithSpace, confirmPassword, number } from "../../util/validationConstants";
export default {
    userName: {
        type: 'text',
        value: 'sairam',
        isRequired: true,
        showError: false,
        errorMessage: 'Only Alphabets',
        pattern: alphabetWithSpace
    },
    email: {
        type: 'email',
        value: 'sairam@gmail.com',
        isRequired: true,
        showError: false,
        errorMessage: 'Invalid Email',
        pattern: email
    },
    password: {
        type: 'password',
        value: 'Qqqqqq!1',
        isRequired: true,
        showError: false,
        errorMessage: 'Atleast 8 character with one symbol,small,capital letter',
        pattern: password
    },
    confirmPassword: {
        type: 'password',
        value: 'Qqqqqq!1',
        isRequired: true,
        showError: false,
        errorMessage: 'confirm password must match',
        pattern: confirmPassword
    },
    age: {
        type: 'text',
        value: '11',
        isRequired: true,
        showError: false,
        errorMessage: 'age is required',
        pattern: number
    }
}
