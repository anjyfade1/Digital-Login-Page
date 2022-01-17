import React from 'react';
import './detailsForm.css';

const detailsForm = () => {

    return (
        <div className='detailsForm'>
            <form id='form' >
                <div className='email'>
                    <label for='floatField'>Email Address</label>
                    <input type='email' id='floatField' />
                </div>
                <div className='password'>
                    <label for='passwordfield'>Password</label>
                    <input type='password' id='passwordfield' />
                </div>
            </form>
            <div className='reset'>
                <div className='remember'>
                    <input type="checkbox" id="remember" name="remember" value="remember"/>
                    <label for="remember"> Remember Me</label>
                </div>      
                <div className='forgot'>
                    <label>
                        Forgot Password?
                    </label>
                </div>
            </div>
        </div>
    )
}

export default detailsForm
