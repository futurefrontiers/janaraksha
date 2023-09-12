import React from 'react';

import { Link } from 'react-router-dom';

const WhatWeDo = () => {
    return (
        <section id='services' className='services section-bg'>
            <div className='container' data-aos='fade-up'>
                <div className='section-header'>
                    <h2>What We Do</h2>
                    <p>Give the gift of life, be a donor today.</p>
                </div>
                <div className='row gy-4'>
                    <div className='col-lg-4 col-md-6' data-aos='fade-up' data-aos-delay={100}>
                        <div className='service-item  position-relative'>
                            <div className='icon'>
                                <i className='fa-solid fa-droplet' />
                            </div>
                            <h3>Blood Donation</h3>
                            <p>In your blood, hope and strength pave the way. With every drop you share, a hero you become, Saving lives, shining bright like the morning sun..</p>
                            <Link to='/donations/blood' className='readmore stretched-link'>
                                Donate <i className='bi bi-arrow-right' />
                            </Link>
                        </div>
                    </div>
                    {/* End Service Item */}
                    <div className='col-lg-4 col-md-6' data-aos='fade-up' data-aos-delay={200}>
                        <div className='service-item position-relative'>
                            <div className='icon'>
                                <i className='fa-solid fa-lungs' />
                            </div>
                            <h3>Organ Donation</h3>
                            <p>Organ donation, a chance to rescue. When you're gone, your legacy will live on, A selfless act of love, when you're gone..</p>
                            <Link to='/donations/organ' className='readmore stretched-link'>
                                Donate <i className='bi bi-arrow-right' />
                            </Link>
                        </div>
                    </div>
                    {/* End Service Item */}
                    <div className='col-lg-4 col-md-6' data-aos='fade-up' data-aos-delay={300}>
                        <div className='service-item position-relative'>
                            <div className='icon'>
                                <i className='fa-solid fa-bowl-food' />
                            </div>
                            <h3>Food Donation</h3>
                            <p>Food donation, where compassion is found. Nourishing those in need, making hearts light, A simple act of giving, brings hope to the night..</p>
                            <Link to='/donations/food' className='readmore stretched-link'>
                                Donate <i className='bi bi-arrow-right' />
                            </Link>
                        </div>
                    </div>
                    {/* End Service Item */}
                    <div className='col-lg-4 col-md-6' data-aos='fade-up' data-aos-delay={400}>
                        <div className='service-item position-relative'>
                            <div className='icon'>
                                <i className='fa-solid fa-sun-plant-wilt' />
                            </div>
                            <h3>Plantation</h3>
                            <p>Planting trees with care, nature's gift we sow, Greening the Earth, watch our future grow. Cleaner air, shade, and homes for all, Plantation's the answer, to nature's call..</p>
                            <Link to='/donations/financial' className='readmore stretched-link'>
                                Donate <i className='bi bi-arrow-right' />
                            </Link>
                        </div>
                    </div>
                    {/* End Service Item */}
                    <div className='col-lg-4 col-md-6' data-aos='fade-up' data-aos-delay={500}>
                        <div className='service-item position-relative'>
                            <div className='icon'>
                                <i className='fa-solid fa-book-open-reader' />
                            </div>
                            <h3>Books And Education</h3>
                            <p>In the pages of books, knowledge takes flight, Education's beacon, shining so bright. Empowering minds, opening doors anew, Books and education, the world they renew..</p>
                            <Link to='/donations/financial' className='readmore stretched-link'>
                                Donate <i className='bi bi-arrow-right' />
                            </Link>
                        </div>
                    </div>
                    {/* End Service Item */}
                    <div className='col-lg-4 col-md-6' data-aos='fade-up' data-aos-delay={600}>
                        <div className='service-item position-relative'>
                            <div className='icon'>
                                <i className='fa-solid fa-users' />
                            </div>
                            <h3>Job Mela</h3>
                            <p>Jobs provide purpose, a means to sustain, Empower individuals, alleviate financial strain. Economic growth, a nation's heartbeat and gain, Employment opportunities, a thriving domain..</p>
                            <Link to='/donations/financial' className='readmore stretched-link'>
                                Donate <i className='bi bi-arrow-right' />
                            </Link>
                        </div>
                    </div>
                    {/* End Service Item */}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
