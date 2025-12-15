import React from 'react';
import Link from 'next/link';

const EmergencyBanner = () => {
  return (
    <div className="wpo-emergency-banner py-1 bg-danger text-white" style={{ position: 'relative', zIndex: 1000 }}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
          <span className="badge bg-light text-dark">24/7 Emergency</span>
          <span className="small">Burst pipe? No hot water? Dispatch in 60–90 minutes.</span>
          <div className="d-flex align-items-center gap-1">
            <Link href="tel:+17148635486" className="btn btn-sm btn-light text-danger fw-bold">Call</Link>
            <Link href="/appointment" className="btn btn-sm btn-outline-light">Book</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
