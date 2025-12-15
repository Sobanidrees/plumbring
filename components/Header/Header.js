import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar'
import MobileMenu from '../MobileMenu/MobileMenu'
import Services from '../../api/service'


const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header" className={props.topbarNone}>
            <HeaderTopbar />
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} href="/home" className="navbar-brand">
                                        <div className="brand-logo">
                                            <Image
                                                src={props.Logo || "/images/logo.png"}
                                                alt="Plumbring logo"
                                                fill
                                                sizes="(max-width: 991px) 200px, 240px"
                                                priority
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                        <li>
                            <Link onClick={ClickHandler} href="/home">Home</Link>
                        </li>
                        <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                        <li className="menu-item-has-children">
                            <Link onClick={ClickHandler} href="/service">Services</Link>
                            <ul className="sub-menu">
                                {Services.map((service, idx) => (
                                    <li key={idx}>
                                        <Link onClick={ClickHandler} href={`/service/${service.slug}`}>
                                            {service.sTitle}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        
                                        
                                        
                                        <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <a href="tel:+17148635486" aria-label="Call 714-863-5486" className="phone-cta">
                                        <i className="fi flaticon-phone-call"></i>
                                        <span>714-863-5486</span>
                                    </a>
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`ti-search ${menuActive ? "ti-close" : "ti-search"}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi ti-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="close-form">
                                        <Link onClick={ClickHandler} href="/contact" className="theme-btn">GET FREE QUOTE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
