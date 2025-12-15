import React from 'react';
import Link from 'next/link';

const promos = [
  {
    titleLines: ['Drain Cleaning &', 'Camera Inspection'],
    price: 89,
    note: '',
    points: ['Residential Only.', 'One coupon per service', 'Expires 12/31/25'],
    cta: { label: 'Book Your Service', href: '/schedule-service' },
  },
  {
    titleLines: ['AC Tune-Up & Safety', 'Inspection'],
    price: 89,
    note: 'off',
    points: ['Residential Only.', 'One coupon per service', 'Expires 12/31/25'],
    cta: { label: 'Book Your Service', href: '/schedule-service' },
    popular: true,
  },
  {
    titleLines: ['Water Heater Flush'],
    price: 89,
    note: '',
    points: ['Residential Only.', 'One coupon per service', 'Expires 12/31/25'],
    cta: { label: 'Book Your Service', href: '/schedule-service' },
  },
];

export default function PromotionsSection() {
  return (
    <section className="wpo-promotions-section section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="wpo-section-title text-center">
              <h2>Our Promotions</h2>
            </div>
          </div>
        </div>

        <div className="promos-grid">
          {promos.map((p, idx) => (
            <div className={`promo-card${p.popular ? ' is-popular' : ''}`} key={idx}>
              {p.popular && (
                <span className="popular-badge">Most popular</span>
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
                <div className="illustration">
                  <img src="/images/icon/1.png" alt="promo" />
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

