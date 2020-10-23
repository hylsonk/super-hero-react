import React from 'react';
import { ReactComponent as Favorite } from '../../../assets/images/favorite-24px.svg';
import { ReactComponent as FavoriteBorder } from '../../../assets/images/favorite_border-24px.svg';

export const Icon = ({type, fill}) => {

    switch(type) {
        case 'favorite':
            return (
                <Favorite 
                    className='icon'
                    fill={fill}
                />
            )
        default:
            return(
                <FavoriteBorder
                    className='iconBorder'
                /> 
            )
    }
    
}

export default Icon;