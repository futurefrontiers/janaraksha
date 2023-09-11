import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Virtual, Autoplay } from 'swiper/modules';

import testimonials_01 from '../../assets/images/testimonials/testimonials-1.jpg';
import testimonials_02 from '../../assets/images/testimonials/testimonials-2.jpg';
import testimonials_03 from '../../assets/images/testimonials/testimonials-3.jpg';
import testimonials_04 from '../../assets/images/testimonials/testimonials-4.jpg';

const Testimonials = function () {
    return (
        <section id='testimonials' className='testimonials'>
            <div className='container' data-aos='fade-up'>
                <div className='section-header'>
                    <h2>Trust board members</h2>
                    <p>Year of 2023-2024</p>
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
                    <SwiperSlide>
                        <div className='testimonial-wrap'>
                            <div className='testimonial-item'>
                                <img src={testimonials_01} className='testimonial-img' alt='' />
                                <h3>Vinay Kumar Chekka</h3>
                                <h4>Chairman &amp; Founder</h4>
                                <div className='stars'>
                                    <i className='bi bi-star-fill' />
                                    <i className='bi bi-star-fill' />
                                    <i className='bi bi-star-fill' />
                                    <i className='bi bi-star-fill' />
                                    <i className='bi bi-star-fill' />
                                </div>
                                <p>
                                    <i className='bi bi-quote quote-icon-left' />
                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                    <i className='bi bi-quote quote-icon-right' />
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='testimonial-wrap'>
                            <div className='testimonial-item'>
                                <img src={testimonials_02} className='testimonial-img' alt='' />
                                <h3>Hema sri lakshami Makineedi</h3>
                                <h4>Secretary</h4>
                                <div className='stars'>
                                    <i className='bi bi-star-fill' />
                                    <i className='bi bi-star-fill' />
                                    <i className='bi bi-star-fill' />
                                    <i className='bi bi-star-fill' />
                                    <i className='bi bi-star-fill' />
                                </div>
                                <p>
                                    <i className='bi bi-quote quote-icon-left' />
                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                    <i className='bi bi-quote quote-icon-right' />
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='testimonial-wrap'>
                            <div className='testimonial-item'>
                                <img src={testimonials_03} className='testimonial-img' alt='' />
                                <h3>Prasann Suresh S</h3>
                                <h4>Vice chairman</h4>
                                <div className='stars'>
                                    <i className='bi bi-star-fill' />
                                    <i className='bi bi-star-fill' />
                                    <i className='bi bi-star-fill' />
                                    <i className='bi bi-star-fill' />
                                    <i className='bi bi-star-fill' />
                                </div>
                                <p>
                                    <i className='bi bi-quote quote-icon-left' />
                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                    <i className='bi bi-quote quote-icon-right' />
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='testimonial-wrap'>
                            <div className='testimonial-item'>
                                <img src={testimonials_04} className='testimonial-img' alt='' />
                                <h3>Sandeep Kumar M</h3>
                                <h4>Joint Secretary</h4>
                                <div className='stars'>
                                    <i className='bi bi-star-fill' />
                                    <i className='bi bi-star-fill' />
                                    <i className='bi bi-star-fill' />
                                    <i className='bi bi-star-fill' />
                                    <i className='bi bi-star-fill' />
                                </div>
                                <p>
                                    <i className='bi bi-quote quote-icon-left' />
                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum
                                    veniam.
                                    <i className='bi bi-quote quote-icon-right' />
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
