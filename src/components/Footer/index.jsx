import { Link } from 'react-router-dom';

import QR_COde from '../../assets/images/QR-code1.jpg';

const Footer = () => {
    return (
        <footer id='footer' className='footer'>
            <div className='footer-content position-relative d-none d-md-block'>
                <div className='container'>
                    <div className='d-flex flex-wrap'>
                        <div className='flex-fill p-2'>
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
                            </div>
                        </div>
                        {/* End footer info column*/}
                        <div className='flex-fill p-2 footer-links'>
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <Link to='/' href='#'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/about'>About us</Link>
                                </li>
                                <li>
                                    <Link to='/projects'>Gallery</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Contact Us</Link>
                                </li>
                                <li>
                                    <Link to='/terms'>Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link to='/privacyPolicy'>Privacy policy</Link>
                                </li>
                            </ul>
                        </div>
                        {/* End footer links column*/}
                        <div className='flex-fill p-2 footer-links'>
                            <h4>Trust Activities</h4>
                            <ul>
                                <li>
                                    <Link to='/donations/blood'>Blood Donation</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Organ Donation</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Food Donation</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Plantation</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Books & Education</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Job Mela</Link>
                                </li>
                            </ul>
                        </div>
                        {/* End footer links column*/}
                        <div className='flex-fill p-2 footer-links'>
                            <h4>Support Us</h4>
                            <div>
                                <img src={QR_COde} alt='Support' width='150px' />
                                <p className='mt-2' style={{ fontSize: '12px', marginLeft: '20px' }}>
                                    Donate through UPI
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-content position-relative d-md-none'>
                <div className='container'>
                    <div className='d-flex flex-wrap'>
                        {/* End footer info column*/}
                        <div className='flex-fill p-2 footer-links'>
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <Link to='/' href='#'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/about'>About us</Link>
                                </li>
                                <li>
                                    <Link to='/projects'>Gallery</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Contact Us</Link>
                                </li>
                                <li>
                                    <Link to='/terms'>Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link to='/privacyPolicy'>Privacy policy</Link>
                                </li>
                            </ul>
                        </div>
                        {/* End footer links column*/}
                        <div className='flex-fill p-2 footer-links'>
                            <h4>Trust Activities</h4>
                            <ul>
                                <li>
                                    <Link to='/donations/blood'>Blood Donation</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Organ Donation</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Food Donation</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Plantation</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Books & Education</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Job Mela</Link>
                                </li>
                            </ul>
                        </div>
                        {/* End footer links column*/}
                        <div className=' d-flex justify-content-center flex-fill p-2  footer-links'>
                            <div>
                                <img src={QR_COde} alt='Support' width='150px' />
                                <p className='mt-2' style={{ fontSize: '12px', marginLeft: '20px' }}>
                                    Donate through UPI
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-legal text-center position-relative'>
                <div className='mobile_footer footer-info d-md-none'>
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
                </div>
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
