import React from 'react';
import Hero from './components/Hero';
import AboutTimeline from './components/AboutTimeline';
import Highlights from './components/Highlights';
import InteractiveSections from './components/InteractiveSections';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-black font-['Inter','IBM_Plex_Sans','Manrope',system-ui] text-white">
      <Hero />
      <AboutTimeline />
      <Highlights />
      <InteractiveSections />
      <Footer />
    </div>
  );
};

export default App;
