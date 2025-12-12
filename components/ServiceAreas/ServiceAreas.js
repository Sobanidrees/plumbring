import React from 'react';
import SectionTitle from '../SectionTitle';

const ServiceAreas = () => {
  const areas = [
    'Rancho Cucamonga', 'Ontario', 'Upland', 'Fontana', 'San Bernardino',
    'Riverside', 'Corona', 'Chino Hills', 'Anaheim', 'Orange',
    'Fullerton', 'Brea', 'Yorba Linda', 'Placentia'
  ];

  return (
    <section className="wpo-service-areas section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <SectionTitle
              MainTitle={'Proudly Serving Inland Empire & Orange County'}
              Description={'Fast response across nearby cities—local techs, consistent quality, and friendly service.'}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <ul className="d-flex flex-wrap justify-content-center gap-3 list-unstyled">
              {areas.map((city, idx) => (
                <li key={idx} className="badge bg-light text-dark p-3 m-1">
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;