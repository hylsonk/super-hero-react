import React from 'react';
export const Toggle = ({
    onChange,
    checked,
    id = '',
    className='switch is-rounded is-info'
}) => {
    return (
        <input
            type='checkbox'
            id={id}
            className={className}
            checked={checked}
            onChange={onChange}
        />
    )
}

export default Toggle;