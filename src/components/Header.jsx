import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">VISMIT Radiology Center</h1>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/Home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/appointment">Book Appointment</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
