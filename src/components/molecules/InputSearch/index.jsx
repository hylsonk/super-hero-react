import React from 'react';
import { Input, Button } from '../../atoms';
import { labels } from '../../../utils/labels';

export const InputSearch = ({ value, onChange, id, label, onClick, disabled }) => {
    return (
        <div className='columns is-mobile'>
            <div className='column'>
                <Input
                    type='text'
                    placeholder={labels.search}
                    onChange={onChange}
                    id={id}
                    className='input'
                    value={value}
                />
            </div>
            <div className='column'>
                <Button
                    onClick={onClick}
                    disabled={disabled}
                    className='button'
                    label={label}
                />
            </div>
        </div>

    )
}

export default InputSearch;