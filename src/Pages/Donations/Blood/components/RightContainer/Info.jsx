import React from 'react';

import intro_image from '../../../../../assets/images/services.jpg';

const Info = () => {
    return (
        <>
            <section id='alt-services' className='alt-services'>
                <div className='container' data-aos='fade-up'>
                    <div className='row justify-content-around gy-4'>
                        <div className=' d-flex flex-column justify-content-center'>
                            <h3>Donate blood, save a life, and be the heartbeat of compassion</h3>
                            <p>
                                Blood donation is a voluntary process where individuals willingly give a portion of their blood to be used for various medical purposes, typically to save the lives of others. This donated
                                blood can be separated into its different components, such as red blood cells, plasma, and platelets, to treat a wide range of medical conditions and emergencies. Here are some key points
                                about blood donation:
                            </p>
                            <div className='icon-box d-flex position-relative' data-aos='fade-up' data-aos-delay={100}>
                                <i className='bi bi-easel flex-shrink-0' />
                                <div>
                                    <h4>
                                        <p className='stretched-link'>Purpose</p>
                                    </h4>
                                    <p>
                                        Blood donation is crucial for maintaining an adequate supply of blood and blood products for medical treatments, surgeries, trauma cases, and patients with certain medical
                                        conditions like anemia, cancer, and bleeding disorders.
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Box */}
                            <div className='icon-box d-flex position-relative' data-aos='fade-up' data-aos-delay={200}>
                                <i className='bi bi-patch-check flex-shrink-0' />
                                <div>
                                    <h4>
                                        <p className='stretched-link'>Donation Process</p>
                                    </h4>
                                    <ol>
                                        <li>
                                            <span>Registration and a brief medical history questionnaire.</span>
                                        </li>
                                        <li>
                                            <span>Physical examination to check vital signs (blood pressure, pulse, temperature).</span>
                                        </li>
                                        <li>
                                            <span>The actual blood donation, which usually takes about 10-15 minutes.</span>
                                        </li>
                                        <li>
                                            <span>Refreshments and a short rest period after donation to ensure the donor feels well before leaving..</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            {/* End Icon Box */}
                            <div className='icon-box d-flex position-relative' data-aos='fade-up' data-aos-delay={300}>
                                <i className='fa-regular fa-clock flex-shrink-0' />
                                <div>
                                    <h4>
                                        <p className='stretched-link'>Frequency</p>
                                    </h4>
                                    <p>In most countries, whole blood donation can be done every 8-12 weeks, while platelet or plasma donation may be more frequent</p>
                                </div>
                            </div>
                            {/* End Icon Box */}
                            <div className='icon-box d-flex position-relative' data-aos='fade-up' data-aos-delay={400}>
                                <i className='bi bi-brightness-high flex-shrink-0' />
                                <div>
                                    <h4>
                                        <p className='stretched-link'>Benefits of Donating Blood</p>
                                    </h4>
                                    <ol>
                                        <li>
                                            <span>Saving Lives: Donated blood is vital for emergency situations, surgeries, and treating various medical conditions.</span>
                                        </li>
                                        <li>
                                            <span>Health Benefits: Regular blood donation may have health benefits for the donor, such as reducing the risk of certain diseases and promoting overall well-being.</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            {/* End Icon Box */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Info;
