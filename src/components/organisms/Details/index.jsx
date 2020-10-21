import React from 'react';
import {
    LabelText
} from '../../molecules/';

export const Details = ({
    detailsList = []
}) => {
    return (
        <div className="columns">
            {detailsList.map((detail, index) => (
                <div className='column' key={index}>
                    <LabelText
                        idLabel={detail.idLabel}
                        idText={detail.idText}
                        classNameText={detail.classNameText}
                        classNameLabel={detail.classNameLabel}
                        label={detail.label}
                        text={detail.text}
                    />
                </div>
            ))}
        </div>
    )
}

export default Details;