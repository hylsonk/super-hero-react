import React from 'react';
import types from './config';

export const Title = ({ text, type = types.h1, id = '', className=''}) => {

    const { h1, h2, h3, h4, h5 ,h6 } = types;
    
    switch(type.toUpperCase) {
        case h1:
            return(
                <h1
                    id={id}
                    className={className}
                >
                    { text }
                </h1>
            )
        case h2:
            return(
                <h2
                    id={id}
                    className={className}
                >
                    { text }
                </h2>
            )
        case h3:
            return(
                <h3
                    id={id}
                    className={className}
                >
                    { text }
                </h3>
            )
        case h4:
            return(
                <h4
                    id={id}
                    className={className}
                >
                    { text }
                </h4>
            )
        case h5:
            return(
                <h5
                    id={id}
                    className={className}
                >
                    { text }
                </h5>
            )
        case h6:
            return(
                <h6
                    id={id}
                    className={className}
                >
                    { text }
                </h6>
            )
        default:
            return(
                <h1
                    id={id}
                    className={className}
                >
                    { text }
                </h1>
            )
    }
}

export default Title;