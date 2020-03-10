import React from 'react'
import CustomInput from './CustomInput'
import { capitalize, camelCaseSpace } from '../util/regex'

const Form = ({ formValues, handleChange }) => (
    Object.values(formValues).map(({ pattern, ...all }, index) => {
        const name = Object.keys(formValues)[index]
        return (
            <CustomInput
                key={index}
                {...{ ...all, name, handleChange }}
                placeholder={`Enter ${capitalize(camelCaseSpace(name))}`}
            />
        )
    })
)

export default Form