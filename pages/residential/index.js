import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import About from '../../components/about/about';
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';
import Features from '../../components/Features/Features';
import FunFact from '../../components/FunFact/FunFact';

const ResidentialPage = () => {
  return (
    <div>
      <Navbar />
      <PageTitle pageTitle={'Residential Plumbing'} pagesub={'Residential'} />
      <Features fClass={'section-padding'} />
      <About />
      <ServiceSection2 sClass={'pt-0'} />
      <FunFact />
      <Footer />
      <Scrollbar />
    </div>
  );
};

export default ResidentialPage;