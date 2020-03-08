import React from 'react'
import formConnector from './formConnector'
import TextInput from '../Inputs/TextInput';
import inputSelector from '../../redux/form/selectors/inputSelector';
const Form = ({ type, ...otherProps }) => {
    console.log('type', type)
    switch (type) {
        case 'text':
            return <TextInput {...otherProps} />
        default:
            return null
    }
}


export default formConnector(Form)
// export default Form