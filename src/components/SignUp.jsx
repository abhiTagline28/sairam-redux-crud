import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Form from '../reusable/Form'
import { onChange } from '../redux/actions/onChangeAction'
import CustomButton from '../reusable/CustomButton'
import { submit } from '../redux/actions/formSubmitAction'

const SignUp = () => {
    const formValues = useSelector(state => state.forms.form)
    // let formValues
    const dispatch = useDispatch()
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(submit())
    }
    return (
        <form onSubmit={handleSubmit}>
            <Form
                {...{ formValues }}
                handleChange={(e) => dispatch(onChange(e.target.name, e.target.value))} />
            <CustomButton type='submit'>Sign up</CustomButton>
        </form>
    )
}

export default SignUp
