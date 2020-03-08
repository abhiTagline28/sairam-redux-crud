import { INITIAL_STATE } from "./routesIds"

export default {
    [INITIAL_STATE]: {
        header: 'login',
        fields: {
            username: {
                type: 'text',
                pattern: '',
                required: true
            },
            password: {
                type: 'password',
                pattern: '',
                required: true
            }
        },
        button: {
            type: 'submit',
            value: 'Login'
        }
    }
}