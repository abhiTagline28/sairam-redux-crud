import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Table from '../reusable/Table'

export default function UserList() {
    const userData = useSelector(state => state.user)
    const { errorMessage, showError, userList } = userData
    const key = userList.length ? Object.keys(userList[0]) : []
    return (
        <Fragment>
            {showError && errorMessage}
            {key.length ?
                <Table theadKeyMap={key} tbodyValueMap={userList} />
                : null
            }
        </Fragment>
    )
}
