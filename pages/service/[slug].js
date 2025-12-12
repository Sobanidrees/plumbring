import React, { Fragment } from 'react';
import Services from '../../api/service'
import Link from 'next/link'
import ServiceSidebar from './single/sidebar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Benefits from './single/benefits';


const ServiceSinglePage = ({ serviceDetails }) => {
    if (!serviceDetails) {
        return (
            <Fragment>
                <Navbar />
                <PageTitle pageTitle={'Service Not Found'} pagesub={'Service'} />
                <div className="wpo-project-details-area wpo-service-details section-padding">
                    <div className="container">
                        <p>Sorry, we couldn’t find that service. Please select a service from the menu.</p>
                    </div>
                </div>
                <Footer />
                <Scrollbar />
            </Fragment>
        );
    }

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={serviceDetails.sTitle} pagesub={serviceDetails.sTitle} />
            <div className="wpo-project-details-area wpo-service-details section-padding">
                <div className="container">
                    <div className="row">
                        <ServiceSidebar />
                        <div className="col-lg-8 order-lg-2 order-md-1 order-1">
                            <div className="wpo-minimals-wrap">
                                <div className="minimals-img">
                                    <img src={serviceDetails.sImg} alt="" />
                                </div>
                            </div>
                            <div className="wpo-p-details-section">
                                <h2>{serviceDetails.sTitle}</h2>
                                <p>{serviceDetails.overview || serviceDetails.description}</p>
                                {serviceDetails.keyPoints && (
                                    <div style={{ marginTop: 15 }}>
                                        <h5>What you can expect</h5>
                                        <ul>
                                            {serviceDetails.keyPoints.map((pt, i) => (
                                                <li key={i}>{pt}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={serviceDetails.ssImg1} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={serviceDetails.ssImg2} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: 20 }}>
                                    <Link href="/schedule-service" className="theme-btn">Schedule Service</Link>
                                </div>
                            </div>
                            <div className="wpo-faq-section">
                                <h4>Frequently Ask Questions</h4>
                                <Benefits />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export async function getStaticPaths() {
    const paths = Services.map((service) => ({ params: { slug: service.slug } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const serviceDetails = Services.find((item) => item.slug === params.slug) || null;
    return { props: { serviceDetails } };
}

export default ServiceSinglePage;
