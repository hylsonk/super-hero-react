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
    Spinner,
    Link
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
            <Link
                url={`${process.env.REACT_APP_URL}`}
                children='< Voltar'
            />
            {isLoading ? (
                <Spinner />
            ) : View(chracter)}
        </div>
    )
}

export const View = (chracter) => {
    if (chracter) {
        return (
            <div>
                <div className="columns is-desktop">
                    <div className="column is-one-quarter">
                        <Image
                            url={chracter.image.url}
                            className="image is-3by4"
                        />
                    </div>
                    <div className="column">
                        <Powerstats
                            powerstats={chracter.powerstats}
                        />
                        <Biography
                            biography={chracter.biography}
                        />
                    </div>
                </div>
                <div className="columns is-desktop">
                    {/* <div className="column">
                        <Biography
                            biography={chracter.biography}
                        />
                    </div> */}
                    <div className="column">
                        <Appearance
                            appearance={chracter.appearance}
                        />
                    </div>
                    <div className="column">
                        <Work
                            work={chracter.work}
                        />
                    </div>
                    <div className="column">
                        <Connections
                            connections={chracter.connections}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChracterDetails;