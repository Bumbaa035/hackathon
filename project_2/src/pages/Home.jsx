import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';

import HowItWorks from '../components/home/HowItWorks';
import Contact from '../components/shared/Contact';
import { useAuth } from '../context/authContext';
import MapComponent from '../components/dashboard/Map';
import MapPage from '../components/dashboard/MapPage';
const Home = () => {
  return (
    <MapPage />
  );
};

export default Home; 