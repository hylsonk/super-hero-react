import React, { useState, useEffect } from 'react';
import {
    Biography,
    Powerstats,
    Appearance,
    Work,
    Connections,
} from '../../organisms/';
import {
    Image,
    Spinner
} from '../../atoms/';

import { get } from '../../../services/integrations'

export const ChracterDetails = ({ match }) => {

    const [chracter, setChracter] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const char = await get(match.params.id)
            setChracter(char.data)
            setIsLoading(false)
        })()
    }, []);

    return (
        <div className='container'>
            {isLoading ? (
                <Spinner/>
            ) : View(chracter)}
        </div>
    )
}

export const View = (chracter) => {
    if (chracter) {
        return (
            <div>
                <Image
                    url={chracter.image.url}
                />
                <Powerstats
                    powerstats={chracter.powerstats}
                />
                <Biography
                    biography={chracter.biography}
                />
                <Appearance
                    appearance={chracter.appearance}
                />
                <Work
                    work={chracter.work}
                />
                <Connections
                    connections={chracter.connections}
                />
            </div>
        )
    } else {
        return ("Loading...")
    }
}

export default ChracterDetails;