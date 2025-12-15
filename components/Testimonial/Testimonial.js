import React from "react";
import Slider from "react-slick";
import SectionTitle from "../SectionTitle";


const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const testimonial = [
    {
        Des: "Emergency leak fixed same‑day. Tech was clean, courteous, and explained options up front. Price was fair and work looks great.",
        Title: 'Robert William',
        Sub: "Rancho Cucamonga",
        Rating: 5,
    },
    {
        Des: "Cleared our main line without upselling. Booked online and they arrived on time — super professional and quick.",
        Title: 'Ken Williamson',
        Sub: "Ontario",
        Rating: 5,
    },
    {
        Des: "Replaced our water heater and hauled away the old one. Transparent pricing and no surprises. Highly recommend.",
        Title: 'David Miller',
        Sub: "Riverside",
        Rating: 5,
    },
    {
        Des: "Installed a cleanout and solved a recurring clog. They left the area spotless and tested everything before leaving.",
        Title: 'Sarah Lopez',
        Sub: "Corona",
        Rating: 5,
    },
]

const Testimonial = () => {
    return (
        <section className="wpo-testimonials-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <SectionTitle 
                            MainTitle={'What People’s Say'} 
                            Description={'Real feedback from homeowners and businesses we’ve helped—emergency leaks fixed fast, drains cleared, water heaters installed, and routine maintenance done right. Trusted plumbing service with transparent pricing and dependable results.'}
                        />
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-12 col-lg-12">
                        <div className="testimonials-wrapper owl-carousel">
                            <Slider {...settings}>
                                {testimonial.map((tesmnl, tsm) => (
                                    <div className="testimonials-item" key={tsm}>
                                        <div className="testimonials-item-top">
                                            <p>{tesmnl.Des}</p>
                                        </div>
                                        <div className="testimonials-item-bottom">
                                            <div className="author-meta">
                                                <div className="avatar-letter" aria-hidden="true">
                                                    {tesmnl.Title.charAt(0)}
                                                </div>
                                                <div className="author-text">
                                                    <h3>{tesmnl.Title}</h3>
                                                    <span>{tesmnl.Sub}</span>
                                                </div>
                                            </div>
                                            <ul className="rating" aria-label={`${tesmnl.Rating} out of 5 stars`}>
                                                {Array.from({ length: 5 }).map((_, i) => {
                                                    const filled = Math.floor(tesmnl.Rating || 0);
                                                    const hasHalf = (tesmnl.Rating || 0) - filled >= 0.5;
                                                    const isFull = i < filled;
                                                    const isHalf = i === filled && hasHalf;
                                                    const starPath = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";
                                                    if (isHalf) {
                                                        const clipId = `halfStarClip-${tsm}-${i}`;
                                                        return (
                                                            <li key={i} className="on half" aria-hidden="true">
                                                                <svg width="16" height="16" viewBox="0 0 24 24">
                                                                    <path d={starPath} fill="#c9d6ff"/>
                                                                </svg>
                                                                <svg width="16" height="16" viewBox="0 0 24 24" style={{position:'absolute',left:0,top:0}}>
                                                                    <defs>
                                                                        <clipPath id={clipId}>
                                                                            <rect x="0" y="0" width="12" height="24" />
                                                                        </clipPath>
                                                                    </defs>
                                                                    <path d={starPath} fill="#f4b81c" clipPath={`url(#${clipId})`} />
                                                                </svg>
                                                            </li>
                                                        );
                                                    }
                                                    return (
                                                        <li key={i} className={isFull ? 'on' : ''} aria-hidden="true">
                                                            <svg width="16" height="16" viewBox="0 0 24 24">
                                                                <path d={starPath} fill={isFull ? '#f4b81c' : '#c9d6ff'}/>
                                                            </svg>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
