import React from 'react'

export default ({ showError, errorMessage, isRequired, handleChange, ...otherProps }) => (
    <div>
        <input
            {...otherProps}
            // required={isRequired}
            onChange={handleChange}
        />
        {showError && <label> {errorMessage}</label>}
    </div >
)
