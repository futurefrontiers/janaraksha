import React from 'react';

import intro_img from '../../../../assets/img/intro_logo.png';

const Intro = () => {
    return (
        <section id='get-started' className='get-started section-bg'>
            <div className='container'>
                <div className='row justify-content-between gy-4'>
                    <div className='col-lg-6 d-flex align-items-center' data-aos='fade-up'>
                        <div className='content'>
                            <h3>JANA RAKSAHA SWACHANDA SEVA SAMSTHA</h3>
                            <p data-aos='fade-up'>
                                The organization "Jana Raksha Swachhanda Seva Sanstha" has been registered with number 233/2023 under the Andhra Pradesh Society Registration Act of 2001. With the inspirational words, "To
                                serve is not to have money, but a good heart," Mother Theresa emphasized the importance of having a kind heart to help others. With a mission to provide education, healthcare, and
                                employment opportunities, the organization began with a noble goal and a vision for a better future.
                            </p>
                            <a data-aos='fade-up' data-aos-delay='200' href='#get-started' className='btn-get-started'>
                                About Us
                            </a>
                        </div>
                    </div>

                    <div
                        className='col-lg-5 img-bg'
                        style={{
                            backgroundImage: `url(${intro_img})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                        }}
                        data-aos='zoom-in'
                        data-aos-delay='100'></div>
                    {/* End Quote Form */}
                </div>
            </div>
        </section>
    );
};

export default Intro;
