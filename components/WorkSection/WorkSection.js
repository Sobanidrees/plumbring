import React from 'react'
import Link from 'next/link'
const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const WorkSection = (props) => {
    const [inView, setInView] = React.useState(false);
    const wrapRef = React.useRef(null);

    React.useEffect(() => {
        if (!wrapRef.current) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.25 }
        );
        observer.observe(wrapRef.current);
        return () => observer.disconnect();
    }, []);

    const itemClass = (idx) => inView ? 'wpo-work-item animated fadeInUp' : 'wpo-work-item';
    const itemStyle = (idx) => inView ? { animationDelay: `${idx * 0.18}s`, animationDuration: '650ms' } : {};
    const iconClass = (idx) => inView ? 'animated zoomIn' : '';
    const iconStyle = (idx) => inView ? { animationDelay: `${idx * 0.18 + 0.1}s`, animationDuration: '500ms' } : {};
    const textClass = (idx) => inView ? 'animated fadeIn' : '';
    const textStyle = (idx) => inView ? { animationDelay: `${idx * 0.18 + 0.2}s`, animationDuration: '600ms' } : {};

    return (
        <section className="wpo-work-section">
            <div className="container">
                <div ref={wrapRef} className={`wpo-work-wrap ${inView ? 'animated fadeIn' : ''}`}
                     style={inView ? { animationDuration: '500ms' } : {}}>
                    <div className="row">
                        <div className="col col-lg-6 col-md-6 col-12">
                            <div className={itemClass(0)} style={itemStyle(0)}>
                                <div className="wpo-work-icon">
                                    <img className={iconClass(0)} style={iconStyle(0)} src='/images/icon/7.png' alt=""/>
                                </div>
                                <div className="wpo-work-text">
                                    <h2 className={textClass(0)} style={textStyle(0)}>
                                        <Link onClick={ClickHandler} href="/service">Commercial Plumbing</Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-12">
                            <div className={itemClass(1)} style={itemStyle(1)}>
                                <div className="wpo-work-icon">
                                    <img className={iconClass(1)} style={iconStyle(1)} src='/images/icon/8.png' alt=""/>
                                </div>
                                <div className="wpo-work-text">
                                    <h2 className={textClass(1)} style={textStyle(1)}>
                                        <Link onClick={ClickHandler} href="/service">Residential Plumbing</Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkSection;