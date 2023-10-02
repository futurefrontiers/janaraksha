import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Virtual, Autoplay } from 'swiper/modules';

import { TESTIMONIAL_INFO } from '../../constants/testimonials';

const Testimonials = function ({ isProject = false, organizers = [] }) {
    const Testimonials = isProject ? organizers : TESTIMONIAL_INFO;
    return (
        <>
            {Testimonials.length ? (
                <section id='testimonials' className='testimonials section-bg'>
                    <div className='container' data-aos='fade-up'>
                        <div className='section-header'>
                            {isProject ? (
                                <h2>Organizers</h2>
                            ) : (
                                <>
                                    <h2>Trust board members</h2>
                                    <p>Year of 2023-2024</p>
                                </>
                            )}
                        </div>

                        <Swiper
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            pagination={{ clickable: true }}
                            modules={[Pagination, FreeMode, Virtual, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={2}
                            className='slides-2 swiper'>
                            {Testimonials.map((testimonial, ind) => (
                                <div className='swiper-wrapper' key={ind}>
                                    <SwiperSlide className='swiper-slide'>
                                        <div className='testimonial-wrap'>
                                            <div className='testimonial-item'>
                                                <img src={testimonial.imgSrc} className='testimonial-img' alt='' />
                                                <h3>{testimonial.Name}</h3>
                                                <h4>{testimonial.profile}</h4>
                                                <div className='stars'>
                                                    <i className='bi bi-star-fill' />
                                                    <i className='bi bi-star-fill' />
                                                    <i className='bi bi-star-fill' />
                                                    <i className='bi bi-star-fill' />
                                                    <i className='bi bi-star-fill' />
                                                </div>
                                                <p>
                                                    <i className='bi bi-quote quote-icon-left' />
                                                    {testimonial.desc}
                                                    <i className='bi bi-quote quote-icon-right' />
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            ))}
                        </Swiper>
                    </div>
                </section>
            ) : null}
        </>
    );
};

export default Testimonials;
