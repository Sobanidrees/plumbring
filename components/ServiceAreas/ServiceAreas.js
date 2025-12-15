import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SectionTitle from '../SectionTitle';

const groups = [
  {
    title: 'Inland Empire',
    cities: ['Rancho Cucamonga', 'Ontario', 'Upland', 'Fontana', 'Chino Hills'],
  },
  {
    title: 'San Bernardino & Riverside',
    cities: ['San Bernardino', 'Riverside', 'Corona'],
  },
  {
    title: 'North Orange County',
    cities: ['Anaheim', 'Orange', 'Fullerton', 'Brea', 'Yorba Linda', 'Placentia'],
  },
];

const ServiceAreas = () => {
  const [zip, setZip] = useState('');
  const router = useRouter();
  const validZip = /^\d{5}$/.test(zip);
  const handleZipCheck = (e) => {
    e.preventDefault();
    if (validZip) {
      router.push(`/schedule-service?zip=${zip}`);
    }
  };
  return (
    <section className="wpo-service-areas section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <SectionTitle
              MainTitle={'Local Plumbers Near You'}
              Description={'Same‑day coverage across the Inland Empire and North Orange County. Licensed, bonded, and insured — clean, respectful service with upfront pricing.'}
            />
          </div>
        </div>

        <div className="coverage-tools">
          <form onSubmit={handleZipCheck} className="zip-form" aria-label="Check coverage by ZIP">
            <label htmlFor="zip" className="sr-only">ZIP code</label>
            <input
              id="zip"
              type="text"
              inputMode="numeric"
              pattern="[0-9]{5}"
              maxLength={5}
              placeholder="Enter ZIP code (e.g., 91730)"
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, ''))}
              aria-invalid={zip && !validZip ? 'true' : 'false'}
            />
            <button type="submit" className="theme-btn" disabled={!validZip}>Check</button>
          </form>
          <ul className="highlights">
            <li>
              <span className="check" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#0ea5e9"/><path d="M17 7 9.5 14.5 7 12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span>Licensed, bonded & insured</span>
            </li>
            <li>
              <span className="check" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#0ea5e9"/><path d="M17 7 9.5 14.5 7 12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span>Same‑day & weekend service</span>
            </li>
            <li>
              <span className="check" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#0ea5e9"/><path d="M17 7 9.5 14.5 7 12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span>Upfront pricing</span>
            </li>
          </ul>
        </div>

        <div className="areas-grid">
          {groups.map((g, idx) => (
            <div className="area-card" key={idx}>
              <div className="card-head">
                <span className="pin" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6Zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" fill="#ff7e1f"/>
                  </svg>
                </span>
                <h3>{g.title}</h3>
              </div>
              <ul className="chips">
                {g.cities.map((c, i) => (
                  <li key={i} className="chip">
                    <Link href={`/schedule-service?city=${encodeURIComponent(c)}`}>{c}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="areas-cta">
          <Link href="/schedule-service" className="theme-btn">Check Coverage</Link>
          <p className="coverage-note">Don’t see your city? We likely serve nearby. Book online or call to confirm coverage.</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
