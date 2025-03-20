import React from 'react';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import VideoSection from './components/VideoSection';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="relative">
      <Hero />
      <ImageCarousel />
      <VideoSection />
      <WhyChooseUs />
      <Services />
      <Clients />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}

export default App;