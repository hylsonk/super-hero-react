import React from 'react'

export const Input = ({ value, action, id, className, type = 'text', placeholder = ''}) => {
    return (
        <input
            id={id}
            type={type}
            onChange={action}
            placeholder={placeholder}
            className={className}
            value={value}
        />
    )
}

export default Input