import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home'
    },

    {
        id: 2,
        title: 'About',
        link: '/about',
    },

    {
        id: 6,
        title: 'Service',
        link: '/service'
    },
    

    

    
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]


const iconFor = (title) => {
    switch (title) {
        case 'Home': return 'ti-home';
        case 'About': return 'ti-info';
        case 'Service': return 'ti-layers';
        case 'Contact': return 'ti-email';
        default: return 'ti-angle-right';
    }
}

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);
    React.useEffect(() => {
        const cls = 'mobilemenu-open';
        if (menuActive) {
            document.body.classList.add(cls);
        } else {
            document.body.classList.remove(cls);
        }
        return () => document.body.classList.remove(cls);
    }, [menuActive]);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            {/* Screen overlay */}
            <div className={`menu-overlay ${menuActive ? 'show' : ''}`} onClick={() => setMenuState(false)} />

            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-header">
                    <div className="brand-mini">
                        <img src="/images/logo.png" alt="Plumbring" />
                    </div>
                    <button className="close-btn" aria-label="Close menu" onClick={() => setMenuState(false)}>
                        <i className="ti-close"></i>
                    </button>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null}  key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p className="menu-link" onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>
                                            <span className="menu-item-icon"><i className={iconFor(item.title)}></i></span>
                                            <span className="menu-item-label">{item.title}</span>
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link className="menu-link" onClick={ClickHandler} href={submenu.link}>
                                                                    <span className="menu-item-label">{submenu.title}</span>
                                                                </Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="menu-link" href={item.link}>
                                        <span className="menu-item-icon"><i className={iconFor(item.title)}></i></span>
                                        <span className="menu-item-label">{item.title}</span>
                                        <i className="fa fa-angle-right"></i>
                                      </Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

                <div className="mobile-cta">
                    <Link href="/schedule-service" className="theme-btn">Book Online</Link>
                    <a href="tel:7148635486" className="theme-btn s2">Call 714‑863‑5486</a>
                </div>
            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className={`navbar-toggler open-btn ${menuActive ? 'active' : ''}`} aria-label="Toggle menu">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;
