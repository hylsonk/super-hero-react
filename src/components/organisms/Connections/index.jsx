import React from 'react';
import {
    Details
} from '../';
import {
    Title
} from '../../atoms/';

export const Connections = ({
    powerstats
}) => {
    return(
        <div>
            <Title
                id=''
                className=''
                type='h1'
                text='Connections'
            />
            <Details 
                detailsList={['a','b']}
            />
        </div>  
    )
    
}

export default Connections;