import React from 'react';
import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import Services from '../../api/service'

const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className="wpo-service-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <SectionTitle 
                            MainTitle={'Plumbing Services We Provide'} 
                            Description={'From urgent fixes to planned upgrades—expert solutions for every home.'}
                        />
                    </div>
                </div>
                <div className="row">

                    {Services.map((service, sitem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={sitem}>
                            <div className="wpo-service-item">
                                <Link href={`/service/${service.slug}`}>
                                    <div className="wpo-service-img">
                                        <img src={service.sImg} alt="" />
                                    </div>
                                </Link>
                                <div className="wpo-service-text">
                                    <h2>
                                        <Link href={`/service/${service.slug}`}>
                                            <span>{service.sTitle}</span>
                                        </Link>
                                    </h2>
                                    <p>{service.description}</p>
                                    <Link href={`/service/${service.slug}`} className="read-more">
                                        <span>READ MORE <i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceSection;
