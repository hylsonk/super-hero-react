import React from 'react';
import {
    Details
} from '../';
import {
    Title
} from '../../atoms/';

export const Appearance = ({
    powerstats
}) => {
    return(
        <div>
            <Title
                id=''
                className=''
                type='h1'
                text='Appearance'
            />
            <Details 
                detailsList={['a','b']}
            />
        </div>  
    )
    
}

export default Appearance;