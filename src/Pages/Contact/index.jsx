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
                {/* ======= Contact Section ======= */}
                <section id='contact' className='contact'>
                    <div className='container' data-aos='fade-up' data-aos-delay={100}>
                        <div className='row gy-4'>
                            <div className='col-lg-6'>
                                <div className='info-item  d-flex flex-column justify-content-center align-items-center'>
                                    <i className='bi bi-map' />
                                    <h3>Our Address</h3>
                                    <p>
                                        10-74, Velangi, <br /> Karapa Mandal, <br /> Kakinada , East Godavari, <br />
                                        533260, Andhra pradesh, India
                                        <br />
                                        <br />
                                    </p>
                                </div>
                            </div>
                            {/* End Info Item */}
                            <div className='col-lg-3 col-md-6'>
                                <div className='info-item d-flex flex-column justify-content-center align-items-center'>
                                    <i className='bi bi-envelope' />
                                    <h3>Email Us</h3>
                                    <p>janarakshango7@gmail.com</p>
                                </div>
                            </div>
                            {/* End Info Item */}
                            <div className='col-lg-3 col-md-6'>
                                <div className='info-item  d-flex flex-column justify-content-center align-items-center'>
                                    <i className='bi bi-telephone' />
                                    <h3>Call Us</h3>
                                    <p>+91 96764 63605</p>
                                </div>
                            </div>
                            {/* End Info Item */}
                        </div>
                        <div className='row gy-4 mt-1'>
                            <div className='col-lg-6 '>
                                <iframe
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951683.416825819!2d78.93212452452957!3d17.175966192130602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a378f8d677d73db%3A0xa1248d27c0d42949!2svenkataramana%20enterprises!5e0!3m2!1sen!2sin!4v1694702257309!5m2!1sen!2sin'
                                    frameBorder={0}
                                    style={{ border: 0, width: '100%', height: 384 }}
                                    allowFullScreen=''
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'></iframe>
                            </div>
                            {/* End Google Maps */}
                            <div className='col-lg-6'>
                                <form action='forms/contact.php' method='post' role='form' className='php-email-form'>
                                    <div className='row gy-4'>
                                        <div className='col-lg-6 form-group'>
                                            <input type='text' name='name' className='form-control' id='name' placeholder='Your Name' required='' />
                                        </div>
                                        <div className='col-lg-6 form-group'>
                                            <input type='email' className='form-control' name='email' id='email' placeholder='Your Email' required='' />
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <input type='text' className='form-control' name='subject' id='subject' placeholder='Subject' required='' />
                                    </div>
                                    <div className='form-group'>
                                        <textarea className='form-control' name='message' rows={5} placeholder='Message' required='' defaultValue={''} />
                                    </div>
                                    <div className='my-3'>
                                        <div className='loading'>Loading</div>
                                        <div className='error-message' />
                                        <div className='sent-message'>Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className='text-center'>
                                        <button type='submit'>Send Message</button>
                                    </div>
                                </form>
                            </div>
                            {/* End Contact Form */}
                        </div>
                    </div>
                </section>
                {/* End Contact Section */}
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
