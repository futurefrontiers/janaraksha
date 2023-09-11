import React from 'react';

import QR_COde from '../../assets/images/QR-code1.jpg';

const Footer = () => {
    return (
        <footer id='footer' className='footer'>
            <div className='footer-content position-relative'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6'>
                            <div className='footer-info'>
                                <h3>
                                    JANA RAKSHA <span> NGO</span>
                                </h3>
                                <p>
                                    10-74, Velangi, <br /> Karapa Mandal, <br /> Kakinada , East Godavari, <br />
                                    533260, Andhra pradesh, India
                                    <br />
                                    <br />
                                    <strong>Phone:</strong> +91 96764 63605
                                    <br />
                                    <strong>Email:</strong> janarakshango7@gmail.com
                                    <br />
                                </p>
                                <div className='social-links d-flex mt-3'>
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

                                <div className='mt-5'>
                                    <img src={QR_COde} alt='Support' width='150px' />
                                    <p className='mt-2' style={{ fontSize: '12px', marginLeft: '20px' }}>
                                        Donate through UPI
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End footer info column*/}
                        <div className='col-lg-2 col-md-3 footer-links'>
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <a href='#'>Home</a>
                                </li>
                                <li>
                                    <a href='#'>About us</a>
                                </li>
                                <li>
                                    <a href='#'>Services</a>
                                </li>
                                <li>
                                    <a href='#'>Terms of service</a>
                                </li>
                                <li>
                                    <a href='#'>Privacy policy</a>
                                </li>
                            </ul>
                        </div>
                        {/* End footer links column*/}
                        <div className='col-lg-2 col-md-3 footer-links'>
                            <h4>Our Services</h4>
                            <ul>
                                <li>
                                    <a href='#'>Organ Donation</a>
                                </li>
                                <li>
                                    <a href='#'>Blood Donation</a>
                                </li>
                                <li>
                                    <a href='#'>Emergency support</a>
                                </li>
                            </ul>
                        </div>
                        {/* End footer links column*/}
                        <div className='col-lg-4 col-md-3 footer-links'>
                            <h4>Get In Touch</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-legal text-center position-relative'>
                <div className='container'>
                    <div className='copyright'>
                        © Copyright{' '}
                        <strong>
                            <span>JANARAKSHA</span>
                        </strong>
                        . All Rights Reserved
                    </div>
                    <div className='credits'>
                        Designed by <a href='##'>FutureFrontiers</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
