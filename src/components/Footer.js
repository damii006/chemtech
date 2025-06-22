import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../resources/logo.png';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
        <img src={logo} alt="Chemtech Group Logo" className='logo-img' />
          <p>
            Driving excellence across industries with innovation, quality, and integrity.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to='/'>Homepage</Link></li>
            <li><Link to='/company'>Company</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: info@chemtechgroupng.com</p>
          <p>Phone: 234-(0) 803-725-6826</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Chemtech Group. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
