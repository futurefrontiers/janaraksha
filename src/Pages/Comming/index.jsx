import Layout from '../Layout';
import Breadcrumbs from '../../components/Breadcrumbs';

const Comming = () => {
    return (
        <Layout>
            <Breadcrumbs Title='Comming Soon' />
            <section className='sample-page'>
                <div className='container'>
                    <p>Thank you for being a part of our mission to create a brighter future for all. Together, we can make a lasting difference. !</p>
                    <p>Follow us on social media to stay connected with our journey: </p>
                    <div className='social-links-comming d-flex mt-3'>
                        <a href='#' className='d-flex align-items-center justify-content-center'>
                            <i className='bi bi-twitter' />
                        </a>
                        <a href='#' className='d-flex align-items-center justify-content-center'>
                            <i className='bi bi-facebook' />
                        </a>
                        <a href='#' className='d-flex align-items-center justify-content-center'>
                            <i className='bi bi-instagram' />
                        </a>
                        <a href='#' className='d-flex align-items-center justify-content-center'>
                            <i className='bi bi-linkedin' />
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Comming;
