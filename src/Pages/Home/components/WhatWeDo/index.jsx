import { Link } from 'react-router-dom';

import { SERVICES_INFO } from '../../../../constants/services';

const WhatWeDo = () => {
    return (
        <section id='services' className='services section-bg'>
            <div className='container' data-aos='fade-up'>
                <div className='section-header'>
                    <h2>What We Do</h2>
                    <p>Give the gift of life, be a donor today.</p>
                </div>
                <div className='row gy-4'>
                    {SERVICES_INFO.map((service, ind) => (
                        <div key={ind} className='col-lg-4 col-md-6' data-aos='fade-up' data-aos-delay={100}>
                            <div className='service-item  position-relative'>
                                <div className='icon'>
                                    <i className={service.icon} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <Link to={service.link} className='readmore stretched-link'>
                                    Donate <i className='bi bi-arrow-right' />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
