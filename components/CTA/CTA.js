import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="wpo-cta-section section-padding">
      <div className="container">
        <div className="cta-box">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="wpo-section-title">
                <h2>Book Same‑Day Plumbing</h2>
                <p>Upfront pricing, clean service, and licensed pros near you.</p>
              </div>
              <ul className="trust list-unstyled d-flex flex-wrap justify-content-center gap-2">
                <li>
                  <span className="check" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#0ea5e9"/><path d="M17 7 9.5 14.5 7 12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  Licensed & insured
                </li>
                <li>
                  <span className="check" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#0ea5e9"/><path d="M17 7 9.5 14.5 7 12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  Upfront pricing
                </li>
                <li>
                  <span className="check" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#0ea5e9"/><path d="M17 7 9.5 14.5 7 12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  Same‑day service
                </li>
              </ul>
              <div className="btns mt-3">
                <ul className="d-flex justify-content-center gap-3 list-unstyled">
                  <li>
                    <Link href="/schedule-service" className="btn theme-btn" onClick={(e)=>{e.preventDefault(); window.dispatchEvent(new CustomEvent('open-schedule-stepper', {detail:{}}));}}>Schedule Service</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="btn theme-btn-s2">Get a Quote</Link>
                  </li>
                </ul>
              </div>
              <div className="cta-inline mt-2">
                <Link href="tel:+17148635486" className="btn theme-btn-s2 alt">Call 714-863-5486</Link>
                <span className="cta-note">24/7 emergency available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
