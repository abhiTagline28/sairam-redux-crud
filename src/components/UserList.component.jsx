import React from 'react'
import { useSelector } from 'react-redux'

export default function UserList() {
    const userData = useSelector(state => state.user)
    const { errorMessage, showError, userList } = userData

    return (
        <div>
            {showError && errorMessage}
            <table style={{ width: "50%", margin: '0 auto' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Confirm Password</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map(({ userName, email, password, confirmPassword }, index) => {
                        return <tr key={index}>
                            <td>{userName}</td>
                            <td>{email}</td>
                            <td>{password}</td>
                            <td>{confirmPassword}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
