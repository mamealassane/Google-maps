// App.js
import React from 'react';
import IntroSection from './components/intro/Intro';
import ContactSection from './components/contact-section/ContactSection';
import Map from './components/map/Maps';
import DisclaimerSection from './components/disclaimer/Disclaimer';
import FooterSection from './components/footer/Footer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />

      <div className="map-container">
        <Map zoomLevel={27} />
      </div>

      <DisclaimerSection />
      <FooterSection />
    </div>
  );
};

export default App;
