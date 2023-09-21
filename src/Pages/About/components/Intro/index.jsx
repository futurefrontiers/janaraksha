import about_img from '../../../../assets/images/about.jpg';

const Intro = () => {
    return (
        <>
            <section id='blog' className='blog'>
                <div className='container' data-aos='fade-up' data-aos-delay={100}>
                    <div className='row g-5'>
                        <div className='col-lg-12'>
                            <article className='blog-details'>
                                <div className='post-img'>
                                    <img src={about_img} alt='' className='img-fluid' />
                                </div>
                                <h2 className='title'>JANA RAKSAHA SWACHANDA SEVA SAMSTHAJ</h2>
                                {/* End meta top */}
                                <div className='content'>
                                    <p data-aos='fade-up'>
                                        In times of emergencies such as accidents on the road, fires, and other critical situations, individuals who require immediate medical attention are often rushed to the hospital
                                        without having access to blood in a timely manner, potentially putting their lives at risk. With the aim of addressing this issue, a program called "Dynamic Blood Donors,"
                                        sponsored by the organization "Change Lies Within You Voluntary Service," was initiated. This organization has successfully facilitated blood donations for approximately 1500
                                        individuals.
                                    </p>
                                    <p data-aos='fade-up'>
                                        This organization primarily focuses on connecting blood donors with recipients, ensuring that blood is available when needed. However, in addition to blood donation, they also
                                        provide various other essential services. During challenging times like the COVID-19 pandemic, they have extended their support to the underprivileged by providing food, daily
                                        necessities, and other essential items.
                                    </p>
                                    <p data-aos='fade-up'>
                                        Due to various reasons, Change Lies Within You Voluntary Service, in collaboration with the Happy Meal Foundation, merged into the "Jana Raksha Swachanda Seva Samstha"
                                        organization. Through this merger, Jana Raksha Swachanda Seva Samstha has expanded its service programs to include organ donation, employment opportunities for the unemployed, and
                                        mega job fairs, among many others. These initiatives are carried out with the encouragement and assistance of the organization's members, contributing to the welfare of society.
                                    </p>
                                </div>
                            </article>
                            {/* End blog post */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Intro;
