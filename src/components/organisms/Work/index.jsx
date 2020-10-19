import React from 'react';
import {
    Details
} from '../';
import {
    Title
} from '../../atoms/';

export const Work = ({
    powerstats
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
                detailsList={['a','b']}
            />
        </div>  
    )
    
}

export default Work;