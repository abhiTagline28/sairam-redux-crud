import React from 'react'
import CustomButton from './CustomButton'

export default ({ buttonAttributes, id }) => {
    return (
        Array.isArray(buttonAttributes)
            ?
            buttonAttributes.map(({ value, typeOf, onClick, ...rest }, index) => {
                switch (typeOf) {
                    case 'edit':
                    case 'delete':
                        return <CustomButton
                            onClick={() => onClick(id)}
                            {...{ ...rest }}
                            key={index}
                        >{value}</CustomButton>
                    case 'clear':
                        return <CustomButton onClick={onClick} {...{ ...rest }} key={index}>{value}</CustomButton>
                    default:
                        return <CustomButton {...{ ...rest }} key={index}>{value}</CustomButton>
                }
            })
            : <CustomButton
                type={buttonAttributes.type}
                onClick={buttonAttributes.onClick}
            >{buttonAttributes.value}</CustomButton>
    )
}
