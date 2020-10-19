import React from 'react'

export const Image = ({url, className}) => {
    return (
        <figure class={className}>
            <img src={url}/>
        </figure>
    )
}

export default Image;