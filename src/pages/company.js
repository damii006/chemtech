import React from 'react'
import organogram from '../resources/organogram.png';
import hierarchy from '../resources/hierarchy.png'
import './company.css'
const company = () => {
  return (
    <div>
      <h1>
        About Us
      </h1>
      <div className='company-intro'>
        <div className='intro-left'>
        <h1 className='intro-text'>
            Introduction
        </h1>
        <p className='company-intro-small'>
            Chemtech Group a conglomerate with a niche, at both national and global levels in the downstream sector of the Oil and Gas, Trading,- distribution of petroleum product such as base oils diesels and kerosene. Manufacturing, Equipment supplies, Agriculture and distribution Fast Moving Consumer Goods (FMCG) with interest also in renewable power project.
        </p>
        <p className='company-intro-small'>   
            Our competitive edge lies in the team of experts, in the field of Trading – import and distribution, Manufacturing, Manufacturing representation of major brands in Chemicals, Lubricating oil and grease additives Laboratory equipment with strong market presence.
        </p>
        </div>
        <div className='intro-right'>
            <img alt='' className='firstimg' src='https://i.imgur.com/8Q6eK6C.jpg' />
        </div>
      </div>
      <div className='mission'>
        <div className='mission-left'>
        <h2 className='mission-statement'>
            Our Vision
        </h2>
        <p className='company-intro-small'>
            Our Vision is to be the recognized performance leader in our chosen areas of business activity, being a performance leader means we will achieve operational excellence, industry leading customer satisfaction and superior financial performance.
        </p>
        </div>
        <div className='mission-right'>
        <h2 className='mission-statement'>
            Our Vision
        </h2>
        <p className='company-intro-small'>
             We are market focused and process centered organization that delivers innovative solutions to our customers. This is predicated on the Specific, measurable, Achievable, Relevant and Timely framework. Produces predictable earnings for our shareholders and provides dynamic and challenging environment for our employees.        
         </p>
        </div>
      </div>
        <div className='values'>
            <h1 className='values-title'>
                Our Core Values
            </h1>
            <div className='val'>
                <div className='performance'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#32A542"><path d="M852-212 732-332l56-56 120 120-56 56ZM708-692l-56-56 120-120 56 56-120 120Zm-456 0L132-812l56-56 120 120-56 56ZM108-212l-56-56 120-120 56 56-120 120Zm246-75 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-361Z"/></svg>
                    <h2>Performance</h2>
                </div>
                <div className='performance'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#32A542"><path d="M480-160q75 0 127.5-52.5T660-340q0-75-52.5-127.5T480-520q-75 0-127.5 52.5T300-340q0 75 52.5 127.5T480-160ZM363-572q20-11 42.5-17.5T451-598L350-800H250l113 228Zm234 0 114-228H610l-85 170 19 38q14 4 27 8.5t26 11.5ZM256-208q-17-29-26.5-62.5T220-340q0-36 9.5-69.5T256-472q-42 14-69 49.5T160-340q0 47 27 82.5t69 49.5Zm448 0q42-14 69-49.5t27-82.5q0-47-27-82.5T704-472q17 29 26.5 62.5T740-340q0 36-9.5 69.5T704-208ZM480-80q-40 0-76.5-11.5T336-123q-9 2-18 2.5t-19 .5q-91 0-155-64T80-339q0-87 58-149t143-69L120-880h280l80 160 80-160h280L680-559q85 8 142.5 70T880-340q0 92-64 156t-156 64q-9 0-18.5-.5T623-123q-31 20-67 31.5T480-80Zm0-260ZM363-572 250-800l113 228Zm234 0 114-228-114 228ZM406-230l28-91-74-53h91l29-96 29 96h91l-74 53 28 91-74-56-74 56Z"/></svg>
                    <h2>Excellence</h2>
                </div>
                <div className='performance'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#32A542"><path d="M557-518 387-688l57-56 113 113 227-226 56 56-283 283ZM320-220l278 76 238-74q-5-9-14.5-15.5T800-240H598q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T618-354l-234-86h-64v220ZM80-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L600-60l-280-78v58H80Zm80-80h80v-280h-80v280Z"/></svg>
                    <h2>Trust</h2>
                </div>
            </div>
       </div>
       <div className='management'>
        <div className='organ'>
        <img src={organogram} alt="Example" />;
        </div>
        <div className='management-title'>
            <h1 className='values-title'>
                Management Profile
            </h1>
            <hr/>
         <div className='hierarchy'>
            <img src={hierarchy} alt="Example" />
        </div>
        </div>

       </div>
    </div>
  )
}

export default company
