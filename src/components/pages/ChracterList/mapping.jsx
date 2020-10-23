import React from 'react';  
import {
    Link
} from '../../atoms/';
import {
    Favorite
} from '../../molecules/';
export const mappingToTable = (chracterList) => {
    return chracterList.map(char => ([
        char.id,
        char.name,
        char.powerstats.intelligence,
        char.powerstats.strength,
        char.powerstats.speed,
        char.powerstats.durability,
        char.powerstats.power,
        char.powerstats.combat,
        <Link 
            url={`${process.env.REACT_APP_URL}details/${char.id}`}
            children='Detail'
        />,
        <Favorite />

    ]))
}