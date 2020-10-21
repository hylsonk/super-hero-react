import React from 'react';
import {
    Details
} from '../';
import {
    Title
} from '../../atoms/';
import { mappingBiography } from './mapping';

export const Biography = ({
    biography
}) => {
    return(
        <div className='section'>
            <Title
                id=''
                className='title'
                type='h1'
                text='Biography'
            />
            <Details 
                detailsList={mappingBiography(biography)}
            />
        </div>  
    )
    
}

export default Biography;