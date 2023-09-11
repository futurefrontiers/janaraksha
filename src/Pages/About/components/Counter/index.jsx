import React from 'react';

import '@srexi/purecounterjs/dist/purecounter_vanilla';

const Counter = () => {
    return (
        <section id='stats-counter' className='stats-counter section-bg'>
            <div className='container'>
                <div className='row gy-4'>
                    <div className='col-lg-3 col-md-6'>
                        <div className='stats-item d-flex align-items-center w-100 h-100'>
                            <i className='bi bi-emoji-smile color-blue flex-shrink-0' />
                            <div>
                                <span data-purecounter-start={0} data-purecounter-end={90} data-purecounter-duration={1} className='purecounter' />
                                <p>Events</p>
                            </div>
                        </div>
                    </div>
                    {/* End Stats Item */}
                    <div className='col-lg-3 col-md-6'>
                        <div className='stats-item d-flex align-items-center w-100 h-100'>
                            <i className='bi bi-journal-richtext color-orange flex-shrink-0' />
                            <div>
                                <span data-purecounter-start={0} data-purecounter-end={5} data-purecounter-duration={1} className='purecounter' />
                                <p>Projects</p>
                            </div>
                        </div>
                    </div>
                    {/* End Stats Item */}
                    <div className='col-lg-3 col-md-6'>
                        <div className='stats-item d-flex align-items-center w-100 h-100'>
                            <i className='bi bi-headset color-green flex-shrink-0' />
                            <div>
                                <span data-purecounter-start={0} data-purecounter-end={80} data-purecounter-duration={1} className='purecounter' />
                                <p>Volunteers</p>
                            </div>
                        </div>
                    </div>
                    {/* End Stats Item */}
                    <div className='col-lg-3 col-md-6'>
                        <div className='stats-item d-flex align-items-center w-100 h-100'>
                            <i className='bi bi-people color-pink flex-shrink-0' />
                            <div>
                                <span data-purecounter-start={0} data-purecounter-end={7} data-purecounter-duration={1} className='purecounter' />
                                <p>Trustees</p>
                            </div>
                        </div>
                    </div>
                    {/* End Stats Item */}
                </div>
            </div>
        </section>
    );
};

export default Counter;
