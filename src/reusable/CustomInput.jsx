import React from 'react'

export default ({ showError, errorMessage, isRequired, handleChange, pattern, ...otherProps }) => (
    <div>
        <input
            {...otherProps}
            // required={isRequired}
            onChange={(e) => handleChange(e, pattern)}
        />
        {showError && <label> {errorMessage}</label>}
    </div >
)
