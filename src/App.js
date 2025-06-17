import React from 'react';
import { useNavigate } from 'react-router-dom';
import Partners from './components/partners';
import './App.css';


const SubsidiaryCard = ({ title, details, onClick }) => {
  return (
    <article className="subsidiary-card" onClick={onClick}>
      <h3 className="card-title">{title}</h3>
      <p className="card-details">{details}</p>
      <div className="card-footer">
        Learn More &rarr;
      </div>
    </article>
  );
};

const HeroSection = () => {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Chemtech Group</h1>
        <p className="hero-subtitle">
          A holding name for an indigenous conglomerate of 5 vibrant member companies, unified under the leadership of our founder, Alhaji Isiaka Adebayo Jimoh.
        </p>
        <button className='btn btn-primary'>
          Learn More
        </button>
      </div>
    </header>
  );
};

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="section-title">Exceptional quality is the key to our business</h2>
        <p>
          Chemtech Groups is dedicated to providing the highest quality products, services, and technical information to our customers. Exceptional quality starts with people wanting to be the best and comes from dedicated teamwork.
        </p>
        <button className='btn btn-secondary'>
          <span>ABOUT US</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
        </button>
      </div>
      <figure className="about-image">
        {/* This is a placeholder for a real image */}
      </figure>
    </section>
  );
};

const SubsidiariesSection = ({ subsidiaries, navigate }) => {
  return (
    <section className="subsidiaries-section">
      <h2 className="section-title">Our Subsidiaries</h2>
      <div className="subsidiaries-grid">
        {subsidiaries.map((sub, index) => (
          <SubsidiaryCard 
            key={index}
            title={sub.title}
            details={sub.details}
            onClick={() => navigate(sub.link)}
          />
        ))}
      </div>
    </section>
  );
};


function App() {
  const navigate = useNavigate();

  const subsidiaries = [
    {
      title: "Chemtech Chemicals Limited",
      details: "Specializing in Manufacturer Representation, Supply and Distribution of Chemicals, Lubricating oil & Grease additives, and Industrial/Agro-allied chemicals.",
      link: "/chemical"
    },
    {
      title: "Delight Energy Limited",
      details: "A key player in the energy sector, focusing on reliable and sustainable energy solutions and distribution.",
      link: "/energy"
    },
    {
      title: "Global Trust Investment",
      details: "Offering robust investment and financial services, building wealth and opportunities across various sectors.",
      link: "/investment"
    }
  ];

  return (
    <div className="app-container">
      <HeroSection />
      <AboutSection />
      <SubsidiariesSection subsidiaries={subsidiaries} navigate={navigate} />
      <Partners />
    </div>
  );
}

export default App;