import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/hero/Hero';
import Features from '../components/Features/Features';
import WorkSection from '../components/WorkSection/WorkSection';
import HomeServicesGrid from '../components/HomeServicesGrid/HomeServicesGrid';
import PromotionsSection from '../components/PromotionsSection/PromotionsSection';
import WhyChoose from '../components/WhyChoose/WhyChoose';
import FunFact from '../components/FunFact/FunFact';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import ServiceAreas from '../components/ServiceAreas/ServiceAreas';
import Scrollbar from '../components/scrollbar/scrollbar';
import Appointment from '../components/Appointment/Appointment';
import Footer from '../components/footer/Footer';
import Testimonial from '../components/Testimonial/Testimonial';
import EmergencyBanner from '../components/EmergencyBanner/EmergencyBanner';
import QuickQuote from '../components/QuickQuote/QuickQuote';
/* intentionally streamlined: TrustBar and PromoBanner removed from render */
import StickyActionBar from '../components/StickyActionBar/StickyActionBar';
import WhatsAppFloat from '../components/WhatsAppFloat/WhatsAppFloat';
import FinancingSection from '../components/FinancingSection/FinancingSection';
import CommercialBrands from '../components/CommercialBrands/CommercialBrands';



const HomePage = (props) => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "PlumbingService",
        "name": "MB Plumbing",
        "image": "https://www.mbplumbing.net/images/logo2.png",
        "@id": "https://www.mbplumbing.net/#organization",
        "url": "https://www.mbplumbing.net",
        "telephone": "+17148635486",
        "email": "Mike@mbplumbingservices.net",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "417 S.Associated Rd.",
            "addressLocality": "Brea",
            "addressRegion": "CA",
            "postalCode": "92821",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 33.9167,
            "longitude": -117.9001
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.facebook.com/mbplumbing",
            "https://www.instagram.com/mbplumbing"
        ],
        "priceRange": "$$"
    };

    return (
        <div>
            <Head>
                <title>MB Plumbing - Trusted Local Plumbers in Orange County | 24/7 Emergency Service</title>
                <meta name="description" content="Your Local Plumbing Experts. Licensed, bonded, and insured. Same-day service for leaks, clogs, water heaters, and more. Call 714-863-5486 for 24/7 rapid response." />
                <link rel="canonical" href="https://www.mbplumbing.net/" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.mbplumbing.net/" />
                <meta property="og:title" content="MB Plumbing - Trusted Local Plumbers in Orange County" />
                <meta property="og:description" content="Your Local Plumbing Experts. Licensed, bonded, and insured. Same-day service for leaks, clogs, water heaters, and more." />
                <meta property="og:image" content="https://www.mbplumbing.net/images/logo2.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.mbplumbing.net/" />
                <meta property="twitter:title" content="MB Plumbing - Trusted Local Plumbers in Orange County" />
                <meta property="twitter:description" content="Your Local Plumbing Experts. Licensed, bonded, and insured. Same-day service for leaks, clogs, water heaters, and more." />
                <meta property="twitter:image" content="https://www.mbplumbing.net/images/logo2.png" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <Navbar topbarBlock={'wpo-header-style-2'} Logo={'/images/logo2.png'} />
            <EmergencyBanner />
            <Hero />
            <QuickQuote />
            <Features />
            <WorkSection />
            <HomeServicesGrid />
            <PromotionsSection />
            <WhyChoose />
            <CommercialBrands />
            <ServiceAreas />
            <FunFact />
            <ProjectSection />
            <Appointment />
            <Testimonial />
            <FinancingSection />
            
            <Footer />
            <Scrollbar/>
            <WhatsAppFloat />
            <StickyActionBar />
        </div>
    )
};
export default HomePage;


