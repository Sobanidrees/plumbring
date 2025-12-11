import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import Features from '../../components/Features/Features';
import Contactpage from '../../components/Contactpage/Contactpage';

const ScheduleServicePage = () => {
  return (
    <div>
      <Navbar />
      <PageTitle pageTitle={'Schedule Service'} pagesub={'Schedule'} />
      <Features fClass={'section-padding'} />
      {/* Promo block for key offers */}
      <section className="wpo-pricing-section section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="wpo-section-title">
                <h2>Featured Offers</h2>
                <p>Transparent pricing and fast scheduling — book in minutes.</p>
              </div>
            </div>
          </div>
          <div className="pricing-grids clearfix">
            <div className="grid">
              <div className="type">
                <h5>Drain Cleaning</h5>
              </div>
              <div className="pricing-header">
                <div>
                  <h3 className="price">$69.99</h3>
                  <p>Flat Rate</p>
                </div>
              </div>
              <div className="pricing-body">
                <ul>
                  <li>Fast, professional service</li>
                  <li>Up-front pricing</li>
                  <li>Warranty-backed work</li>
                </ul>
              </div>
            </div>
            <div className="grid">
              <div className="type">
                <h5>Accessible Clean Out</h5>
              </div>
              <div className="pricing-header">
                <div>
                  <h3 className="price">Custom Quote</h3>
                  <p>Book to assess</p>
                </div>
              </div>
              <div className="pricing-body">
                <ul>
                  <li>Install or upgrade clean outs</li>
                  <li>Code-compliant and service-friendly</li>
                  <li>Optimized for future maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contactpage />
      <Footer />
      <Scrollbar />
    </div>
  );
};

export default ScheduleServicePage;