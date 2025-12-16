import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar'
import MobileMenu from '../MobileMenu/MobileMenu'
import Services from '../../api/service'
import { useRouter } from 'next/router';


const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const router = useRouter();
    const isActive = (href) => {
        const path = router.pathname || '';
        return path === href || (href !== '/' && path.startsWith(href));
    };
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <>
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
                                    <Link onClick={ClickHandler} href="/" className="navbar-brand">
                                        <div className="brand-logo">
                                            <Image
                                                src={props.Logo || "/images/logo.png"}
                                                alt="Plumbring logo"
                                                fill
                                                sizes="(max-width: 991px) 220px, 280px"
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
                            <Link onClick={ClickHandler} href="/" className={`nav-link-modern ${isActive('/') ? 'active' : ''}`}>Home</Link>
                        </li>
                        <li>
                            <Link onClick={ClickHandler} href="/about" className={`nav-link-modern ${isActive('/about') ? 'active' : ''}`}>About</Link>
                        </li>
                        <li className="menu-item-has-children">
                            <Link onClick={ClickHandler} href="/service" className={`nav-link-modern ${isActive('/service') ? 'active' : ''}`}>Services</Link>
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
                        
                                            
                                            
                                        <li>
                                            <Link onClick={ClickHandler} href="/contact" className={`nav-link-modern ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
                                        </li>
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
        <style jsx>{`
          .navigation-holder .navbar-nav {
            display: flex;
            gap: 14px;
            align-items: center;
          }
          .navigation-holder .nav-link-modern {
            padding: 8px 12px;
            border-radius: 999px;
            font-weight: 500;
            color: #0b1a2b;
            transition: background-color 150ms ease, color 150ms ease, box-shadow 150ms ease;
          }
          .navigation-holder .nav-link-modern:hover {
            background: #f3f7ff;
            color: #0d6efd;
            box-shadow: 0 0.25rem 0.75rem rgba(13,110,253,0.08);
          }
          .navigation-holder .nav-link-modern.active {
            background: #e8f0ff;
            color: #0d6efd;
          }
          .navigation-holder .menu-item-has-children > .nav-link-modern {
            position: relative;
          }
          .navigation-holder .menu-item-has-children:hover > .sub-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
          .navigation-holder .sub-menu {
            opacity: 0;
            visibility: hidden;
            transform: translateY(6px);
            transition: all 150ms ease;
            border-radius: 12px;
            padding: 8px 10px;
            box-shadow: 0 0.75rem 1.25rem rgba(0,0,0,0.08);
            background: #fff;
          }
          .navigation-holder .sub-menu li a {
            display: block;
            padding: 8px 12px;
            border-radius: 8px;
            color: #0b1a2b;
          }
          .navigation-holder .sub-menu li a:hover {
            background: #f3f7ff;
            color: #0d6efd;
          }
        `}</style>
        </>
    )
}

export default Header;
