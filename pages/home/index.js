import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Features from '../../components/Features/Features';
import WorkSection from '../../components/WorkSection/WorkSection';
import HomeServicesGrid from '../../components/HomeServicesGrid/HomeServicesGrid';
import FunFact from '../../components/FunFact/FunFact';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import ServiceAreas from '../../components/ServiceAreas/ServiceAreas';
import CTA from '../../components/CTA/CTA';
import TeamSection from '../../components/TeamSection/TeamSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Appointment from '../../components/Appointment/Appointment';
import Footer from '../../components/footer/Footer';
import Testimonial from '../../components/Testimonial/Testimonial';



const HomePage = (props) => {

    return (
        <div>
            <Navbar topbarBlock={'wpo-header-style-2'} Logo={'/images/logo.png'} />
            <Hero />
            <Features />
            <WorkSection />
            <HomeServicesGrid />
            <WhyChoose />
            <ServiceAreas />
            <FunFact />
            <ProjectSection />
            <TeamSection />
            <CTA />
            <Appointment />
            <Testimonial />
            <Footer />
            <Scrollbar/>
        </div>
    )
};
export default HomePage;