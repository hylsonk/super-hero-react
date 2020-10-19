import React from 'react';
import {
    Details
} from '../';
import {
    Title
} from '../../atoms/';

export const Biography = ({
    powerstats
}) => {
    return(
        <div>
            <Title
                id=''
                className=''
                type='h1'
                text='Biography'
            />
            <Details 
                detailsList={['a','b']}
            />
        </div>  
    )
    
}

export default Biography;