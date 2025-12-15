import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="wpo-cta-section section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="wpo-section-title">
              <h2>Flexible Financing & Seasonal Savings</h2>
              <p>Ask about payment options and current coupons—get quality work without surprises.</p>
            </div>
            <div className="btns mt-3">
              <ul className="d-flex justify-content-center gap-3 list-unstyled">
                <li>
                  <Link href="/schedule-service" className="btn theme-btn">Schedule Service</Link>
                </li>
                <li>
                  <Link href="/contact" className="btn theme-btn-s2">Get a Quote</Link>
                </li>
              </ul>
            </div>
            <div className="mt-2">
              <Link href="tel:+17148635486" className="btn theme-btn-s2">Call 714-863-5486</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
