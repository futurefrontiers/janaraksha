import React from 'react';

import breadcrumbs_img from '../../assets/images/breadcrumbs-bg.jpg';

const Breadcrumbs = ({ Title, link }) => {
    return (
        <div className='breadcrumbs d-flex align-items-center' style={{ backgroundImage: `url(${breadcrumbs_img})` }}>
            <div className='container position-relative d-flex flex-column align-items-center' data-aos='fade'>
                <h2>{Title}</h2>
                <ol>
                    <li>
                        <a href='index.html'>Home</a>
                    </li>
                    <li>{Title}</li>
                </ol>
            </div>
        </div>
    );
};

export default Breadcrumbs;
