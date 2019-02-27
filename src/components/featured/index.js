import React from 'react';

//COMPONENTS
import Carrousel from './Carrousel'
import TimeUntill from './TimeUntill'

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>

            <Carrousel />

            <div className="artist_name">
                <div className="wrapper">
                    MetallicA
                </div>
            </div>

            <TimeUntill />
            
        </div>
    );
}

export default Featured;