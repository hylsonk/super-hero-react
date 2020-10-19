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
                    idLabel=''
                    idText=''
                    classNameText=''
                    classNameLabel=''
                    label='Label:'
                    text='Text'
                />
            ))}
        </div>
    )
}

export default Details;