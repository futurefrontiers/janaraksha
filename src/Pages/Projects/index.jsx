import Layout from '../Layout';
import Breadcrumbs from '../../components/Breadcrumbs';
import Testimonials from '../../components/Testimonials';
import Portfolio from './components/Portfolio';

const Projects = () => {
    return (
        <Layout>
            <Breadcrumbs Title='Projects' />
            <Portfolio />
            <Testimonials />
        </Layout>
    );
};

export default Projects;
