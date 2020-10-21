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

import { get } from '../../../services/integrations';

export const ChracterDetails = ({ match }) => {

    const [chracter, setChracter] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        startPage(setChracter, setIsLoading, match.params.id)
    }, [match.params.id]);

    return (
        <div className='container'>
            <div className="level navbar">
                <div className="level-left">
                    <div className='level-item'>
                        <Link
                            url={`${process.env.REACT_APP_URL}`}
                            children='< Voltar'
                        />
                    </div>
                </div>
            </div>
            <div className='block'>
                {isLoading ? (
                    <div className='columns is-centered'>
                        <Spinner />
                    </div>
                ) : View(chracter)}
            </div>
        </div>
    )
}

export const startPage = async (setChracter, setIsLoading, id) => {
    const char = await get(id)
    setChracter(char.data)
    setIsLoading(false)
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
                <div className="columns">
                    <div className="column">
                        <Appearance
                            appearance={chracter.appearance}
                        />
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <Work
                            work={chracter.work}
                        />
                    </div>
                </div>
                <div className="columns">
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