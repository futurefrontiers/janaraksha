import { TESTIMONIAL_INFO } from '../../../../constants/testimonials';

const Team = () => {
    return (
        <section id='team' className='team' z>
            <div className='container' data-aos='fade-up'>
                <div className='section-header'>
                    <h2>Our Team</h2>
                    <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
                </div>
                <div className='row gy-5'>
                    {TESTIMONIAL_INFO.map((member, ind) => (
                        <div key={ind} className='col-lg-4 col-md-6 member' data-aos='fade-up' data-aos-delay={100}>
                            <div className='member-img'>
                                <img src={member.imgSrc} className='img-fluid' alt='' />
                                <div className='social'>
                                    <a href={member.socialMedia.twitter}>
                                        <i className='bi bi-twitter' />
                                    </a>
                                    <a href={member.socialMedia.facebook}>
                                        <i className='bi bi-facebook' />
                                    </a>
                                    <a href={member.socialMedia.instagram}>
                                        <i className='bi bi-instagram' />
                                    </a>
                                    <a href={member.socialMedia.linkedin}>
                                        <i className='bi bi-linkedin' />
                                    </a>
                                </div>
                            </div>
                            <div className='member-info text-center'>
                                <h4>{member.Name}</h4>
                                <span>{member.profile}</span>
                                <p>{member.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
