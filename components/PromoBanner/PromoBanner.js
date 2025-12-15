import React from 'react';
import Link from 'next/link';

const PromoBanner = () => {
  return (
    <section className="wpo-promo-banner py-3" style={{ background: 'linear-gradient(90deg,#0d6efd,#4dabff)' }}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-8 text-white">
            <div className="d-flex flex-wrap align-items-center gap-3">
              <span className="badge bg-light text-primary">Special Offer</span>
              <span className="fw-bold">Drain Cleaning $69.99 • Same‑Day Service</span>
              <span className="d-none d-md-inline">Military & Senior Discounts</span>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-lg-end justify-content-start mt-2 mt-lg-0 gap-2">
            <Link href="/appointment?offer=drain-cleaning" className="btn btn-light text-primary fw-bold">
              Claim Offer
            </Link>
            <Link href="tel:+17148635486" className="btn btn-outline-light">
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
