import React from 'react';
import {
    Details
} from '../';
import {
    Title
} from '../../atoms/';
import { mappingAppearance } from './mapping';

export const Appearance = ({
    appearance
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
                detailsList={mappingAppearance(appearance)}
            />
        </div>  
    )
    
}

export default Appearance;