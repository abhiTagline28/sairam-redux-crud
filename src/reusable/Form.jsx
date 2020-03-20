import React from 'react'
import CustomInput from './CustomInput'
import { capitalize, camelCaseSpace, isEmpty, objectValues, objectKeys } from '../util/regex'
import ButtonMapping from './ButtonMapping'
import { useDispatch, useSelector } from 'react-redux'
import { onChange } from '../redux/actions/onChangeAction'

export default ({ formAttributes, handleSubmit, buttonAttributes }) => {
    const { formError, form } = useSelector(state => state.forms)
    const dispatch = useDispatch()
    const handleChange = (e, pattern) => {
        const { value, name } = e.target
        dispatch(onChange(name, value, pattern))
    }

    return <form onSubmit={handleSubmit}>
        {
            objectValues(formAttributes).map(({ ...all }, index) => {
                const name = objectKeys(formAttributes)[index]
                const showError = isEmpty(formError[name], true)
                const value = isEmpty(form[name], false)
                return (<CustomInput
                    key={index}
                    {...{ ...all, name, handleChange, showError, value }}
                    placeholder={`Enter ${capitalize(camelCaseSpace(name))}`}
                />
                )
            })
        }
        {
            <ButtonMapping buttonAttributes={buttonAttributes} />
        }
    </form >
}