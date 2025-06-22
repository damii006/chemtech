import React from 'react'
import './gallery.css'; 
import table from '../resources/table.jpeg';
import group from '../resources/group.jpeg';
import cup from '../resources/cup.jpeg';
const Gallery = () => {
  return (
    <div className='gallery-body'>
        <div className='gallery-header'>
            <h1>Gallery</h1>
            <img src={table} alt='Gallery Header' className='gallery-header-image' />
        </div>
        <div className='sports-gallery'>
            <div className='sports-images-intro'>
                <h2>Sports Gallery</h2>
                <h1 className='lab-intro'>Lab doesn't stop the kicking.</h1>
                <p className='gallery-p'>Explore our collection of images showcasing our Company events.</p>
            </div>
            <div className='mid-img'>
                <img src={group} alt='Sports Gallery' className='gallery-image-group' />
                <p>Team spirit doesn’t stop at the lab—Chemtech Group’s football squad brings the same energy, precision, and teamwork to the pitch. ⚽💼Proudly repping our colors, one goal at a time. #TeamChemtech #ChemtechUnited #WorkHardPlayHard</p>
            </div>
            <div className='third-img'>
                <div className='third-img-text'>
                <p>🏆 Victory for Chemtech Group! 🏆
                    A proud moment as Chemtech Group takes home the prestigious trophy, marking a stellar achievement in innovation and excellence! The spotlight shines on our visionary Chairman, who proudly holds the trophy high— a symbol of our team’s relentless dedication, breakthrough solutions, and industry leadership.
                    This win isn’t just a trophy— it’s a testament to the Chemtech spirit.
                    </p>
                    <ul>
                        <li>💡 Driven by innovation.</li>
                        <li>🤝 Built on teamwork.</li>
                        <li>🚀 Powered by passion.</li>
                    </ul>
                    <p>Here's to raising the bar— and the trophy— higher than ever before! 🎉</p>
                </div>
                <div className='third-img-cup'>
                    <img src={cup} alt='Trophy' className='gallery-image-cup'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery;