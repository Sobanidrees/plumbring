import React from "react";
import Link from 'next/link'
import VideoModal from '../ModalVideo/VideoModal'

const Hero = () => {
    return (
        <section className="wpo-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xl-4 col-lg-5 col-12">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-subtitle">
                                <span>:: Local Plumbing Pros</span>
                            </div>
                            <div className="wpo-hero-title">
                                <h2>Trusted Local Plumbers — <span>24/7 Emergency Service</span>.</h2>
                            </div>
                            <div className="d-flex flex-wrap gap-2 mb-3">
                                <span className="badge bg-primary">Licensed & Insured</span>
                                <span className="badge bg-success">Upfront Pricing</span>
                                <span className="badge bg-info text-dark">Same-Day Service</span>
                            </div>
                            <div className="wpo-hero-des">
                                <p>Same-day service, honest pricing, and spotless work from certified plumbers.
                                </p>
                            </div>
                            <div className="btns">
                                <ul>
                                    <li>
                                        <Link href="/appointment" className="btn theme-btn">BOOK ONLINE</Link>
                                    </li>
                                    <li>
                                        <Link href="tel:+17148635486" className="btn theme-btn-s2">Call 714-863-5486</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <div className="r-img">
                        <img src='/images/slider/right-img.png' alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Hero;
