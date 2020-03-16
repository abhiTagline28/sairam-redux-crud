import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Form from '../reusable/Form'
import { onChange } from '../redux/actions/onChangeAction'
import { submit } from '../redux/actions/formSubmitAction'
import clearFormAction from '../redux/actions/clearFormAction'
import updateUserList from '../redux/actions/updateUserList'

const SignUp = () => {
    const formAttributes = useSelector(state => state.forms.form)
    const isEdit = useSelector(state => state.forms.isEdit)
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        if (!isEdit) return dispatch(submit())
        return dispatch(updateUserList())
    }

    const handleChange = e => {
        const { value, name } = e.target
        dispatch(onChange(name, value))
    }

    const buttonAttributes = [
        {
            value: !isEdit ? 'Sign Up' : 'Update',
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
