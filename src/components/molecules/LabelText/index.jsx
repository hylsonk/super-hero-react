import React from 'react';
import {
    Text,
    Label
} from '../../atoms/';

export const LabelText = ({
    idLabel,
    idText,
    classNameText,
    classNameLabel,
    label,
    text
}) => {
    return(
        <div>
            <Label
                id={idLabel}
                className={classNameLabel}
                text={label}
            />
            <Text 
                id={idText}
                className={classNameText}
                text={text}
            />
        </div>
    )
}

export default LabelText;