import React, { useReducer } from 'react';

import { STATES_LIST, DISTRICTS, CITIES } from '../../../../../constants/addressOptions';
import { BLOOD_GROUP_OPTIONS } from '../../../../../constants/bloodGroups';

const initialState = {
    districtList: [{ label: 'Select District', value: '' }],
    citiesList: [{ label: 'City', value: '' }],
    stateName: '',
    district: '',
    city: '',
};

const FindDonarReducer = (state, newState) => ({
    ...state,
    ...newState,
});

const FindDonar = () => {
    const [state, setState] = useReducer(FindDonarReducer, initialState);
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
        <>
            <div className='doner_form'>
                <form action='forms/quote.php' method='post' className='php-email-form php-email-form-filter'>
                    <h3>Find Donar</h3>
                    <div className='row gy-3'>
                        <div className='col-md-3'>
                            <select className='form-select form-control' name='bllod_group'>
                                {BLOOD_GROUP_OPTIONS.map((group, ind) => (
                                    <option key={ind} value={group.value}>
                                        {group.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='col-md-3'>
                            <select className='form-select form-control' value={stateName} name='state' onChange={e => handleStateChange(e.target.value)}>
                                {STATES_LIST.map((state, ind) => (
                                    <option key={ind} value={state.value}>
                                        {state.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='col-md-3'>
                            <select className='form-select form-control' name='district' onChange={e => handleDistrictChange(e.target.value)}>
                                {districtList.map((dist, ind) => (
                                    <option key={ind} value={dist.value}>
                                        {dist.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='col-md-2'>
                            <select className='form-select form-control' name='city'>
                                {citiesList.map((city, ind) => (
                                    <option key={ind} value={city.value}>
                                        {city.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='col-md-1'>
                            <button type='submit'>Search</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='container ml-5'>
                <table class='table table-hover'>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Mobile</th>
                            <th scope='col'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default FindDonar;
