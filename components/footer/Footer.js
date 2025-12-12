import React from 'react'
import Link from "next/link";
import Services from '../../api/service';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <div className="footer-cta">
                <div className="container">
                    <div className="footer-cta-inner">
                        <h3>Need a plumber today?</h3>
                        <Link href="/schedule-service" className="theme-btn">Schedule Service</Link>
                    </div>
                </div>
            </div>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src='/images/logo2.png' alt="blog" />
                                </div>
                                <p>Trusted local experts for residential and commercial plumbing. Fast, friendly, and guaranteed.</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-google"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-location"></i>417 S.Associated Rd. Brea Ca. 92821</li>
                                        <li><i className="fi flaticon-phone-call"></i>714-863-5486</li>
                                        <li><i className="fi flaticon-send"></i>Mike@mbplumbingservices.net</li>
                                        <li><i className="fi flaticon-calendar"></i>Open 24/7</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    <li><Link href="/about"><span>About Us</span></Link></li>
                                    <li><Link href="/residential"><span>Residential</span></Link></li>
                                    <li><Link href="/commercial"><span>Commercial</span></Link></li>
                                    <li><Link href="/pricing"><span>Pricing</span></Link></li>
                                    <li><Link href="/service"><span>Services</span></Link></li>
                                    <li><Link href="/contact"><span>Contact</span></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter">
                                <div className="widget-title">
                                    <h3>Stay in the loop</h3>
                                </div>
                                <p>Get maintenance tips, specials, and service updates straight to your inbox.</p>
                                <form className="newsletter-form" onSubmit={SubmitHandler}>
                                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                                    <input id="newsletter-email" type="email" placeholder="Your email address" required />
                                    <button type="submit" className="theme-btn">Subscribe</button>
                                </form>
                                <small className="newsletter-note">By subscribing, you agree to our <Link href="/terms">Terms</Link>.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> Copyright &copy; 2025 MB Plumbing. All Rights Reserved. <Link href="/terms">Terms</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;