import { email, password, alphabetWithSpace, confirmPassword, number } from "../../util/validationConstants";
export default {
    userName: {
        type: 'text',
        isRequired: true,
        errorMessage: 'Only Alphabets',
        pattern: alphabetWithSpace,
        autoComplete: "username",
    },
    email: {
        type: 'text',
        isRequired: true,
        errorMessage: 'Invalid Email',
        pattern: email,
        autoComplete: "username",
    },
    age: {
        type: 'text',
        isRequired: true,
        errorMessage: 'age is required',
        pattern: number
    },
    password: {
        type: 'password',
        isRequired: true,
        errorMessage: 'Atleast 8 character with one symbol,small,capital letter',
        pattern: password,
        autoComplete: "new-password",
    },
    confirmPassword: {
        type: 'password',
        isRequired: true,
        errorMessage: 'confirm password must match',
        pattern: confirmPassword,
        autoComplete: "new-password",
    },
}
