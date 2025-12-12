import React from 'react';
import Link from 'next/link';
import Services from '../../api/service';

const HomeServicesGrid = () => {
  return (
    <section className="wpo-home-services section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="wpo-section-title text-center">
              <h2>Plumbing Services</h2>
              <p>Choose a service. Tap a card to learn more and book.</p>
            </div>
          </div>
        </div>

        <div className="home-services-grid">
          {Services.slice(0,8).map((service, idx) => (
            <Link href={`/service/${service.slug}`} key={idx} className="home-service-card">
              <div className="icon-wrap">
                {service.sIcon ? (
                  <img src={service.sIcon} alt="" />
                ) : (
                  <img src="/images/icon/water-tap.png" alt="" />
                )}
              </div>
              <h3>{service.sTitle}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServicesGrid;