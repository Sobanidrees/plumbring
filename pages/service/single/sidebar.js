import React from 'react'
import Link from 'next/link'
import Services from '../../../api/service';

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return (
        <div className="col-lg-4 col-md-8 order-lg-1 order-md-2 order-2">
            <div className="wpo-single-sidebar">
                <div className="wpo-service-widget widget">
                    <h2>All Services</h2>
                    <ul>
                        {Services.map((service, Sitem) => (
                            <li key={Sitem}>
                                <Link href={`/service/${service.slug}`} onClick={ClickHandler}>{service.sTitle}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                    <h2>How We Can <br /> Help You!</h2>
                    <p>labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
        </div>

    )
}

export default ServiceSidebar;
