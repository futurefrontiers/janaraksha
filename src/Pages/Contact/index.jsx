import React from 'react';
import Header from '../../components/Header';
import Breadcrumbs from '../../components/Breadcrumbs';
import Testimonials from '../../components/Testimonials';
import Footer from '../../components/Footer';

const Contact = () => {
    return (
        <>
            {/*  ======= Header Section ======= */}
            <Header />

            {/*  ======= Main Section =======  */}
            <main id='main'>
                <Breadcrumbs Title='Contact' />
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

export default Contact;
