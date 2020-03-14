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

    const buttonAttributes = [
        {
            value: 'Sign Up',
            type: 'submit',
        },
        {
            value: 'Clear',
            type: 'button',
            onClick: () => dispatch(clearFormAction()),
        }
    ]
    return (
        <Form
            {...{ formAttributes, handleSubmit, buttonAttributes }}
            handleChange={(e) => dispatch(onChange(e.target.name, e.target.value))} />
    )
}

export default SignUp
