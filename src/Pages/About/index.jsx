import Header from '../../components/Header';
import Breadcrumbs from '../../components/Breadcrumbs';
import Intro from './components/Intro';
import Team from './components/Team';
import Footer from '../../components/Footer';

const AboutUs = () => {
    return (
        <>
            {/*  ======= Header Section ======= */}
            <Header />

            {/*  ======= Main Section =======  */}
            <main id='main'>
                <Breadcrumbs Title='About' />
                <Intro />
                <Team />3
            </main>

            {/*  ======= Footer Section ======= */}
            <Footer />

            <a href='#' className='scroll-top d-flex align-items-center justify-content-center'>
                <i className='bi bi-arrow-up-short'></i>
            </a>

            {/* <div id='preloader'></div> */}
        </>
    );
};

export default AboutUs;
