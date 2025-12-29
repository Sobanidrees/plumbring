import React from 'react';
import SectionTitle from '../SectionTitle';

const CommercialBrands = () => {
  // Brand logos from commercial-plumbing folder
  const brands = [
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
    },
    {
      name: 'Brand 1',
      logo: '/images/commercial-plumbing/new1.png',
      alt: 'Brand 1'
    },
    {
      name: 'Brand 2',
      logo: '/images/commercial-plumbing/new2.png',
      alt: 'Brand 2'
    },
    {
      name: 'Brand 3',
      logo: '/images/commercial-plumbing/new3.png',
      alt: 'Brand 3'
    },
    {
      name: 'Brand 4',
      logo: '/images/commercial-plumbing/new4.png',
      alt: 'Brand 4'
    },
    {
      name: 'Brand 5',
      logo: '/images/commercial-plumbing/new5.png',
      alt: 'Brand 5'
    },
    {
      name: 'Brand 6',
      logo: '/images/commercial-plumbing/new6.png',
      alt: 'Brand 6'
    },
    {
      name: 'Brand 7',
      logo: '/images/commercial-plumbing/new7.png',
      alt: 'Brand 7'
    },
    {
      name: 'Brand 8',
      logo: '/images/commercial-plumbing/new8.png',
      alt: 'Brand 8'
    },
    {
      name: 'Brand 9',
      logo: '/images/commercial-plumbing/new9.png',
      alt: 'Brand 9'
    },
    {
      name: 'Brand 10',
      logo: '/images/commercial-plumbing/new10.png',
      alt: 'Brand 10'
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

