import { useReducer, useState } from 'react';
import { LocationFilters } from '../../../../../components';

import { BLOOD_GROUP_OPTIONS } from '../../../../../constants/bloodGroups';
import { useCollection, useAuth } from '../../../../../hooks';
import toast from 'react-hot-toast';

const DonarFormReducer = (state, newState) => {
    if(newState === 'reset') return {}
    return {
        ...state,
        ...newState
    }
}

const toastSettings = {
    duration: 4000,
    position: 'top-right',
    id: 'donor-reg'
}

const DonarRegForm = () => {
    const { create, loading } = useCollection('donors')
    const { isLoggedIn, createAccount, loading: authLoading } = useAuth()
    const [donor, setDonor] = useReducer(DonarFormReducer, {
        name: '',
        email: '',
        phone: '',
        blood_group: '',
        location: {
            state: '',
            district: '',
            city: ''
        },
        share_bio_consent: false,
        password: '',
        confirmPassword: ''
    });
    
    // TODO: Need to enhance it further.
    const validateDonor = (donor) => {
        console.log('donor: ', donor)
        const reqFields = ['name', 'blood_group', 'phone', 'email', 'password', 'share_bio_consent', 'location.state', 'location.district', 'location.city']

        const isReqFieldsPresent = reqFields.every(path => {
            const keys = path.split('.')
            let current = donor
            const isPresent = keys.every(k => {
                if(current[k] == null || current[k] == undefined || current[k] == "") return false
                current = current[k]
                return true
            })
            return isPresent
        })
        
        if(!isReqFieldsPresent) return false
        else if(!donor.confirmPassword || donor.password != donor.confirmPassword) return false
        return true
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const isValidDonorObj = validateDonor(donor)

        if(!isValidDonorObj) {
            toast.error('Pleae fill the required fields', toastSettings)
            return
        }

        delete donor.confirmPassword
        const { email, password, ...rest } = donor

        // Create account with email and password.
        toast.loading('Creating account...', toastSettings)
        let userId = await createAccount(email, password)

        if(!userId) {
            toast.error('Failed to create account with email: ' + email, toastSettings)
            return
        }

        toast.loading('Saving donor info...', toastSettings)
        // Create profile info for donor.
        try {
            await create({
                ...rest, 
                last_donanted_at: null, 
                can_donate: true 
            }, userId)
            toast.success('Successfully Registered', toastSettings)
            resetForm()
        } catch (e) {
            toast.error('failed to save donor info', toastSettings)
        }
    }

    const resetForm = () => {
        setDonor('reset')
    }

    const handleFormChange = (ev) => {
        const value = ev.target.value
        const name = ev.target.name
        setDonor({[name]: value})
    }

    const handleLocationChange = (location) => {
        setDonor({location})
    }

    return (
        <div className='doner_form'>
            <form className='php-email-form' disabled={loading || authLoading} onSubmit={() => handleSubmit()}>
                <h3>Donar Registration: {isLoggedIn}</h3>
                <p>
                    Please fill the following information to register as voluntary blood donor and become part of Janaraksha vision. Kindly update your date of donation once done, so that your name will be hidden
                    automatically till next 3 Months. Also please update your profile/information if in case you relocate in future.
                </p>
                <div className='row gy-3 mb-3'>
                    <div className='col-md-8'>
                        <input type='text' name='name' value={donor.name} className='form-control' placeholder='Name' onChange={handleFormChange} />
                    </div>
                    <div className='col-md-4'>
                        <select className='form-select form-control' value={donor.blood_group} name='blood_group' onChange={handleFormChange}>
                            {BLOOD_GROUP_OPTIONS.map((grp, ind) => (
                                <option key={ind} value={grp.value}>
                                    {grp.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='col-md-6'>
                        <input type='number' className='form-control' value={donor.phone} name='phone' placeholder='Phone' onChange={handleFormChange} />
                    </div>
                    <div className='col-md-6 '>
                        <input type='email' className='form-control' value={donor.email} name='email' placeholder='Email' onChange={handleFormChange} />
                    </div>

                    <div className='col-md-6'>
                        <input type='password' className='form-control' value={donor.password} name='password' placeholder='Password' onChange={handleFormChange} />
                    </div>
                    <div className='col-md-6'>
                        <input type='password' className='form-control' value={donor.confirmPassword} name='confirmPassword' placeholder='Confirm Password' onChange={handleFormChange} />
                    </div>
                </div>

                <LocationFilters onChange={handleLocationChange}/>

                <div className="row">
                    <div className='col-md-12'>
                        <div className='form-check d-flex'>
                            <input className='form-check-input' name="share_bio_consent" id="share_bio_consent" value={donor.share_bio_consent} type='checkbox' onChange={handleFormChange} />
                            <label className='form-check-label cursor-pointer' htmlFor="share_bio_consent">
                                <p className='ml-4'>I authorise this website to display my name and telephone number, so that the needy could contact me, as and when there is an emergency.</p>
                            </label>
                        </div>
                    </div>
                    <div className='col-md-12 text-center'>
                        <div className='loading'>Loading</div>
                        <div className='error-message' />
                        <div className='sent-message'>Your quote request has been sent successfully. Thank you!</div>
                        <button type='submit' disabled={loading || authLoading} onClick={handleSubmit}>Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default DonarRegForm;
