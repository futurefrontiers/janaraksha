import React, { useState } from 'react';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import Footer from '../../../components/Footer';
import SideBar from './components/SideBar';
import SideContainer from './components/SideContainer';
import RightContainer from './components/RightContainer';

const BloodDonation = () => {
    const [selectedOption, setSelectedOption] = useState('info');

    const handleSelection = opt => {
        setSelectedOption(opt);
    };

    return (
        <>
            {/*  ======= Header Section ======= */}
            <Header />

            {/*  ======= Main Section =======  */}
            <main id='main'>
                <Breadcrumbs Title='Blood Donation' />

                <section id='service-details' className='service-details'>
                    <div className='container' data-aos='fade-up' data-aos-delay='100'>
                        <div className='row gy-4'>
                            <div className='col-lg-4'>
                                <SideBar selectedOption={selectedOption} handleSelection={handleSelection} />
                                <SideContainer selectedOption={selectedOption} />
                            </div>
                            <div className='col-lg-8'>
                                <RightContainer selectedOption={selectedOption} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/*  ======= Footer Section ======= */}
            <Footer />

            <a href='#' className='scroll-top d-flex align-items-center justify-content-center'>
                <i className='bi bi-arrow-up-short'></i>
            </a>

            {/* <div id='preloader'></div> */}
        </>
    );
};

export default BloodDonation;
