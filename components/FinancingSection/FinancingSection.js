import React from 'react';
import Link from 'next/link';

const bullets = [
  'Emergency plumbing — leaks, backups, burst pipes',
  'Drain cleaning and hydro jetting',
  'Water heater repair & install — tank and tankless',
  'Leak detection & slab leak repair',
  'Repiping and main water line service',
  'Trenchless sewer repair & cleanouts',
];

export default function FinancingSection() {
  return (
    <section className="wpo-financing section-padding">
      <div className="container">
        <div className="financing-box">
          <div className="financing-inner">
            <div className="header text-center">
              <h2>Your Local Plumbing Experts</h2>
              <p>
                Licensed, bonded, and insured. Same‑day service for leaks, clogs, water heaters, and more — clean,
                respectful work with upfront pricing across the Inland Empire and North Orange County.
              </p>
            </div>
            <div className="row align-items-start justify-content-between">
              <div className="col-lg-6">
                <ul className="bullet-list">
                  {bullets.map((text, i) => (
                    <li key={i}>
                      <span className="bullet-icon" aria-hidden="true">
                        <svg width="28" height="28" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="12" fill="#ff7e1f" />
                          <path d="M17 7 9.5 14.5 7 12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="bullet-text">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-5">
                <div className="callout">
                  <h4>Same‑Day Plumbing — Book Online</h4>
                  <p>Upfront pricing. Licensed, bonded & insured technicians.</p>
                  <Link href="#" className="theme-btn" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-schedule-stepper')); }}>
                    Schedule Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="skyline" aria-hidden="true">
            <svg width="100%" height="100" viewBox="0 0 960 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="cityFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
              <rect x="0" y="70" width="960" height="30" fill="#1f3a8a" />
              <path d="M0 70h40l10-30h25l5 15h30l8-22h30l6 22h30l12-28h28l6 20h30l10-24h28l8 26h28l6-22h28l12 30h30l10-28h26l6 20h28l10-22h24l10 24h26l8-26h28l10 28h26l6-20h30l8 22h28l10-24h26l8 24h40v30H0z" fill="url(#cityFill)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
