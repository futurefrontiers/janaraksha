import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Header = () => {
    return (
        <header id='header' className='header d-flex align-items-center'>
            <div className='container-fluid container-xl d-flex align-items-center justify-content-between'>
                <Link to='/' className='logo d-flex align-items-center'>
                    <h1>
                        JANA RAKSHA<span> NGO</span>
                    </h1>
                </Link>
                <i className='mobile-nav-toggle mobile-nav-show bi bi-list' />
                <i className='mobile-nav-toggle mobile-nav-hide d-none bi bi-x' />
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
