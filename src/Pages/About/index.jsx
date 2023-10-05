import Layout from '../Layout';

import Breadcrumbs from '../../components/Breadcrumbs';
import Intro from './components/Intro';
import Team from './components/Team';

const AboutUs = () => {
    return (
        <Layout>
            <Breadcrumbs Title='About' />
            <Intro />
            <Team />3
        </Layout>
    );
};

export default AboutUs;
