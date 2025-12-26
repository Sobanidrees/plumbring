import React from 'react';
import SectionTitle from '../SectionTitle';

const CommercialBrands = () => {
  // Brand logos from commercial-plumbing folder
  const brands = [
    {
      name: 'AMC Theatres',
      logo: '/images/commercial-plumbing/amc-theatres-cinema-film-kerasotes-theatres-television-fortnite-john-wick.jpg',
      alt: 'AMC Theatres'
    },
    {
      name: 'Best Buy',
      logo: '/images/commercial-plumbing/logo-best-buy-brand-bouy-thumbnail.jpg',
      alt: 'Best Buy'
    },
    {
      name: 'Burlington',
      logo: '/images/commercial-plumbing/burlington.png',
      alt: 'Burlington'
    },
    {
      name: 'dd\'s DISCOUNTS',
      logo: '/images/commercial-plumbing/dd\'s.png',
      alt: 'dd\'s DISCOUNTS'
    },
    {
      name: 'Planet Fitness',
      logo: '/images/commercial-plumbing/Planet_Fitness_logo.svg',
      alt: 'Planet Fitness'
    },
    {
      name: 'Starbucks',
      logo: '/images/commercial-plumbing/cafe-starbucks-tea-coffee-starbucks.jpg',
      alt: 'Starbucks'
    },
    {
      name: 'Victoria\'s Secret',
      logo: '/images/commercial-plumbing/victorias-secret-logo-11562973433mq5umxcwsd.png',
      alt: 'Victoria\'s Secret'
    }
  ];

  return (
    <section className="wpo-commercial-brands section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8 col-12">
            <SectionTitle 
              MainTitle={'Commercial Jobs Completed'} 
              Description={'Trusted by national brands, healthcare providers, and commercial property owners.'}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="commercial-brands-grid">
              {brands.map((brand, index) => (
                <div key={index} className="brand-logo-item">
                  <div className="brand-logo-wrapper">
                    <img 
                      src={brand.logo} 
                      alt={brand.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="brands-disclaimer">
              <p>Logos are the property of their respective owners and are used for identification purposes only.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialBrands;

