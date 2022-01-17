import React from 'react';
import './clip.css';
import clipp from '../../Asset/clip.png';

const clip = () => {
    return (
        <div className='clip'>
            <div className='clip-img'>
                <img src={clipp} alt='clip' />
            </div>
        </div>
    )
}

export default clip;
