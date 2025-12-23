import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import About from '../../components/about/about';
import FunFact from '../../components/FunFact/FunFact';
import Testimonial from '../../components/Testimonial/Testimonial';
import ServiceSection from '../../components/ServiceSection/ServiceSection';

const AboutPage = (props) => {

    return (
        <div>
            <Navbar/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About/>
            <ServiceSection/> 
            <FunFact/> 
            <Testimonial/> 
            <Footer/>
            <Scrollbar />
        </div>
    )
};
export default AboutPage;


