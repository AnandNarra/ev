import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BikeFleet from './components/BikeFleet';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppToggle from './components/WhatsAppToggle';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <BikeFleet />
      <Services />
      <About />
      <Contact />
      <Footer />
      <WhatsAppToggle />
    </div>
  );
}

export default App;



