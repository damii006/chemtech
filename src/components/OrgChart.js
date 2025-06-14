import React, { useState } from 'react';

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

const PersonModal = ({ person, isOpen, onClose }) => {
  if (!isOpen) return null;

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
                src="[Add image URL here]" 
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
              <p className="profile-title">[Add job title here]</p>
            </div>
          </div>
          
          <div className="detail-section">
            <h3>Position Details</h3>
            <p>[Add position details here]</p>
          </div>
          <div className="detail-section">
            <h3>Experience</h3>
            <p>[Add experience details here]</p>
          </div>
          <div className="detail-section">
            <h3>Education</h3>
            <p>[Add education details here]</p>
          </div>
          <div className="detail-section">
            <h3>Contact Information</h3>
            <p>[Add contact details here]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrgChart = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <OrgNode title="EXECUTIVE CHAIRMAN" />
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
          <OrgNode title="GROUP FINANCIAL CONTROLLER" />
        </div>
        <div className="column-right">
          <OrgNode name="" />
        </div>
      </div>

      <div className="org-chart-row">
        <div className="column-left">
          <OrgNode title="GROUP MANAGERS- SUBSIDIARIES" />
        </div>
        <div className="column-right">
          <OrgNode name="" />
        </div>
      </div>

      <div className="org-chart-row">
        <div className="column-left">
          <OrgNode title="HEADS OF DEPARTMENT" />
        </div>
        <div className="column-right">
          <OrgNode name="" />
        </div>
      </div>

      <PersonModal 
        person={selectedPerson} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default OrgChart;