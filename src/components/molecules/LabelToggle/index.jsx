import React from 'react';
import {
    Toggle,
    Label
} from '../../atoms/';

export const LabelToggle = ({
    idLabel,
    idToggle,
    classNameToggle,
    classNameLabel,
    label,
    checked,
    onChange,
    forLabel
}) => {
    return(
        <div className="level navbar head">
        <div className='level-left'>
        </div>
        <div className='level-right'>
          <div className='level-item'>
          <div className='field'>
            <Toggle 
                id={idToggle}
                className={classNameToggle}
                checked={checked}
                onChange={onChange}
            />
            <Label
                id={idLabel}
                className={classNameLabel}
                text={label}
                forLabel={forLabel}
            />
        </div>
          </div>
        </div>
      </div>
        )
}

export default LabelToggle;