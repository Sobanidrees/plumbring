import React from 'react';
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



const HomePage = (props) => {

    return (
        <div>
            <Navbar topbarBlock={'wpo-header-style-2'} Logo={'/images/logo.png'} />
            <EmergencyBanner />
            <Hero />
            <QuickQuote />
            <Features />
            <WorkSection />
            <HomeServicesGrid />
            <PromotionsSection />
            <WhyChoose />
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


