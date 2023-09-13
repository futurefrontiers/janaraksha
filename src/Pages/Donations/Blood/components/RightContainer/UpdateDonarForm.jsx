import React from 'react';

const UpdateDonarForm = () => {
    return (
        <div className='doner_form'>
            <form action='forms/quote.php' method='post' className='php-email-form'>
                <h3>Last Donated Details</h3>
                <p>Kindly update your date of donation once done, so that your name will be hidden automatically till next 3 Months.</p>
                <div className='row gy-3'>
                    <div className='col-md-12'>
                        <input type='date' name='date' className='form-control' placeholder='Donated Date' required='' />
                    </div>
                    <div className='col-md-12'>
                        <input type='text' name='p_name' className='form-control' placeholder='Patient Name' required='' />
                    </div>
                    <div className='col-md-12'>
                        <input type='text' name='location' className='form-control' placeholder='Location' required='' />
                    </div>
                    <div className='col-md-12'>
                        <input type='text' name='hospital' className='form-control' placeholder='Hospital Name' required='' />
                    </div>
                    <div className='col-md-12 text-center'>
                        <div className='loading'>Loading</div>
                        <div className='error-message' />
                        <div className='sent-message'>Your quote request has been sent successfully. Thank you!</div>
                        <button type='submit'>Update</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateDonarForm;
