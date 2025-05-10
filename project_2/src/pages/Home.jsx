import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import HowItWorks from '../components/home/HowItWorks';
import Contact from '../components/shared/Contact';
import { useAuth } from '../context/authContext';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Statistics />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home; 