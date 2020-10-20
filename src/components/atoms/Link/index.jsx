import React from 'react';
export const Link = ({ url, children, id = '', className=''}) => {
    return (
        <a  
            href={url} 
            id={id}
            className={className}
        >
            {children}
        </a>
    )
}

export default Link;