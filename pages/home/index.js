import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Features from '../../components/Features/Features';
import WorkSection from '../../components/WorkSection/WorkSection';
import HomeServicesGrid from '../../components/HomeServicesGrid/HomeServicesGrid';
import PromotionsSection from '../../components/PromotionsSection/PromotionsSection';
import FunFact from '../../components/FunFact/FunFact';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import ServiceAreas from '../../components/ServiceAreas/ServiceAreas';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Appointment from '../../components/Appointment/Appointment';
import Footer from '../../components/footer/Footer';
import Testimonial from '../../components/Testimonial/Testimonial';
import WhatsAppFab from '../../components/WhatsAppFab/WhatsAppFab';



const HomePage = (props) => {

    return (
        <div>
            <Navbar topbarBlock={'wpo-header-style-2'} Logo={'/images/logo2.png'} />
            <Hero />
            <Features />
            <WorkSection />
            <HomeServicesGrid />
            <PromotionsSection />
            <WhyChoose />
            {/* <ServiceAreas /> */}
            <FunFact />
            <ProjectSection />
            <Appointment />
            <Testimonial />
            <Footer />
            <Scrollbar/>
            <WhatsAppFab phone="+17148635486" message="Hi! I need plumbing help. Can you assist?" />
        </div>
    )
};
export default HomePage;
