import React, { useEffect, useRef, useState } from 'react';

const Features = (props) => {
    const wrapRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = wrapRef.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const delays = ['0.12s', '0.28s', '0.44s'];

    return (
        <section className={`wpo-features-section ${props.fClass}`}>
            <div className="container">
                <div
                    ref={wrapRef}
                    className={`wpo-features-wrap ${inView ? 'animated zoomInDown' : ''}`}
                    style={{
                        opacity: inView ? 1 : 0,
                        animationDuration: inView ? '700ms' : undefined,
                        animationDelay: inView ? '0.02s' : undefined,
                        animationFillMode: inView ? 'both' : undefined,
                    }}
                >
                    <div className="row align-items-center justify-content-between">
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-6">
                            <div
                                className={`wpo-features-item ${inView ? 'animated bounceInUp' : ''}`}
                                style={{
                                    animationDelay: inView ? delays[0] : undefined,
                                    animationDuration: inView ? '750ms' : undefined,
                                    animationFillMode: inView ? 'both' : undefined,
                                }}
                            >
                                <div
                                    className={`wpo-features-icon ${inView ? 'animated rotateIn' : ''}`}
                                    style={{
                                        animationDelay: inView ? delays[0] : undefined,
                                        animationDuration: inView ? '700ms' : undefined,
                                        animationFillMode: inView ? 'both' : undefined,
                                    }}
                                >
                                    <img src='/images/icon/calendar.svg' alt=""/>
                                </div>
                                <div className="wpo-features-text">
                                    <h4
                                        className={inView ? 'animated lightSpeedIn' : ''}
                                        style={{
                                            animationDelay: inView ? `calc(${delays[0]} + 0.08s)` : undefined,
                                            animationDuration: inView ? '650ms' : undefined,
                                            animationFillMode: inView ? 'both' : undefined,
                                        }}
                                    >
                                        Book Online
                                    </h4>
                                </div>
                            </div>
                            <div
                                className="angle"
                            >
                                <img
                                    className={inView ? 'animated rotateInDownLeft' : ''}
                                    style={{
                                        animationDelay: inView ? `calc(${delays[0]} + 0.02s)` : undefined,
                                        animationDuration: inView ? '600ms' : undefined,
                                        animationFillMode: inView ? 'both' : undefined,
                                    }}
                                    src='/images/icon/6.png'
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-6">
                            <div
                                className={`wpo-features-item active ${inView ? 'animated bounceInUp' : ''}`}
                                style={{
                                    animationDelay: inView ? delays[1] : undefined,
                                    animationDuration: inView ? '750ms' : undefined,
                                    animationFillMode: inView ? 'both' : undefined,
                                }}
                            >
                                <div
                                    className={`wpo-features-icon ${inView ? 'animated rotateIn' : ''}`}
                                    style={{
                                        animationDelay: inView ? delays[1] : undefined,
                                        animationDuration: inView ? '700ms' : undefined,
                                        animationFillMode: inView ? 'both' : undefined,
                                    }}
                                >
                                    <img src='/images/icon/express-delivery.svg' alt=""/>
                                </div>
                                <div className="wpo-features-text">
                                    <h4
                                        className={inView ? 'animated lightSpeedIn' : ''}
                                        style={{
                                            animationDelay: inView ? `calc(${delays[1]} + 0.08s)` : undefined,
                                            animationDuration: inView ? '650ms' : undefined,
                                            animationFillMode: inView ? 'both' : undefined,
                                        }}
                                    >
                                        We Arrive
                                    </h4>
                                </div>
                            </div>
                            <div className="angle">
                                <img
                                    className={inView ? 'animated rotateInDownRight' : ''}
                                    style={{
                                        animationDelay: inView ? `calc(${delays[1]} + 0.02s)` : undefined,
                                        animationDuration: inView ? '600ms' : undefined,
                                        animationFillMode: inView ? 'both' : undefined,
                                    }}
                                    src='/images/icon/6.png'
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-12">
                            <div
                                className={`wpo-features-item ${inView ? 'animated bounceInUp' : ''}`}
                                style={{
                                    animationDelay: inView ? delays[2] : undefined,
                                    animationDuration: inView ? '750ms' : undefined,
                                    animationFillMode: inView ? 'both' : undefined,
                                }}
                            >
                                <div
                                    className={`wpo-features-icon ${inView ? 'animated rotateIn' : ''}`}
                                    style={{
                                        animationDelay: inView ? delays[2] : undefined,
                                        animationDuration: inView ? '700ms' : undefined,
                                        animationFillMode: inView ? 'both' : undefined,
                                    }}
                                >
                                    <img src='/images/icon/prototype.svg' alt=""/>
                                </div>
                                <div className="wpo-features-text">
                                    <h4
                                        className={inView ? 'animated lightSpeedIn' : ''}
                                        style={{
                                            animationDelay: inView ? `calc(${delays[2]} + 0.08s)` : undefined,
                                            animationDuration: inView ? '650ms' : undefined,
                                            animationFillMode: inView ? 'both' : undefined,
                                        }}
                                    >
                                        Solve Problem
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Features;
