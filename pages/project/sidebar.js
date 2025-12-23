import React from 'react'
import Services from '../../api/service';
import Link from  'next/link'

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return (
        <div className="col-lg-4 col-md-8">
            <div className="wpo-single-sidebar">
                <div className="wpo-service-widget widget">
                    <h2>All Services</h2>
                    <ul>
                        {Services.slice(0,6).map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>{service.sTitle}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                    <h2>How We Can <br/> Help You!</h2>
                    <p>Our expert plumbers are ready to tackle any issue, from leaks to installations. We offer 24/7 emergency service, transparent pricing, and guaranteed satisfaction. Contact us today for a free quote!</p>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
        </div>

    )
}

export default ServiceSidebar;