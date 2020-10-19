import React from 'react';
import {
    Details
} from '../';
import {
    Title
} from '../../atoms/';

export const Powerstats = ({
    powerstats
}) => {
    return(
        <div>
            <Title
                id=''
                className=''
                type='h1'
                text='Powerstats'
            />
            <Details 
                detailsList={['a','b']}
            />
        </div>  
    )
    
}

export default Powerstats;