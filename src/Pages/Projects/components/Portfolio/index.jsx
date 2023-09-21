import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';

import { PORTFOLIO_DATA } from '../../../../constants/portfolioConstants';

const Portfolio = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const glightbox = GLightbox({
            selector: '.glightbox',
        });

        const portfolionIsotope = document.querySelector('.portfolio-isotope');

        if (portfolionIsotope) {
            const portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') || '*';
            const portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') || 'masonry';
            const portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') || 'original-order';

            window.addEventListener('load', () => {
                const portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
                    itemSelector: '.portfolio-item',
                    layoutMode: portfolioLayout,
                    filter: portfolioFilter,
                    sortBy: portfolioSort,
                });

                const menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
                menuFilters.forEach(el => {
                    el.addEventListener(
                        'click',
                        function () {
                            document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
                            this.classList.add('filter-active');
                            portfolioIsotope.arrange({
                                filter: this.getAttribute('data-filter'),
                            });
                            if (typeof aos_init === 'function') {
                                aos_init();
                            }
                        },
                        false
                    );
                });
            });
        }
    }, []);

    return (
        <section id='projects' className='projects'>
            <div className='container' data-aos='fade-up'>
                <div className='portfolio-isotope' data-portfolio-filter='*' data-portfolio-layout='masonry' data-portfolio-sort='original-order'>
                    {/* <ul className='portfolio-flters' data-aos='fade-up' data-aos-delay={100}>
                        <li data-filter='*' className='filter-active'>
                            All
                        </li>
                        <li data-filter='.organ-donation'>Organ Donation</li>
                        <li data-filter='.blood-donation'>Blood Donation</li>
                        <li data-filter='.food-donation'>Food Donation</li>
                        <li data-filter='.job-mela'>Job mela's</li>
                    </ul> */}
                    {/* End Projects Filters */}
                    <div className='row gy-4 portfolio-container' data-aos='fade-up' data-aos-delay={200}>
                        {PORTFOLIO_DATA.map(p => (
                            <div key={p.id} className={`col-lg-4 col-md-6 portfolio-item ${p.category}`}>
                                <div className='portfolio-content h-100'>
                                    <img src={p.imageSrc} className='img-fluid' alt='' />
                                    <div className='portfolio-info'>
                                        {/* <h4>{p.heading}</h4>
                                        <p>{p.desc}</p>
                                        <a href={p.imageSrc} title={p.heading} data-gallery={p.gallery} className='glightbox preview-link'>
                                            <i className='bi bi-zoom-in' />
                                        </a>
                                        <a onClick={() => navigate(`/projects/${p.id}`)} title='More Details' className='details-link'>
                                            <i className='bi bi-link-45deg' />
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* End Projects Container */}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
