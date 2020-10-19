import React from 'react'

export const Input = ({ value, onChange, id, className, type = 'text', placeholder = ''}) => {
    return (
        <input
            id={id}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
            value={value}
        />
    )
}

export default Input