import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div>
        <h2>Chemtech</h2>
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
        <Link to="/" onClick={closeMenu}>
          <div className='nav-item'>
            <p className='nav-tab'>Homepage</p>
          </div>
        </Link>
        <Link to="/company" onClick={closeMenu}>          
          <div className='nav-item'>
            <p className='nav-tab'>The Company</p>
          </div>
        </Link>


        <div className='nav-item' onClick={closeMenu}>
          <p className='nav-tab'>Gallery</p>
        </div>

       <Link to="/contact" onClick={closeMenu}>
        <div className='nav-item' onClick={closeMenu}>
          <p className='nav-tab'>Contact Us</p>
        </div>
       </Link>
      </div>

      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
}

export default Navbar;