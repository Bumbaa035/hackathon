import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import Statistics from '../components/home/Statistics';
import HowItWorks from '../components/home/HowItWorks';
import Contact from '../components/shared/Contact';
//import { useAuth } from '../context/authContext';

const Home = () => {
  //const { currentUser } = useAuth()
  return (
    <div>
      <Hero />
      <Features />
      <Statistics />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      {/* <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div> */}
    </div>
  );
};

export default Home; 