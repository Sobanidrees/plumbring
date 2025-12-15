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
                    <h2>Need Plumbing Help Today?</h2>
                    <p>Live dispatch, licensed techs, and clean, respectful service. Get fast help for leaks, clogs, water heaters, and more — with clear, upfront pricing.</p>
                    <div className="meta-chips">
                        <span className="meta-chip">Same‑day service</span>
                        <span className="meta-chip">Licensed & insured</span>
                        <span className="meta-chip">Upfront pricing</span>
                    </div>
                    <div className="actions">
                        <Link href="/schedule-service" className="theme-btn">Book Online</Link>
                        <Link href="/contact" className="theme-btn-s2 alt">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ServiceSidebar;
