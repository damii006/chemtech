import React from 'react';

const OfficeCard = ({ title, address, phones, email }) => {
  return (
    <div className="office-card">
      <h2 className="office-title">{title}</h2>
      
      <div className="office-details">
        <div className="contact-item">
          <span className="icon">📍</span>
          <p className="contact-text">{address}</p>
        </div>
        
        {phones.map((phone, index) => (
          <div key={index} className="contact-item">
            <span className="icon">📞</span>
            <a 
              href={`tel:${phone.replace(/[^\d+]/g, '')}`}
              className="contact-link"
            >
              {phone}
            </a>
          </div>
        ))}
        
        <div className="contact-item">
          <span className="icon">✉️</span>
          <a 
            href={`mailto:${email}`}
            className="contact-link"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-form-card">
      <h2 className="form-title">Get In Touch</h2>
      <p className="form-subtitle">Have a question? We'd love to hear from you.</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

const OfficeLocations = () => {
  const offices = [
    {
      title: "Factory Office",
      address: "Along Sunday Shodunke Rd, by Alade Bus-Stop, off Lagos - Ibadan express way, Orimerunm village, Obafemi-Owode,  Ogun State.",
      phones: ["+234-(0) 803-725-6826"],
      email: "info@chemtechgroupng.com"
    }
  ];

  return (
    <div className="container">
      <div className="offices-grid">
        {offices.map((office, index) => (
          <OfficeCard key={index} {...office} />
        ))}
      </div>
      
      <div className="contact-section">
        <ContactForm />
      </div>
      
      <style jsx>{`=
        .container {
          margin-top:50px;
          max-width: 1200px;
          justify-content: center;
          display: flex;
          align-items: center;
          margin: 50px;
          min-height: 100vh;
          background-color: #f5f5f5;
          padding: 2rem 1rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .contact-section {
          max-width: 600px;
          margin: 3rem auto 0;
        }
        
        .contact-form-card {
          margin-top:50px;
          background: white;
          border-radius: 12px;
          margin-bottom: 2rem;
          padding: 2rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border: 1px solid #e0e0e0;
        }
        
        .form-title {
          color: #16a34a;
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          text-align: center;
        }
        
        .form-subtitle {
          color: #6b7280;
          text-align: center;
          margin: 0 0 2rem 0;
          font-size: 0.95rem;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
        }
        
        .form-label {
          color: #374151;
          font-weight: 500;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        
        .form-input,
        .form-textarea {
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          font-family: inherit;
        }
        
        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #16a34a;
          box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }
        
        .submit-button {
          background-color: #16a34a;
          color: white;
          padding: 0.875rem 1.5rem;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.1s ease;
          margin-top: 0.5rem;
        }
        
        .submit-button:hover {
          background-color: #15803d;
          transform: translateY(-1px);
        }
        
        .submit-button:active {
          transform: translateY(0);
        }
        
        .offices-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2rem;
          }
        
        .office-card {
          margin-top:50px;
          width: 50%;
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border: 1px solid #e0e0e0;
          transition: all 0.3s ease;
        }
        
        .office-card:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }
        
        .office-title {
          color: #16a34a;
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          padding-bottom: 0.5rem;
        }
        
        .office-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        
        .icon {
          font-size: 1.1rem;
          margin-top: 0.125rem;
          flex-shrink: 0;
        }
        
        .contact-text {
          color: #374151;
          line-height: 1.5;
          margin: 0;
          flex: 1;
        }
        
        .contact-link {
          color: #374151;
          text-decoration: none;
          transition: color 0.2s ease;
          flex: 1;
          word-break: break-all;
        }
        
        .contact-link:hover {
          color: #2563eb;
          text-decoration: underline;
        }
        
        /* Tablet styles */
        @media (max-width: 1024px) {
          .offices-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.25rem;
          }
          
          .office-card {
            margin-top: 50px;
            width: 100%;
            padding: 1.5rem;
          }
          
          .contact-section {
            margin-top: 2.5rem;
            padding: 0 1rem;
          }
          
          .contact-form-card {
            padding: 1.5rem;
          }
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
          .container {
            margin-top:50px;
            padding: 1rem 0.5rem;
          }
          
          .offices-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
            max-width: 100%;
          }
          
          .office-card {
            width: 100%;
            padding: 1.25rem;
            margin: 0 0.25rem;
          }
          
          .office-title {
            font-size: 1.1rem;
            margin-bottom: 1.25rem;
          }
          
          .contact-item {
            gap: 0.5rem;
          }
          
          .icon {
            font-size: 1rem;
          }
          
          .contact-section {
            margin-top: 2rem;
            padding: 0 0.5rem;
          }
          
          .contact-form-card {
            padding: 1.25rem;
          }
          
          .form-title {
            font-size: 1.25rem;
          }
        }
        
        @media (max-width: 480px) {
          .container {
          
            padding: 0.75rem 0.25rem;
          }
          
          .office-card {
            padding: 1rem;
            margin-top: 50px;
            margin: 0;
          }
          
          .office-title {
            font-size: 1rem;
            margin-bottom: 1rem;
          }
          
          .contact-text,
          .contact-link {
            font-size: 0.9rem;
          }
          
          .contact-section {
            margin-top: 1.5rem;
            padding: 0 0.25rem;
          }
          
          .contact-form-card {
            padding: 1rem;
          }
          
          .form-title {
            font-size: 1.1rem;
          }
          
          .form-subtitle {
            font-size: 0.85rem;
            margin-bottom: 1.5rem;
          }
          
          .contact-form {
            gap: 1rem;
          }
          
          .form-input,
          .form-textarea {
            padding: 0.625rem;
            font-size: 0.95rem;
          }
          
          .submit-button {
            padding: 0.75rem 1.25rem;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
};

export default OfficeLocations;