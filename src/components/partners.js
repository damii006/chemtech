import React from 'react'
import Oando from '../resources/Oando.jpg';
import Premier from '../resources/Premier.jpg';
import Tonimas from '../resources/Tonimas.jpg';
import Forte from '../resources/Forte.jpg';
import Ertana from '../resources/eTERNA.jpg';
import Conoil from '../resources/Conoil.jpg';
import AZ from '../resources/a-z-1.jpg';
import Bellmari from '../resources/Bellmari.jpg';
import Ammasco from '../resources/Ammasco.jpg';
import Ibeto from '../resources/IBETO-1.jpg';
import './partners.css';

const partners = () => {
  const partnerLogos = [
    { src: Oando, alt: 'Oando' },
    { src: Premier, alt: 'Premier' },
    { src: Tonimas, alt: 'Tonimas' },
    { src: Forte, alt: 'Forte' },
    { src: Ertana, alt: 'eTERNA' },
    { src: Conoil, alt: 'Conoil' },
    { src: AZ, alt: 'A-Z' },
    { src: Bellmari, alt: 'Bellmari' },
    { src: Ammasco, alt: 'Ammasco' },
    { src: Ibeto, alt: 'IBETO' },
  ];

  return (
    <div>
      <div className='partners'>
        <h1 className='partners-title'>Our Clientele</h1>
        <div className='partners-logos'>
          {partnerLogos.map((partner, index) => (
            <img key={`first-${index}`} src={partner.src} alt={partner.alt} />
          ))}
          {partnerLogos.map((partner, index) => (
            <img key={`second-${index}`} src={partner.src} alt={partner.alt} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default partners