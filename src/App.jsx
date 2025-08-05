import React from 'react';
import './App.css';  // <-- This line connects CSS

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';  // <-- Import ScrollToTopButton
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>

      {/* Scroll To Top Floating Button */}
      <ScrollToTopButton />

      <Footer />
    </div>
  );
}

export default App;
