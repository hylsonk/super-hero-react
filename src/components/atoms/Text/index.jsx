import React from 'react'

export const Text = ({ text, id = '', className=''}) => {
    return (
        <p
            id={id}
            className={className}
        >
            { text }
        </p>
    )
}

export default Text;