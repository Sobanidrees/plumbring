import React from "react";
import Link from 'next/link'
import VideoModal from '../ModalVideo/VideoModal'

const Hero3 = () => {
    return (
        <section className="wpo-hero-section-2">
            <div className="container">
                <div className="row">
                    {/* Place content on the left without offset for clearer alignment */}
                    <div className="col col-lg-5 col-12">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-subtitle">
                                <span>:: Local Plumbing Pros</span>
                            </div>
                            <div className="wpo-hero-title">
                                <h2>Trusted Local Plumbers — <span>24/7 Emergency Service</span>.</h2>
                            </div>
                            <div className="wpo-hero-des">
                                <p>Same-day service, honest pricing, and spotless work from certified plumbers.</p>
                            </div>
                            <div className="btns">
                                <ul>
                                    <li>
                                        <Link href="/appointment" className="theme-btn">BOOK ONLINE</Link>
                                    </li>
                                    <li>
                                        <Link href="tel:+17148635486" className="theme-btn-s2">Call 714-863-5486</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                </div>
            </div>
        </section>
    )
}



export default Hero3;
