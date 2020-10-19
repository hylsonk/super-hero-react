import React from 'react';
import { Input, Button } from '../../atoms';
import { labels } from '../../../utils/labels';

export const InputSearch = ({value, onChange, id, className,label, onClick, disabled, classNameButton}) => {
    return(
        <div>
            <Input 
                type='text'
                placeholder={labels.search}
                onChange= {onChange}
                id={id}
                className={className}
                value={value}
            />
            <Button 
                onClick={onClick}
                disabled={disabled}
                className={classNameButton}
                label={label}
            />
        </div>
        
    )
}

export default InputSearch;