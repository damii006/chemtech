import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Company from './pages/company';
import ContactPage from './pages/contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chemical from './pages/chemical';
import Gallery from './pages/gallery';

function Root() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/chemical" element={<Chemical />} />
        <Route path="/gallery" element={<Gallery />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default Root;
