import React from 'react';
import {
    LabelText
} from '../../molecules/';

export const Details = ({
    detailsList = []
}) => {
    return(
        <div>
            {detailsList.map((detail,index) => (
                <LabelText
                    key={index}
                    idLabel={detail.idLabel}
                    idText={detail.idText}
                    classNameText={detail.classNameText}
                    classNameLabel={detail.classNameLabel}
                    label={detail.label}
                    text={detail.text}
                />
            ))}
        </div>
    )
}

export default Details;