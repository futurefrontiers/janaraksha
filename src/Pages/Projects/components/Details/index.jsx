import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../../../components/Header';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import Testimonials from '../../../../components/Testimonials';
import Footer from '../../../../components/Footer';

import { PORTFOLIO_DATA } from '../../../../constants/portfolioConstants';

const Details = () => {
    const { id } = useParams();
    const project = PORTFOLIO_DATA.find(p => p.id === +id);
    const { category, collaboration, date, location } = project?.project_info;

    return (
        <>
            <Header />
            <main id='main'>
                <Breadcrumbs Title={project.heading} />
                <section id='project-details' className='project-details'>
                    <div className='container' data-aos='fade-up' data-aos-delay={100}>
                        <div className='position-relative h-100'>
                            <div className='portfolio-details-slider '>
                                <img src={project.imageSrc} alt={project.heading} />
                            </div>
                        </div>
                        <div className='row justify-content-between gy-4 mt-4'>
                            <div className='col-lg-8' data-aos='fade-up'>
                                <div className='portfolio-description'>
                                    <h2>We are planning to work together</h2>
                                    <h3>{`Janaraksha ${!!collaboration ? `- ${collaboration}` : ''}`}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                            <div className='col-lg-3' data-aos='fade-up'>
                                <div className='portfolio-info'>
                                    <h3>Project information</h3>
                                    <ul>
                                        {!!category ? (
                                            <li>
                                                <strong>Category</strong> <span>{category}</span>
                                            </li>
                                        ) : null}

                                        {!!collaboration ? (
                                            <li>
                                                <strong>Colabreting With</strong> <span>{collaboration}</span>
                                            </li>
                                        ) : null}
                                        {!!date ? (
                                            <li>
                                                <strong>Project Date</strong> <span>{date}</span>
                                            </li>
                                        ) : null}
                                        {!!location ? (
                                            <li>
                                                <strong>Location</strong> <span>{location}</span>
                                            </li>
                                        ) : null}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Testimonials isProject organizers={project?.organizers || []} />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Details;
