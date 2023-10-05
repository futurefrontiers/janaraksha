import Layout from '../../Layout';

import Breadcrumbs from '../../../components/Breadcrumbs';
import SideBar from './components/SideBar';
import SideContainer from './components/SideContainer';
import RightContainer from './components/RightContainer';

const BloodDonation = () => {
    return (
        <Layout>
            <Breadcrumbs Title='Blood Donation' />

            <section id='service-details' className='service-details'>
                <div className='container' data-aos='fade-up' data-aos-delay='100'>
                    <div className='row gy-4'>
                        <div className='col-lg-4'>
                            <SideBar />
                            <SideContainer />
                        </div>
                        <div className='col-lg-8'>
                            <RightContainer />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default BloodDonation;
