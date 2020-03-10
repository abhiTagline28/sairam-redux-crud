import { email, password, username, confirmPassword } from "../../util/validationConstants";
export default {
    userName: {
        type: 'text',
        value: 'sairam',
        isRequired: true,
        showError: false,
        errorMessage: 'Only Alphabets',
        pattern: username
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
    }
}
