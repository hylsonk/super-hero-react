import React from 'react';
import {
    Details
} from '../';
import {
    Title
} from '../../atoms/';
import { mappingPowerstats } from './mapping';

export const Powerstats = ({
    powerstats
}) => {
    return(
        <div>
            <Title
                id=''
                className='title'
                type='h1'
                text='Powerstats'
            />
            <Details 
                detailsList={mappingPowerstats(powerstats)}
            />
        </div>  
    )
    
}

export default Powerstats;