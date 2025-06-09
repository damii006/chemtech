
import './App.css';
import {  useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <nav>

      </nav>

      <div className='intro'>
        <h1 className='chem-head'>Welcome to Chemtech Group.</h1>
        <p>Chemtech Group is a holding name for an indigenous conglomerate which comprises of 6 vibrant member companies. While most of the companies within the Group operate as independent enterprises, they are unified and functioned under the leadership of the founder, Alhaji Isiaka Adebayo Jimoh, who is also the Executive Vice Chairman of the Group.</p>
        <div className='intro-btn-div'>
        <button className='intro-btn'> 
          Learn More.
        </button>
        </div>
      </div>
      <div className='mid'>
        <div className='mid-left'>
          <h1 className='values-title'>Exceptional quality is key of our business</h1>
          <p className='mid-text'>
            Chemtech Chemicals Limited is dedicated to providing the highest quality products, services, and technical information to her customers. Exceptional quality starts with people wanting to be the best. Exceptional quality comes from teamwork.
          </p>
          <button className='specific-btn'>
            ABOUT US
          <svg className='svg' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
          </button>
        </div>
        <div className='mid-right'>
          <img alt='' src=''></img>
        </div>
        </div>
          <div className='sub-title'>
            <h1 className='values-title'>Our Subsidiaries</h1>
          </div>
        <div className='subsidiaries'>
        <div className="chemtech-card">
          <h2 className="chemtech-title">Chemtech Chemicals Limited</h2>
          <div className="chemtech-reveal">
            <p className="chemtech-details">
              The company has interest in Manufacturer Representation, Supply and Distribution of Chemicals, Lubricating oil Grease additives, Industrial and Agro allied chemicals.
            </p>
            <button className="specific-btn" onClick={() => navigate('/chemical')}>Learn More</button>
          </div>
        </div>
        <div className="chemtech-card">
          <h2 className="chemtech-title">Delight Energy Limited</h2>
          
          <div className="chemtech-reveal">
            <p className="chemtech-details">
              The company has interest in Manufacturer Representation, Supply and Distribution of Chemicals, Lubricating oil Grease additives, Industrial and Agro allied chemicals.
            </p>
            <button className="specific-btn">Learn More</button>
          </div>
        </div>
        <div className="chemtech-card">
          <h2 className="chemtech-title">Chemtech Chemicals Limited</h2>
          <div className="chemtech-reveal">
            <p className="chemtech-details">
              The company has interest in Manufacturer Representation, Supply and Distribution of Chemicals, Lubricating oil Grease additives, Industrial and Agro allied chemicals.
            </p>
            <button className="specific-btn">Learn More</button>
          </div>
        </div>
        </div>
      </div>
  );
}

export default App;
