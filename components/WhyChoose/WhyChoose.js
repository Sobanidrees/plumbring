import React from 'react';

const items = [
  { icon: 'ti-heart', title: 'MB Plumbing Guarantee', text: 'Guaranteed satisfaction with strong warranties — or we make it right.' },
  { icon: 'ti-star', title: 'Highly Rated', text: 'Over 1,000 five‑star reviews online from satisfied customers.' },
  { icon: 'ti-clipboard', title: 'Upfront Expectations & Pricing', text: 'Transparent process and pricing. No surprises, ever.' },
  { icon: 'ti-time', title: 'Flexible Schedule', text: 'We work around your schedule and show up when you need us.' },
  { icon: 'ti-user', title: 'Trained, Qualified, Ready to Work', text: 'Certified techs delivering exceptional service and long‑lasting solutions.' },
  { icon: 'ti-home', title: 'Good People First, Great Plumbers Second', text: 'We treat everyone the way we’d like to be treated.' },
];

const WhyChoose = () => {
  return (
    <section className="wpo-why-choose-section section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="wpo-section-title text-center">
              <h2>Why Choose MB Plumbing?</h2>
              <p>We’re built on trust, transparency, and respectful service.</p>
            </div>
          </div>
        </div>

        <div className="why-grid">
          {items.map((item, idx) => (
            <div className="why-card" key={idx}>
              <div className="why-icon"><i className={item.icon} /></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;