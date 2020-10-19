import React from 'react';
import {
    Details
} from '../';
import {
    Title
} from '../../atoms/';
import { mappingWork } from './mapping';

export const Work = ({
    work
}) => {
    return(
        <div>
            <Title
                id=''
                className=''
                type='h1'
                text='Work'
            />
            <Details 
                detailsList={mappingWork(work)}
            />
        </div>  
    )
    
}

export default Work;