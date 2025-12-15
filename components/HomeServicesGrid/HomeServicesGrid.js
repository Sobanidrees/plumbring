import React, { useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import Services from '../../api/service';

const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  draggable: true,
  swipe: true,
  touchMove: true,
  autoplay: true,
  autoplaySpeed: 2800,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1400, settings: { slidesToShow: 4 } },
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
    { breakpoint: 991, settings: { slidesToShow: 2 } },
    { breakpoint: 575, settings: { slidesToShow: 1 } },
  ],
};

const HomeServicesGrid = () => {
  const [hovered, setHovered] = useState(-1);

  return (
    <section className="wpo-home-services section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="wpo-section-title text-center">
              <h2>Plumbing Services</h2>
              <p>Choose a service. Learn more and book in seconds.</p>
            </div>
          </div>
        </div>

        <div className="home-services-slider">
          <Slider {...sliderSettings}>
            {Services.map((service, idx) => (
              <div key={idx} className="px-2">
                <div
                  className={`home-service-card card border-0 shadow-sm h-100`}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(-1)}
                  style={{
                    minHeight: 360,
                    transition: 'transform 200ms ease, box-shadow 200ms ease',
                    transform: hovered === idx ? 'translateY(-4px)' : 'none',
                    boxShadow: hovered === idx ? '0 0.75rem 1rem rgba(0,0,0,0.08)' : undefined,
                  }}
                >
                  <div className="card-body d-flex flex-column align-items-center text-center">
                    <div
                      className="icon-wrap d-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{
                        width: 72,
                        height: 72,
                        background: 'linear-gradient(135deg,#e8f3ff,#f8fbff)',
                        border: '1px solid #e6eef8',
                      }}
                    >
                      {service.sIcon ? (
                        <img src={service.sIcon} alt="" style={{ width: 32, height: 32 }} />
                      ) : (
                        <img src="/images/icon/water-tap.png" alt="" style={{ width: 32, height: 32 }} />
                      )}
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      {service.slug === 'emergency-plumbing' && (
                        <span className="badge bg-danger">24/7</span>
                      )}
                      {(service.slug === 'drain-cleaning' || /\\$\\d+/.test(service.sTitle)) && (
                        <span className="badge bg-warning text-dark">Popular</span>
                      )}
                    </div>
                    <h3 className="h5 mb-2" style={{ minHeight: 48 }}>{service.sTitle}</h3>
                    {service.description && (
                      <p className="text-muted mb-3" style={{ minHeight: 64 }}>
                        {service.description}
                      </p>
                    )}
                    <div className="d-flex flex-wrap gap-2 justify-content-center mt-auto">
                      <Link href={`/service/${service.slug}`} className="btn btn-sm btn-outline-primary">
                        Learn More
                      </Link>
                      <Link href={`/appointment?service=${encodeURIComponent(service.slug)}`} className="btn btn-sm btn-primary">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesGrid;
