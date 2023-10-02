import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Header = () => {
    const [isMobileNavActive, setMobileNavActive] = useState(false);

    const mobileNavToggle = () => {
        setMobileNavActive((val) => !val);
    };

    return (
        <header id='header' className={`header d-flex align-items-center ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
            <div className='container-fluid container-xl d-flex align-items-center justify-content-between'>
                <Link to='/' className='logo d-flex align-items-center'>
                    <h1>
                        JANA RAKSHA<span> NGO</span>
                    </h1>
                </Link>
                <i className={`mobile-nav-toggle mobile-nav-show bi bi-list ${isMobileNavActive ? 'd-none' : ''}`} onClick={mobileNavToggle} />
                <i className={`mobile-nav-toggle mobile-nav-hide bi bi-x ${isMobileNavActive ? '' : 'd-none'}`} onClick={mobileNavToggle} />
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
