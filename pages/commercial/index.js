import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Features from '../../components/Features/Features';
import FunFact from '../../components/FunFact/FunFact';

const CommercialPage = () => {
  return (
    <div>
      <Navbar />
      <PageTitle pageTitle={'Commercial Plumbing'} pagesub={'Commercial'} />
      <Features fClass={'section-padding'} />
      <About />
      <ServiceSection />
      <FunFact />
      <Footer />
      <Scrollbar />
    </div>
  );
};

export default CommercialPage;