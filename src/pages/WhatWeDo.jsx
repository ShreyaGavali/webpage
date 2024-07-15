import React, { useState } from 'react'
import img1 from '../assets/images/WWD1.png'
import img2 from '../assets/images/WWD2.png'
import img3 from '../assets/images/WWD3.jpg'
import img4 from '../assets/images/WWD4.jpg'
import img5 from '../assets/images/WWD5.jpg'
import img6 from '../assets/images/WWD6.jpg'
import img7 from '../assets/images/WWD7.jpg'
import img8 from '../assets/images/WWD8.jpg'
import img9 from '../assets/images/WWD9.jpg'
import img10 from '../assets/images/WWD10.jpg'
import img11 from '../assets/images/WWD11.jpg'
import img12 from '../assets/images/WWD12.jpg'
import hoverimg from '../assets/images/hoverimg.png'
import Slider from 'react-slick';
import '../style/WhatWeDo.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReadMore from './ReadMore'

const WhatWeDo = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    const images = [
        [img1, img2, img3, img4],
        [img5, img6, img7, img8],
        [img9, img10, img11, img12]
    ];

    return (
        <div style={{minHeight: '100vh'}}>
            <div className='whatwedo-text'>
                <h3 style={{ marginTop: '0rem', marginBottom: '0rem', color: 'rgb(244, 76, 104)'}}>WHAT WE DO</h3>
                <div className='services'>
                    <h1>SERVICES PROVIDE FOR YOU</h1>
                    <div style={{ width: '30rem' }}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, saepe rem est unde obcaecati debitis corrupti ab fugit! Magnam explicabo eius maxime ex quod laboriosam aliquid recusandae voluptate doloremque totam?</p>
                    </div>
                </div>
            </div>
            <div className='whatwedo-images'>
                <Slider {...settings}>
                    {images.map((group, groupIndex) => (
                        <div className="slide" key={groupIndex}>
                            <div className="inner-div">
                                {group.map((img, imgIndex) => (
                                    <div
                                        key={imgIndex}
                                        className="image-container"
                                        onMouseEnter={() => handleMouseEnter(groupIndex * 4 + imgIndex)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {hoverIndex === groupIndex * 4 + imgIndex ? (
                                            <div className="readmore-overlay">
                                                <ReadMore />
                                            </div>
                                        ) : (
                                            <img src={img} alt={`Image ${groupIndex * 4 + imgIndex + 1}`} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default WhatWeDo