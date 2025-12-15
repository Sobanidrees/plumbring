import React from 'react';
import Link from 'next/link';

const promos = [
  {
    titleLines: ['Drain Cleaning'],
    price: 69.99,
    note: 'flat rate',
    points: ['Residential only', 'Main lines excluded', 'Expires 12/31/25'],
    cta: { label: 'Book Now', href: '/appointment?service=drain-cleaning' },
    popular: true,
  },
  {
    titleLines: ['Water Heater Install'],
    price: 100,
    note: 'off',
    points: ['Tank or tankless', 'All major brands', 'Expires 12/31/25'],
    cta: { label: 'Get Estimate', href: '/appointment?service=water-heater-service' },
  },
  {
    titleLines: ['Leak Detection'],
    price: 49,
    note: 'diagnostic',
    points: ['Non‑invasive locating', 'Upfront repair options', 'Expires 12/31/25'],
    cta: { label: 'Find My Leak', href: '/appointment?service=leak-detection-repair' },
  },
];

export default function PromotionsSection() {
  return (
    <section className="wpo-promotions-section section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="wpo-section-title text-center">
              <h2>Special Offers</h2>
            </div>
          </div>
        </div>

        <div className="promos-grid">
          {promos.map((p, idx) => (
            <div className={`promo-card${p.popular ? ' is-popular' : ''}`} key={idx}>
              {p.popular && (
                <span className="popular-badge"><i className="ti-star"></i> Most popular</span>
              )}

              <div className="promo-head">
                <h3>
                  {p.titleLines.map((line, i) => (
                    <span key={i} className="line">{line}</span>
                  ))}
                </h3>
                <div className="price-row">
                  <span className="price">${p.price}</span>
                  {p.note && <span className="note">{p.note}</span>}
                </div>
              </div>

              <div className="promo-body">
                <ul className="points">
                  {p.points.map((pt, i) => (
                    <li key={i}><i className="ti-check"></i> {pt}</li>
                  ))}
                </ul>
                <div className="illustration" aria-hidden="true">
                  <img src="/images/icon/2.png" alt="" />
                </div>
              </div>

              <div className="promo-actions">
                <Link href={p.cta.href} className="theme-btn">
                  {p.cta.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
