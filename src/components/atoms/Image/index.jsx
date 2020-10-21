import React from 'react'

export const Image = ({url, className}) => {
    console.log(className)
    return (
        <figure className={className}>
            <img src={url} alt={url}/>
        </figure>
    )
}

export default Image;