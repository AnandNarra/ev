import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppToggle from './components/WhatsAppToggle';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import BikesPage from './pages/BikesPage';
import TouristAttractions from './pages/TouristAttractions';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bikes" element={<BikesPage />} />
        <Route path="/attractions" element={<TouristAttractions />} />
      </Routes>
      <Footer />
      <WhatsAppToggle />
    </div>
  );
}

export default App;





