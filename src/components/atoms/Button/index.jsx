import React from 'react'

export const Button = ({label, onClick, disabled= false, className=''}) => {
    return (
        <button 
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default Button;