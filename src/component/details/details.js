import React from 'react';
import './details.css';
import DetailsForm from './detailsForm/detailsForm';

const details = () => {
    return (
        <div className='details'>
            <div className='Logo'>
                <h1>Digital</h1>
            </div>
            <div className='Topic'>
                <p>
                    Artificial Intelligence Driving <br/>
                    Results For The Travel Industry
                </p>
            </div>
            <div className='digital-details'>
                <p className='note'>
                    Welcome  back! Please login to your account.
                </p>
                <DetailsForm/>
            </div>
            <div className='log-button'>
                <button className='log'>Login</button>
                <button className='sign'>Sign Up</button>
            </div>
            <div className='links'>
                <p>Or login with</p>
                <p className='link'><a href='/'>Facebook</a></p>
                <p className='link'><a href='/'>LinkedIn</a></p>
                <p className='link'><a href='/'>Google</a></p>
            </div>
        </div>
    )
}

export default details;
