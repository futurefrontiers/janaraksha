/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';

import AOS from 'aos';

import Carousel from '../Home/components/Carousel';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Layout = ({ children, isHomePage = false }) => {
    const [pageLoaded, setPageLoaded] = useState(true);
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPageLoaded(false);
        }, 1000);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        function aos_init() {
            AOS.init({
                duration: 800,
                easing: 'slide',
                once: true,
                mirror: false,
            });
        }

        aos_init();
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {pageLoaded ? (
                <div id='preloader'></div>
            ) : (
                <>
                    {/*  ======= Header Section ======= */}
                    <Header />

                    {/*  ======= Hero Section ======= */}
                    {isHomePage && <Carousel />}

                    {/*  ======= Main Section =======  */}
                    <main id='main'>{children}</main>

                    {/*  ======= Footer Section ======= */}
                    <Footer />

                    <a href='#' className={`scroll-top d-flex align-items-center justify-content-center ${showScroll ? 'active' : ''}`} onClick={scrollToTop}>
                        <i className='bi bi-arrow-up-short'></i>
                    </a>
                </>
            )}
        </>
    );
};

export default Layout;
