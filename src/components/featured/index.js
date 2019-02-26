import React from 'react';

//COMPONENTS
import Carrousel from './Carrousel'

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>

            <Carrousel />

            <div className="artist_name">
                <div className="wrapper">
                    METALLICA
                </div>
            </div>

        </div>
    );
}

export default Featured;