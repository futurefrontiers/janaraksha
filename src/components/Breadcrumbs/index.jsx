import React from 'react';

import { Link } from 'react-router-dom';

import breadcrumbs_img from '../../assets/images/breadcrumbs-bg.jpg';

const Breadcrumbs = ({ Title }) => {
    return (
        <div className='breadcrumbs d-flex align-items-center' style={{ backgroundImage: `url(${breadcrumbs_img})` }}>
            <div className='container position-relative d-flex flex-column align-items-center' data-aos='fade'>
                <h2>{Title}</h2>
                <ol>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>{Title}</li>
                </ol>
            </div>
        </div>
    );
};

export default Breadcrumbs;
