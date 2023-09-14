import React from 'react';
import Header from '../../components/Header';
import Breadcrumbs from '../../components/Breadcrumbs';
import Footer from '../../components/Footer';

const Comming = () => {
    return (
        <>
            {/*  ======= Header Section ======= */}
            <Header />

            {/*  ======= Main Section =======  */}
            <main id='main'>
                <Breadcrumbs Title='Comming Soon' />
                <section className='sample-page'>
                    <div className='container'>
                        <p>Thank you for being a part of our mission to create a brighter future for all. Together, we can make a lasting difference. !</p>
                        <p>Follow us on social media to stay connected with our journey: </p>
                        <div className='social-links-comming d-flex mt-3'>
                            <a href='#' className='d-flex align-items-center justify-content-center'>
                                <i className='bi bi-twitter' />
                            </a>
                            <a href='#' className='d-flex align-items-center justify-content-center'>
                                <i className='bi bi-facebook' />
                            </a>
                            <a href='#' className='d-flex align-items-center justify-content-center'>
                                <i className='bi bi-instagram' />
                            </a>
                            <a href='#' className='d-flex align-items-center justify-content-center'>
                                <i className='bi bi-linkedin' />
                            </a>
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

export default Comming;
