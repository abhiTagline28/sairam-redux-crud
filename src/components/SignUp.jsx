import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Form from '../reusable/Form'
import { onChange } from '../redux/actions/onChangeAction'
import { submit } from '../redux/actions/formSubmitAction'
import clearFormAction from '../redux/actions/clearFormAction'

const SignUp = () => {
    const formAttributes = useSelector(state => state.forms.form)
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(submit())
    }

    const handleChange = e => {
        const { value, name } = e.target
        dispatch(onChange(name, value))
    }

    const buttonAttributes = [
        {
            value: 'Sign Up',
            type: 'submit',
        },
        {
            value: 'Clear',
            type: 'button',
            typeOf: 'clear',
            onClick: () => dispatch(clearFormAction()),
        }
    ]

    return (
        <Form {...{ formAttributes, handleSubmit, buttonAttributes, handleChange }} />
    )
}

export default SignUp
