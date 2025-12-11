import React from 'react';
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
                        <SectionTitle MainTitle={'Best Service We Offer'} />
                    </div>
                </div>
                <div className="row">

                    {Services.map((service, sitem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={sitem}>
                            <div className="wpo-service-item">
                                <div className="wpo-service-img">
                                    <img src={service.sImg} alt="" />
                                </div>
                                <div className="wpo-service-text">
                                    <h2><span>{service.sTitle}</span></h2>
                                    <p>{service.description}</p>
                                    <span>READ MORE <i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
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
