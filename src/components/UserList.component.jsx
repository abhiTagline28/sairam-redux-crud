import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from '../reusable/Table'
import { editUserList } from '../redux/actions/editUserListAction'
import deleteUserListByIdAction from '../redux/actions/deleteUserListByIdAction'

export default function UserList() {
    const userData = useSelector(state => state.user)
    const { errorMessage, showError, userList } = userData
    const key = userList.length ? Object.keys(userList[0]) : []
    const dispatch = useDispatch()

    const buttonAttributes = [
        {
            value: 'Delete',
            typeOf: 'delete',
            type: 'button',
            onClick: (id) => dispatch(deleteUserListByIdAction(id)),
        },
        {
            value: 'Edit',
            typeOf: 'edit',
            type: 'button',
            onClick: (id) => dispatch(editUserList(id)),
        }
    ]

    return (
        <Fragment>
            {showError && errorMessage}
            {key.length ?
                <Table theadKeyMap={key} tbodyValueMap={userList} buttonAttributes={buttonAttributes} />
                : null
            }
        </Fragment>
    )
}
