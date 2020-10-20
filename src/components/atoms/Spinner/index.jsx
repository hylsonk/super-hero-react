import React from 'react';
import Loader from 'react-loader-spinner';

export const Spinner = () => {
    return (
        <Loader
            type="Oval"
            color="black"
            height={100}
            width={100}
        />
    )
}

export default Spinner;