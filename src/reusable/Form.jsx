import React from 'react'
import CustomInput from './CustomInput'
import { capitalize, camelCaseSpace } from '../util/regex'
import CustomButton from './CustomButton'

const Form = ({ formAttributes, handleChange, handleSubmit, buttonAttributes }) => (
    <form onSubmit={handleSubmit}>
        {
            Object.values(formAttributes).map(({ pattern, ...all }, index) => {
                const name = Object.keys(formAttributes)[index]
                return (< CustomInput
                    key={index}
                    {...{ ...all, name, handleChange }}
                    placeholder={`Enter ${capitalize(camelCaseSpace(name))}`}
                />
                )
            })
        }
        {
            buttonAttributes.map(({ value, ...other }, index) => {
                return <CustomButton {...{ ...other }} key={index}>{value}</CustomButton>
            })
        }
    </form >
)

export default Form