import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Intro from './components/Intro';
import WhatWeDo from './components/WhatWeDo';
import Testimonials from '../../components/Testimonials';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <>
            {/*  ======= Header Section ======= */}
            <Header />

            {/*  ======= Hero Section ======= */}
            <Carousel />

            {/*  ======= Main Section =======  */}
            <main id='main'>
                <Intro />
                <WhatWeDo />
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

export default Home;
