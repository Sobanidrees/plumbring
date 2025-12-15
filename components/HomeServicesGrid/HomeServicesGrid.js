import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import Services from '../../api/service';

const sliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  draggable: true,
  swipe: true,
  touchMove: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 4 } },
    { breakpoint: 991, settings: { slidesToShow: 3 } },
    { breakpoint: 767, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const HomeServicesGrid = () => {
  return (
    <section className="wpo-home-services section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="wpo-section-title text-center">
              <h2>Plumbing Services</h2>
              <p>Choose a service. Tap a card to learn more and book.</p>
            </div>
          </div>
        </div>

        <div className="home-services-slider">
          <Slider {...sliderSettings}>
            {Services.map((service, idx) => (
              <div key={idx}>
                <Link href={`/service/${service.slug}`} className="home-service-card">
                  <div className="icon-wrap">
                    {service.sIcon ? (
                      <img src={service.sIcon} alt="" />
                    ) : (
                      <img src="/images/icon/water-tap.png" alt="" />
                    )}
                  </div>
                  <h3>{service.sTitle}</h3>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesGrid;
