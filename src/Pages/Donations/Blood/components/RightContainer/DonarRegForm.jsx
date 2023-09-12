import React, { useReducer } from 'react';

import { STATES_LIST, DISTRICTS, CITIES } from '../../../../../constants/addressOptions';

const initialState = {
    districtList: [{ label: 'select District', value: '' }],
    citiesList: [{ label: 'select City', value: '' }],
    stateName: '',
    district: '',
    city: '',
};

const DonarFormReducer = (state, newState) => ({
    ...state,
    ...newState,
});

const DonarRegForm = () => {
    const [state, setState] = useReducer(DonarFormReducer, initialState);
    const { districtList, citiesList, stateName, district, city } = state;

    const handleStateChange = state => {
        const dis = DISTRICTS[state];
        setState({ stateName: state, districtList: [...districtList, ...dis] });
    };

    const handleDistrictChange = dist => {
        const cities = CITIES[dist];
        setState({ district: dist, citiesList: [...citiesList, ...cities] });
    };

    return (
        <div className='doner_form'>
            <form action='forms/quote.php' method='post' className='php-email-form'>
                <h3>Donar Registration</h3>
                <p>
                    Please fill the following information to register as voluntary blood donor and become part of Janaraksha vision. Kindly update your date of donation once done, so that your name will be hidden
                    automatically till next 3 Months. Also please update your profile/information if in case you relocate in future.
                </p>
                <div className='row gy-3'>
                    <div className='col-md-12'>
                        <input type='text' name='name' className='form-control' placeholder='Name' required='' />
                    </div>
                    <div className='col-md-12 '>
                        <input type='email' className='form-control' name='email' placeholder='Email' required='' />
                    </div>
                    <div className='col-md-12'>
                        <input type='text' className='form-control' name='phone' placeholder='Phone' required='' />
                    </div>
                    <div className='col-md-12'>
                        <input type='text' className='form-control' name='aadhar' placeholder='Aadhar' required='' />
                    </div>
                    <div className='col-md-12'>
                        <input type='text' className='form-control' name='whatsapp' placeholder='whatsapp' required='' />
                    </div>
                    <div className='col-md-12'>
                        <select className='form-select form-control' value={stateName} name='state' onChange={e => handleStateChange(e.target.value)}>
                            {STATES_LIST.map((state, ind) => (
                                <option key={ind} value={state.value}>
                                    {state.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='col-md-12'>
                        <select className='form-select form-control' name='district' onChange={e => handleDistrictChange(e.target.value)}>
                            {districtList.map((dist, ind) => (
                                <option key={ind} value={dist.value}>
                                    {dist.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='col-md-12'>
                        <select className='form-select form-control' name='city'>
                            {citiesList.map((city, ind) => (
                                <option key={ind} value={city.value}>
                                    {city.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='col-md-12'>
                        <div className='form-check d-flex'>
                            <input className='form-check-input' type='checkbox' />
                            <label className='form-check-label'>
                                <p>I authorise this website to display my name and telephone number, so that the needy could contact me, as and when there is an emergency.</p>
                            </label>
                        </div>
                    </div>
                    <div className='col-md-12 text-center'>
                        <div className='loading'>Loading</div>
                        <div className='error-message' />
                        <div className='sent-message'>Your quote request has been sent successfully. Thank you!</div>
                        <button type='submit'>Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default DonarRegForm;
