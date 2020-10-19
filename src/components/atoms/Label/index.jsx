import React from 'react'
export const Label = ({ text, id = '', className=''}) => {
    return (
        <label 
            id={id}
            className={className}
        >
            { text }
        </label>
    )
}

export default Label;