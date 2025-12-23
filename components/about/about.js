import React from 'react'


const About = (props) => {
    return(
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <img src='/images/slider/right-img.png' alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-12">
                            <div className="wpo-about-content">
                                <div className="wpo-section-title-s2">
                                    <h2>Over 25+ Years Experience
                                        In Plumbing Service</h2>
                                </div>
                                <div className="wpo-about-content-inner">
                                    <p>We are a trusted, locally owned plumbing company dedicated to providing top-quality service to our community. With over two decades of experience, we handle everything from emergency repairs to comprehensive installations with professionalism and care.</p>
                                    <p>Our team of licensed and insured experts is committed to delivering fast, reliable solutions. We pride ourselves on upfront pricing, excellent workmanship, and customer satisfaction. Whether it's a leaky faucet or a major renovation, you can count on us to get the job done right.</p>
                                    <div className="signeture">
                                        <h4>Mike</h4>
                                        <p>MB Plumbing Services, CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;