import React from 'react';

import hero_carousel_1 from '../../../../assets/images/hero-carousel/hero-carousel-1.jpg';
import hero_carousel_2 from '../../../../assets/images/hero-carousel/hero-carousel-2.jpg';
import hero_carousel_3 from '../../../../assets/images/hero-carousel/hero-carousel-3.jpg';
import hero_carousel_4 from '../../../../assets/images/hero-carousel/hero-carousel-4.jpg';
import hero_carousel_5 from '../../../../assets/images/hero-carousel/hero-carousel-5.jpg';

const Carousel = () => {
    return (
        <section id='hero' className='hero'>
            <div className='info d-flex align-items-center'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6 text-center'>
                            <a data-aos='fade-up' data-aos-delay={200} href='#get-started' className='btn-get-started'>
                                Become Volunteer
                            </a>
                            <a data-aos='fade-up' data-aos-delay={200} href='#get-started' className='btn-get-started'>
                                Support Our Work
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id='hero-carousel' className='carousel slide' data-bs-ride='carousel' data-bs-interval={5000}>
                <div
                    className='carousel-item active'
                    style={{
                        backgroundImage: `url(${hero_carousel_1})`,
                    }}
                />
                <div
                    className='carousel-item'
                    style={{
                        backgroundImage: `url(${hero_carousel_2})`,
                    }}
                />
                <div
                    className='carousel-item'
                    style={{
                        backgroundImage: `url(${hero_carousel_3})`,
                    }}
                />
                <div
                    className='carousel-item'
                    style={{
                        backgroundImage: `url(${hero_carousel_4})`,
                    }}
                />
                <div
                    className='carousel-item'
                    style={{
                        backgroundImage: `url(${hero_carousel_5})`,
                    }}
                />
                <a className='carousel-control-prev' href='#hero-carousel' role='button' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon bi bi-chevron-left' aria-hidden='true' />
                </a>
                <a className='carousel-control-next' href='#hero-carousel' role='button' data-bs-slide='next'>
                    <span className='carousel-control-next-icon bi bi-chevron-right' aria-hidden='true' />
                </a>
            </div>
        </section>
    );
};

export default Carousel;
