import React from 'react';
export const Toggle = ({
    onChange,
    checked,
    id = '',
    className='switch is-rounded'
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