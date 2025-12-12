import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import Features from '../../components/Features/Features';
import Contactpage from '../../components/Contactpage/Contactpage';
import Services from '../../api/service';

const ScheduleServicePage = () => {
  return (
    <div>
      <Navbar />
      <PageTitle pageTitle={'Schedule Service'} pagesub={'Schedule'} />
      <Features fClass={'section-padding'} />
      {/* Modern quick‑book cards */}
  <section className="wpo-schedule-section section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8">
              <div className="wpo-section-title text-center">
                <h2>Book Fast — Same‑Day Service</h2>
                <p>Pick a service and schedule instantly. Licensed techs, up‑front pricing, and warranty‑backed work.</p>
              </div>
            </div>
          </div>

          <div className="schedule-card-grid">
            {Services.slice(0,6).map((service, idx) => {
              // Shorten overview for card context
              const text = service.overview || service.description || '';
              const snippet = text.length > 180 ? `${text.slice(0, 176)}…` : text;
              const points = Array.isArray(service.keyPoints) ? service.keyPoints.slice(0,3) : [];
              return (
                <div className="schedule-card" key={idx}>
                  {idx === 0 && <span className="badge">Popular</span>}
                  <div className="card-media">
                    <img src={service.sImg} alt={service.sTitle} />
                  </div>
                  <div className="card-body">
                    <div className="card-title-row">
                      {service.sIcon && (
                        <img className="card-icon" src={service.sIcon} alt="" />
                      )}
                      <h3>{service.sTitle}</h3>
                    </div>
                    <p>{snippet}</p>
                    {points.length > 0 && (
                      <ul className="card-list">
                        {points.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                    )}
                    <div className="card-actions">
                      <Link href={`/service/${service.slug}`} className="theme-btn">Book Now</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="schedule-highlights">
            <div className="highlight-item">
              <img src="/images/icon/2.png" alt="" />
              <div>
                <h6>Licensed & Insured</h6>
                <span>Top‑rated local pros</span>
              </div>
            </div>
            <div className="highlight-item">
              <img src="/images/icon/1.png" alt="" />
              <div>
                <h6>Up‑front Pricing</h6>
                <span>No surprises, ever</span>
              </div>
            </div>
            <div className="highlight-item">
              <img src="/images/icon/3.png" alt="" />
              <div>
                <h6>Emergency Available</h6>
                <span>Day or night support</span>
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