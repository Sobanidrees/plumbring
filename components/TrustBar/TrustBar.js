import React from 'react';

const TrustBar = () => {
  return (
    <div className="wpo-trust-bar py-2 bg-light border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-success">4.8★</span>
            <span>Google Reviews</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-primary">BBB</span>
            <span>Accredited Business</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-secondary">US</span>
            <span>US‑Based, Licensed & Insured</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-info text-dark">Trusted</span>
            <span>Background‑Checked Technicians</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
