import React, { useState, useEffect } from 'react';
import { Button, Icon } from '../../atoms';

export const Favorite = ({ isFavorite = false }) => {
    
    const [favorite, setFavorite] = useState(isFavorite);
    const [icon, setIcon] = useState(<Icon />);
    
    useEffect(() => {
        setIcon(chooseFavoriteIcon(favorite))
    },[favorite]);

    return (

        <Button
            onClick={() => setFavorite(!favorite)}
            className='iconButton'
            label={
                icon
            }
        />

    )
}

export const chooseFavoriteIcon = (isFavorite) => {
    if(isFavorite) {
        return (
            <Icon 
                type='favorite'
                fill='red'
            />
        )
    } else {
        return (
            <Icon />
        )
    }
}

export default Favorite;