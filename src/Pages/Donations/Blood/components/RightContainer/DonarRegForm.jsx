import { useReducer, useState } from 'react';
import { LocationFilters } from '../../../../../components';

import { BLOOD_GROUP_OPTIONS } from '../../../../../constants/bloodGroups';


const DonarFormReducer = (state, newState) => ({
    ...state,
    ...newState,
});

const DonarRegForm = () => {
    const [donor, setDonor] = useReducer(DonarFormReducer, {});

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log({
            donor
        })
    }

    const handleFormChange = (ev) => {
        const value = ev.target.value
        const name = ev.target.name
        setDonor({[name]: value})
    }

    const handleLocationChange = (location) => {
        setDonor(location)
    }

    return (
        <div className='doner_form'>
            <form className='php-email-form' onSubmit={() => handleSubmit()}>
                <h3>Donar Registration</h3>
                <p>
                    Please fill the following information to register as voluntary blood donor and become part of Janaraksha vision. Kindly update your date of donation once done, so that your name will be hidden
                    automatically till next 3 Months. Also please update your profile/information if in case you relocate in future.
                </p>
                <div className='row gy-3 mb-3'>
                    <div className='col-md-8'>
                        <input type='text' name='name' className='form-control' placeholder='Name' onChange={handleFormChange} />
                    </div>
                    <div className='col-md-4'>
                        <select className='form-select form-control' name='blood_group'>
                            {BLOOD_GROUP_OPTIONS.map((grp, ind) => (
                                <option key={ind} value={grp.value}>
                                    {grp.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='col-md-6'>
                        <input type='number' className='form-control' name='phone' placeholder='Phone' onChange={handleFormChange} />
                    </div>
                    <div className='col-md-6 '>
                        <input type='email' className='form-control' name='email' placeholder='Email' onChange={handleFormChange} />
                    </div>

                    <div className='col-md-6'>
                        <input type='password' className='form-control' name='password' placeholder='Password' onChange={handleFormChange} />
                    </div>
                    <div className='col-md-6'>
                        <input type='password' className='form-control' name='confirmPassword' placeholder='Confirm Password' onChange={handleFormChange} />
                    </div>
                </div>

                <LocationFilters onChange={handleLocationChange}/>

                <div className="row">
                    <div className='col-md-12'>
                        <div className='form-check d-flex'>
                            <input className='form-check-input' name="consent" type='checkbox' onChange={handleFormChange} />
                            <label className='form-check-label'>
                                <p className='ml-4'>I authorise this website to display my name and telephone number, so that the needy could contact me, as and when there is an emergency.</p>
                            </label>
                        </div>
                    </div>
                    <div className='col-md-12 text-center'>
                        <div className='loading'>Loading</div>
                        <div className='error-message' />
                        <div className='sent-message'>Your quote request has been sent successfully. Thank you!</div>
                        <button type='submit' onClick={handleSubmit}>Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default DonarRegForm;
