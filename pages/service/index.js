import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import CommercialBrands from '../../components/CommercialBrands/CommercialBrands';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const ServicePage = (props) => {

    return (
        <div>
            <Navbar/>
            <PageTitle pageTitle={'Service'} pagesub={'Service'}/> 
            <ServiceSection/>
            <CommercialBrands/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default ServicePage;


