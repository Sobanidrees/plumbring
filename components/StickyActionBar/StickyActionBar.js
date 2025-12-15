import React from 'react';
import Link from 'next/link';

const StickyActionBar = () => {
  return (
    <div
      className="wpo-sticky-action-bar d-md-none"
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1030,
        background: '#fff',
        boxShadow: '0 -0.5rem 1rem rgba(0,0,0,0.08)',
        padding: '10px 0',
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link href="tel:+17148635486" className="btn btn-outline-primary w-100 mx-1">
            Call
          </Link>
          <Link href="/appointment" className="btn btn-primary w-100 mx-1">
            Book Online
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StickyActionBar;
