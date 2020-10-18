import React from 'react'

export const Input = ({action, id, className, type = 'text', placeholder = ''}) => {
    return (
        <input
            id={id}
            type={type}
            onChange={action}
            placeholder={placeholder}
            className={className}
        />
    )
}

export default Input