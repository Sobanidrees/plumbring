import React, { Fragment } from 'react';
import Services from '../../api/service'
import Overrides from '../../api/serviceOverrides'
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

    const merged = { ...serviceDetails, ...(Overrides[serviceDetails.slug] || {}) };
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={merged.sTitle} pagesub={merged.sTitle} />
            <div className="wpo-project-details-area wpo-service-details section-padding">
                <div className="container">
                    <div className="row">
                        <ServiceSidebar />
                        <div className="col-lg-8 order-lg-2 order-md-1 order-1">
                            <div className="service-hero">
                                <div className="hero-card">
                                    <h1>{merged.sTitle}</h1>
                                    <p>{merged.overview || merged.description}</p>
                                    <div className="hero-meta">
                                        <span className="meta-chip">Free in‑person estimate</span>
                                        <span className="meta-chip">Licensed & insured</span>
                                        <span className="meta-chip">Upfront pricing</span>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-p-details-section">
                                {merged.keyPoints && (
                                    <div style={{ marginTop: 15 }}>
                                        <h5>{merged.pointsLabel || 'What you can expect'}</h5>
                                        <ul className="points-list">
                                            {merged.keyPoints.map((pt, i) => (
                                                <li key={i}>
                                                    <span className="point-icon" aria-hidden="true">
                                                        <svg width="18" height="18" viewBox="0 0 24 24">
                                                            <circle cx="12" cy="12" r="12" fill="#0ea5e9" />
                                                            <path d="M17 7 9.5 14.5 7 12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                    <span className="point-text">{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <div className="service-media row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={merged.ssImg1} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={merged.ssImg2} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="service-cta">
                                    <Link href="/schedule-service" className="theme-btn">Schedule Service</Link>
                                </div>
                            </div>
                            <div className="wpo-faq-section">
                                <h4>Frequently Asked Questions</h4>
                                <Benefits slug={merged.slug} />
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
