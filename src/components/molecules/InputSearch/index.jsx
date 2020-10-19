import React from 'react';
import { Input } from '../../atoms';
import { labels } from '../../../utils/labels';

export const InputSearch = ({value, action, id, className}) => {
    return(
        <Input 
            type='text'
            placeholder={labels.search}
            action= {action}
            id={id}
            className={className}
            value={value}
        />
    )
}

export default InputSearch;