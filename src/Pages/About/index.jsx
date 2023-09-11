import React from 'react';
import CommonHeaders from '../../components/CommonHeader';
import Breadcrumbs from '../../components/Breadcrumbs';
import Intro from './components/Intro';
import Counter from './components/Counter';
import Testimonials from '../../components/Testimonials';
import Footer from '../../components/Footer';

const AboutUs = () => {
    return (
        <>
            {/*  ======= Header Section ======= */}
            <CommonHeaders />

            {/*  ======= Main Section =======  */}
            <main id='main'>
                <Breadcrumbs Title='About' />
                <Intro />
                <Counter />
                <Testimonials />
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

export default AboutUs;
