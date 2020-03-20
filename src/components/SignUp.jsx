import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Form from '../reusable/Form'
import { submit } from '../redux/actions/formSubmitAction'
import clearFormAction from '../redux/actions/clearFormAction'
import updateUserList from '../redux/actions/updateUserList'
import formAttributes from '../redux/constants/signUpFields';
const SignUp = () => {
    const isEdit = useSelector(state => state.forms.isEdit)
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        if (!isEdit) return dispatch(submit(formAttributes))
        return dispatch(updateUserList(formAttributes))
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
        <Form {...{ formAttributes, handleSubmit, buttonAttributes }} />
    )
}

export default memo(SignUp)
