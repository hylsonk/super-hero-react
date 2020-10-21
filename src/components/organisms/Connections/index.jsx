import React from 'react';
import {
    Details
} from '../';
import {
    Title
} from '../../atoms/';
import { mappingConnections } from './mapping';

export const Connections = ({
    connections
}) => {
    return(
        <div className='section '>
            <Title
                id=''
                className='title'
                type='h1'
                text='Connections'
            />
            <Details 
                detailsList={mappingConnections(connections)}
            />
        </div>  
    )
    
}

export default Connections;