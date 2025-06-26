import React, { useState } from 'react';
import adetoyeshe from '../resources/adetoyeshe.jpg';
import ehunmose from '../resources/ehunmose.jpg';
import chiekweta from '../resources/chiekweta.jpg';
import murtala from '../resources/murtala.jpg';
import waheed from '../resources/waheed.jpg';
import nike from '../resources/nike.jpg'


const OrgNode = ({ title, name, onNameClick }) => {
  return (
    <div className="org-node">
      <div className="org-node-title">{title}</div>
      {name && (
        <button 
          className="org-node-name clickable-name" 
          onClick={() => onNameClick(name)}
        >
          {name}
        </button>
      )}
    </div>
  );
};

const PersonModal = ({ person, staffDetails, isOpen, onClose }) => {
  if (!isOpen || !person) return null;

  const personData = staffDetails[person] || {
    title: "Position Title",
    image: "[Add image URL]",
    bio: "[Add biography here]"
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{person}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <div className="profile-section">
            <div className="profile-image-container">
              <img 
                src={personData.image} 
                alt={person}
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="profile-placeholder">
                <div className="placeholder-icon">👤</div>
                <span>Add Photo</span>
              </div>
            </div>
            <div className="profile-info">
              <h2 className="profile-name">{person}</h2>
              <p className="profile-title">{personData.title}</p>
            </div>
          </div>
          
          <div className="bio-section">
            <p className="bio-text">
              {personData.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrgChart = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const staffDetails = {
    "ALHAJI ISIAKA JIMOH.": {
      title: "Managing Director/ Executive Vice Chairman",
      image: "[Add image URL for Alhaji Isiaka Jimoh]",
      bio: "Alhaji Isiaka Jimoh is the entrepreneur behind the Company and all the activities. He is the Chief Executive of the company responsible for the day-to-day running of the organization and its associated services.  He holds a University degree in Science Laboratory Technology, MBA in Marketing and DBA in International Business Management.He had been in Lubricant Industry since 1986.He was formerly with Texaco Nigeria Plc as Laboratory Technologist from where he moved to Ibeto Petrochemical Industries Limited as the pioneer Laboratory Manager.  He is a member of Technical Committee on Standard for Petroleum Product with Standard Organization of Nigeria and He is Quality Lead Audit ISO 9001-2000 and a member of American Society for Testing and Material (ASTM) International."
    },
    "MRS. OGE NKEM CHIEKWETA.": {
      title: "Group General Manager", 
      image: [chiekweta],
      bio: "Mrs. Oge Nkem Chiekweta is currently the Group General Manager. She is in charge of Marketing and Operation of the Company. She has a Bachelor of Science and Technology degree in Industrial Chemistry from the Federal University of Technology, Owerri Imo State, and master’s degree (MSc). Analytical Chemistry from University of Lagos, Akoka, Lagos. She has over 25 years of extensive experience in the downstream sector of Petroleum Industry. She started her career as an attaché Chemist with Mobil Oil Nig. Plc, Apapa complex and her National Youth Service Scheme with Texaco Nig. Plc, Apapa Installation now MRS. She was the pioneer Assistant Chemist in Ibeto Petrochemicals Industries Limited, Nnewi, Anambra State. She joined Grand Petroleum and Chemicals Limited, Amuwo Odofin as the pioneer Plant Chemist before joining Delight as pioneer Marketing Manager where she now rose to the position of General Manager Delight Energy Ltd, she is currently combining her supervisory roles as OPS and Marketing Head, Delight Energy Ltd. Mrs. Oge is happily married."
    },
    "MURITALA ADEYEWA": {
      title: "HEAD MAINTENANCE",
      image: [murtala], 
      bio: "Mr Adeyewa A.Murtala is currently the Maintenance Manager of the group and has been a member since March 2007.He was born on the 20th of January,1972.He obtained his first Ordinary National Diploma in Electrical/Electronics from Abraham Adesanya polytechnic ljebu-Igbo, Ogun State Nigeria.He is happily married with kids."
    },
    "LASISI DAUDA ADETOYESE": {
      title: "Company Accountant (Delight)",
      image: [adetoyeshe], 
      bio: "Lasisi Dauda Adetoyeshe was born on the 15th of March 1982 Had his OND in accounting at Moshood Abiola Polytechnic and BSc in Accounting at University of Lagos. Started his career with Chemtech Chemicals Ltd as Account officer in 2005. He Joined Delight Energy Ltd as the Accountant in 2010, He then rose to be the Group Treasury Manager. Currently working as the Company Accountant. Married with Children."
    },
    "EHUNMOSE AKINWALE OLUJIMI": {
      title: "Administrative Manager (Delight)",
      image: [ehunmose],
      bio: "Ehunmose Akinwale Olujimi hails from Ondo State, Okitipupa local government area. He obtained his National Diploma in Secretarial studies from The FederalPolytechnic Bida, Niger State and his first degree in Banking and Finance fromOlabisi Onabanjo University, Ogun State in 2000 and 2008 respectively. Healso obtained his P.G.D.E in 2015. He began his working career with Chemtech Chemicals Limited in January 2013 asan Account Officer briefly and later redeployed to Administrative Departmentsame year in Chemtech Group of Companies where he served in the capacity asthe Administrative Officer up until March 2016. By April 2016, he wasredeployed to Delight Energy Limited, a subsidiary of Chemtech Group ofCompanies as Deputy Warehouse Manager.He is currently the Administrative/Human Resources Manager of Delight EnergyLimited.He is happily married with children."
    },
    "MRS NIKE OYEKANMI EJEM": {
      title: "Company Secretary/Executive Assistant",
      image: [nike],
      bio: "Nike Oyekanmi is the Company Secretary and Executive Assistance for the group, she is Chartered Secretary and ICSA qualified. She Obtained Ordinary National Diploma in Marketing from Institute of Management and Technology, Enugu. She Joined the Group in March 2017 and has been responsible for the executive activities of the company. She earlier worked with Traditional New Concept 2016 as Business Manager, G1 International Partners between March 2013 and October 2015 as Business Development Manager.Nike is happily married with Children."
    },
    "WAHEED OLALEKAN JIMOH": {
      title: "Logistics & Procurement",
      image: [waheed],
      bio: "Mr. Waheed Olalekan Jimoh is the Logistic and Procurements Manager of the Group and has been a member of the group since June, 2007. He was born on the 5th of April, 1981. He Obtained his first Ordinary National Diploma in Electrical/Electronics from Osun state polytechnic, Osun. He also has a Higher National Diploma in Computer Engineering from Osun state polytechnic, Osun. He had his youth service in Shogom LGA, Gombe state. He also possesses a NIIT (MCSE) Certificate. He was previously a Computer Science teacher in Gombe before returning to become the current Logistics and Procurement  Manager for the group. He is happily married with children."
    }
  };

  const handleNameClick = (name) => {
    setSelectedPerson(name);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPerson(null);
  };

  return (
    <div className="org-chart-container">
      <style jsx>{`
        .org-chart-container {
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          background-color: #f0f0f0;
        }

        .org-chart-row {
          display: flex;
          width: 100%;
          max-width: 800px; 
          margin-bottom: 15px;
          justify-content: center;
        }

        .org-chart-row.main-title {
          margin-bottom: 30px; 
        }

        .column-left,
        .column-right {
          flex: 1;
          display: flex;
          justify-content: center; 
        }

        .org-node {
          background-color: #4CAF50; 
          color: white;
          border-radius: 5px;
          padding: 10px 20px;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          min-width: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 60px; 
          box-sizing: border-box; 
        }

        .org-node .org-node-title {
          font-weight: bold;
          font-size: 0.9em;
          text-transform: uppercase;
        }

        .org-node .org-node-name {
          font-size: 0.8em;
          margin-top: 5px;
        }

        .clickable-name {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          padding: 0;
          font-size: 0.8em;
          margin-top: 5px;
          text-decoration: underline;
          transition: opacity 0.2s ease;
        }

        .clickable-name:hover {
          opacity: 0.8;
        }

        .column-right .org-node {
          background-color: transparent; 
          color: black; 
          border: 2px solid #4CAF50; 
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
          box-shadow: none; 
          padding: 10px 15px;
          min-width: 150px;
          font-weight: 300;
        }

        .column-right .clickable-name {
          color: black;
        }

        .org-chart-row.main-title .org-node {
          width: auto; 
          min-width: 250px;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-content {
          background: white;
          border-radius: 10px;
          max-width: 600px;
          width: 100%;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          animation: modalFadeIn 0.3s ease;
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px 15px 30px;
          border-bottom: 1px solid #eee;
          background-color: #4CAF50;
          color: white;
          border-radius: 10px 10px 0 0;
        }

        .modal-header h2 {
          margin: 0;
          font-size: 1.2em;
        }

        .close-button {
          background: none;
          border: none;
          font-size: 2em;
          color: white;
          cursor: pointer;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background-color 0.2s ease;
        }

        .close-button:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        .modal-body {
          padding: 30px;
        }

        /* Profile Section Styles */
        .profile-section {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
          padding-bottom: 25px;
          border-bottom: 2px solid #4CAF50;
        }

        .profile-image-container {
          position: relative;
          width: 120px;
          height: 120px;
          flex-shrink: 0;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #4CAF50;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .profile-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #f8f9fa;
          border: 3px dashed #4CAF50;
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #4CAF50;
          font-size: 0.9em;
          font-weight: 500;
        }

        .placeholder-icon {
          font-size: 2.5em;
          margin-bottom: 5px;
          opacity: 0.7;
        }

        .profile-info {
          flex: 1;
        }

        .profile-name {
          margin: 0 0 8px 0;
          font-size: 1.8em;
          color: #333;
          font-weight: bold;
        }

        .profile-title {
          margin: 0;
          font-size: 1.1em;
          color: #4CAF50;
          font-weight: 600;
          font-style: normal;
        }

        .detail-section {
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px solid #f0f0f0;
        }

        .detail-section:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .detail-section h3 {
          color: #4CAF50;
          margin: 0 0 10px 0;
          font-size: 1.1em;
          font-weight: bold;
        }

        .detail-section p {
          margin: 0;
          color: #666;
          line-height: 1.6;
          font-style: italic;
        }

        /* Bio Section Styles */
        .bio-section {
          margin-top: 10px;
        }

        .bio-text {
          margin: 0;
          color: #555;
          line-height: 1.7;
          font-size: 1em;
          text-align: justify;
          font-style: italic;
        }

        @media (max-width: 600px) {
          .org-chart-row {
            flex-direction: column;
            align-items: center;
          }

          .column-left,
          .column-right {
            width: 100%;
            margin-bottom: 10px; 
          }

          .modal-content {
            margin: 10px;
            max-height: 90vh;
          }

          .modal-header {
            padding: 15px 20px;
          }

          .modal-body {
            padding: 20px;
          }

          .profile-section {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .profile-image-container {
            width: 100px;
            height: 100px;
            align-self: center;
          }

          .profile-name {
            font-size: 1.5em;
          }
        }
      `}</style>

      <div className="org-chart-row main-title">
        <OrgNode title=" CHAIRMAN" />
      </div>

      <div className="org-chart-row">
        <div className="column-left">
          <OrgNode title="MANANGING DIRECTOR/ EXECUTIVE VICE CHAIRMAN" />
        </div>
        <div className="column-right">
          <OrgNode name="ALHAJI ISIAKA JIMOH." onNameClick={handleNameClick} />
        </div>
      </div>

      <div className="org-chart-row">
        <div className="column-left">
          <OrgNode title="EXECUTIVE DIRECTORS" />
        </div>
        <div className="column-right">
          <OrgNode name="" />
        </div>
      </div>

      <div className="org-chart-row">
        <div className="column-left">
          <OrgNode title="GROUP GENERAL MANAGER" />
        </div>
        <div className="column-right">
          <OrgNode name="MRS. OGE NKEM CHIEKWETA." onNameClick={handleNameClick} />
        </div>
      </div>

      <div className="org-chart-row">
        <div className="column-left">
          <OrgNode title="HEAD MAINTENANCE" />
        </div>
        <div className="column-right">
          <OrgNode name="MURITALA ADEYEWA" onNameClick={handleNameClick} />
        </div>
      </div>

      <div className="org-chart-row">
        <div className="column-left">
          <OrgNode title="GROUP FINANCIAL CONTROLLER" />
        </div>
        <div className="column-right">
          <OrgNode name="" />
        </div>
      </div>

      <div className="org-chart-row">
        <div className="column-left">
          <OrgNode title="COMPANY ACCOUNTANT (DELIGHT)" />
        </div>
        <div className="column-right">
          <OrgNode name="LASISI DAUDA ADETOYESE" onNameClick={handleNameClick} />
        </div>
      </div>

      <div className="org-chart-row">
        <div className="column-left">
          <OrgNode title="ADMINISTRATIVE MANAGER (DELIGHT)" />
        </div>
        <div className="column-right">
          <OrgNode name="EHUNMOSE AKINWALE OLUJIMI" onNameClick={handleNameClick} />
        </div>
      </div>

      <div className="org-chart-row">
        <div className="column-left">
          <OrgNode title="COMPANY SECRETARY/ EXECUTIVE ASSISTANT" />
        </div>
        <div className="column-right">
          <OrgNode name="MRS NIKE OYEKANMI EJEM" onNameClick={handleNameClick} />
        </div>
      </div>

      <div className="org-chart-row">
        <div className="column-left">
          <OrgNode title="LOGISTICS & PROCUREMENT" />
        </div>
        <div className="column-right">
          <OrgNode name="WAHEED OLALEKAN JIMOH" onNameClick={handleNameClick} />
        </div>
      </div>

      <PersonModal 
        person={selectedPerson} 
        staffDetails={staffDetails}
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default OrgChart;