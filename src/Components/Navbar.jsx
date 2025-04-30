import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>WeatherX</h1>
        </div>
       
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <i 
            id='i1' 
            className={isMenuOpen ? "ri-close-line" : "ri-menu-line"} 
            onClick={toggleMenu}
          ></i>
        </ul>
      </nav>

      <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
  <i 
    className="ri-close-line sidebar-close-btn" 
    onClick={toggleMenu}
  ></i>
  <div className="sidebar-content">
    <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
    <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
  </div>
</div>
      
      {/* Overlay when sidebar is open */}
      {isMenuOpen && <div className="sidebar-overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;