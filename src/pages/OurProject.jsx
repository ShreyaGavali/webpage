import React, {useState} from 'react'
import img1 from '../assets/images/WWD3.jpg';
import img2 from '../assets/images/WWB2.png';
import img3 from '../assets/images/WWD4.jpg';
import img4 from '../assets/images/WWD2.png';
import '../style/OurProject.css'

const OurProject = () => {
    const [currentImage, setCurrentImage] = useState(img4);
  return (
    <div style={{minHeight: '100vh'}}>
        <div style={{textAlign: 'center'}}>
            <h3 style={{color: 'rgb(244, 76, 104'}}>OUR PROJECT</h3>
            <h1>WHY WE ARE BEST</h1>
        </div>
        <div className='ourproject'>
            <div className='images'>
                <img src={currentImage} />
            </div>
            <div className='text' >
                <div className='text1'
                onMouseEnter={() => setCurrentImage(img1)} 
                onMouseLeave={() => setCurrentImage(img4)}
                >
                    <p><b>Genderless kei-Japan's Hot</b></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa adipisci reprehenderit dolorem eos repellendus!</p>
                </div>
                <div className='text2'
                onMouseEnter={() => setCurrentImage(img2)} 
                onMouseLeave={() => setCurrentImage(img4)}
                >
                    <p><b>Batter Strategy & Quality</b></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa adipisci reprehenderit dolorem eos repellendus!</p>
                </div>
                <div className='text3'
                onMouseEnter={() => setCurrentImage(img3)} 
                onMouseLeave={() => setCurrentImage(img4)}
                >
                    <p><b>Genderless kei-Japan's Hot</b></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa adipisci reprehenderit dolorem eos repellendus!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurProject