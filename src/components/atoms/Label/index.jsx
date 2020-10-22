import React from 'react'
export const Label = ({ text,forLabel = '', id = '', className=''}) => {
    return (
        <label 
            id={id}
            className={className}
            htmlFor={forLabel}
        >
            { text }
        </label>
    )
}

export default Label;