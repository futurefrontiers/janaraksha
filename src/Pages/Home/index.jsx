import Intro from './components/Intro';
import WhatWeDo from './components/WhatWeDo';
import Testimonials from '../../components/Testimonials';

import Layout from '../Layout';

const Home = () => {
    return (
        <Layout isHomePage={true}>
            <Intro />
            <WhatWeDo />
            <Testimonials />
        </Layout>
    );
};

export default Home;
