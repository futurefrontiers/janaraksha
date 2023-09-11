import React from 'react';

import about_img from '../../../../assets/images/about.jpg';

const Intro = () => {
    return (
        <section id='about' className='about'>
            <div className='container' data-aos='fade-up'>
                <div className='row position-relative'>
                    <div className='col-lg-7 about-img' style={{ backgroundImage: `url(${about_img})` }} />
                    <div className='col-lg-7'>
                        <h2>JANA RAKSAHA SWACHANDA SEVA SAMSTHA</h2>
                        <div className='our-story'>
                            <h4>Est 2013</h4>
                            <h3>Our Story</h3>
                            <p data-aos='fade-up'>
                                In times of emergencies such as accidents on the road, fires, and other critical situations, individuals who require immediate medical attention are often rushed to the hospital without
                                having access to blood in a timely manner, potentially putting their lives at risk. With the aim of addressing this issue, a program called "Dynamic Blood Donors," sponsored by the
                                organization "Change Lies Within You Voluntary Service," was initiated. This organization has successfully facilitated blood donations for approximately 1500 individuals.
                            </p>
                            <p data-aos='fade-up'>
                                This organization primarily focuses on connecting blood donors with recipients, ensuring that blood is available when needed. However, in addition to blood donation, they also provide
                                various other essential services. During challenging times like the COVID-19 pandemic, they have extended their support to the underprivileged by providing food, daily necessities, and
                                other essential items.
                            </p>
                            <p data-aos='fade-up'>
                                Due to various reasons, Change Lies Within You Voluntary Service, in collaboration with the Happy Meal Foundation, merged into the "Jana Raksha Swachanda Seva Samstha" organization.
                                Through this merger, Jana Raksha Swachanda Seva Samstha has expanded its service programs to include organ donation, employment opportunities for the unemployed, and mega job fairs, among
                                many others. These initiatives are carried out with the encouragement and assistance of the organization's members, contributing to the welfare of society.
                            </p>
                            <p />
                            {/* <ul>
                                <li>
                                    <i className='bi bi-check-circle' /> <span>Change lies within you vountary organisation</span>
                                </li>
                                <li>
                                    <i className='bi bi-check-circle' /> <span>Happy meal foundation</span>
                                </li>
                            </ul> */}
                            {/* <div className='watch-video d-flex align-items-center position-relative'>
                                <i className='bi bi-play-circle' />
                                <a href='https://www.youtube.com/watch?v=LXb3EKWsInQ' className='glightbox stretched-link'>
                                    Watch Video
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <section id='get-started' className='get-started'>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div
                            className='col-lg-5 img-bg'
                            style={{
                                backgroundImage: `url(${about_img})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                            }}
                            data-aos='zoom-in'
                            data-aos-delay='100'></div>

                        <div className='col-lg-6 d-flex align-items-center' data-aos='fade-up'>
                            <div className='content'>
                                <h3>HAPPY MEAL FOUNDATION</h3>
                                <p data-aos='fade-up'>
                                    During challenging times like the COVID-19 pandemic, the organization "Happy Meal" demonstrated a noble commitment to alleviate the hunger of underprivileged individuals who were
                                    unable to access food. Through this organization's dedicated efforts, they provided food to more than 2500 needy individuals, ensuring both sustenance and nutritious meals for the less
                                    fortunate. It's worth noting that the organization "Happy Meal" is registered under the Andhra Pradesh Registration Act of 2001, with registration number 619/2021. This registration
                                    underscores their official recognition and authorization to carry out their charitable activities, including food distribution to those in need.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='get-started' className='get-started section-bg-custom'>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div className='col-lg-6 d-flex align-items-center' data-aos='fade-up'>
                            <div className='content'>
                                <h3>CHANGE LIES WITHIN YOU</h3>
                                <p data-aos='fade-up'>
                                    Inspired by a profound commitment that transcends national boundaries and governments, the belief that it is not just a country but humanity itself that can change, young people embark
                                    on a journey with unwavering determination. With the aim of motivating individuals, they take on the responsibility to transform not just the nation but the world as a whole. With a
                                    resolute spirit, they engage in various activities, including providing food, clothing, and clean water to the underprivileged, alongside organizing blood donation programs. Through
                                    these efforts, they have successfully facilitated blood donations for approximately 1500 individuals and provided food and daily necessities to over 2000 people, while also creating
                                    employment opportunities for unemployed youth. It's worth noting that this organization is registered under the Andhra Pradesh Society Registration Act of 2001, with registration
                                    number 220/2020, highlighting its official recognition and authorization to carry out its commendable activities for the welfare of society.
                                </p>
                            </div>
                        </div>
                        <div
                            className='col-lg-5 img-bg'
                            style={{
                                backgroundImage: `url(${about_img})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                            }}
                            data-aos='zoom-in'
                            data-aos-delay='100'></div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Intro;
