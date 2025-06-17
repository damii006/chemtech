import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../resources/logo.png';
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav>
      <div className='logo'>
        <Link to="/" onClick={closeMenu}>
        <img src={logo} alt="Chemtech Group Logo" className='logo-img' />
        </Link>
      </div>
      
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`right-nav ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <Link to="/" onClick={closeMenu} className='link-style'>
          <div className='nav-item'>
            <p className={`nav-tab ${isActive('/') ? 'active' : ''}`}>Homepage</p>
          </div>
        </Link>
        <Link to="/company" onClick={closeMenu} className='link-style'>          
          <div className='nav-item'>
            <p className={`nav-tab ${isActive('/company') ? 'active' : ''}`}>The Company</p>
          </div>
        </Link>

        <div className='nav-item' onClick={closeMenu} >
          <p className='nav-tab'>Gallery</p>
        </div>

       <Link to="/contact" onClick={closeMenu}className='link-style'>
        <div className='nav-item' onClick={closeMenu}>
          <p className={`nav-tab ${isActive('/contact') ? 'active' : ''}`}>Contact Us</p>
        </div>
       </Link>
      </div>

      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
}

export default Navbar;