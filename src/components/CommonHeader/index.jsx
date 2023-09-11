import React from 'react';
import Navbar from '../Navbar';

const CommonHeader = () => {
    return (
        <header id='header' className='header d-flex align-items-center'>
            <div className='container-fluid container-xl d-flex align-items-center justify-content-between'>
                <a href='index.html' className='logo d-flex align-items-center'>
                    {/* Uncomment the line below if you also wish to use an image logo */}
                    {/* <img src="assets/img/logo.png" alt=""> */}
                    <h1>
                        JANA RAKSHA<span> NGO</span>
                    </h1>
                </a>
                <i className='mobile-nav-toggle mobile-nav-show bi bi-list' />
                <i className='mobile-nav-toggle mobile-nav-hide d-none bi bi-x' />
                <Navbar />
            </div>
        </header>
    );
};

export default CommonHeader;
