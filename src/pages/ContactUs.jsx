import React,{useState} from 'react'
import image from '../assets/images/homepage.png';
import ContactUsForm from './ContactUsForm';
import '../style/ContactUs.css';

const ContactUs = ({onContactClick}) => {
  return (
    <div style={{minHeight: "100vh"}}>
        <div className='first-page'>
            <div className='text'>
                <h4>AWARD WINNING</h4>
                <h1>DIGITAL MARKETING AGENCY</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium animi optio molestias at in quam aliquam, nobis quidem nemo eum delectus repellat molestiae saepe voluptate dolorum, esse vel distinctio reiciendis!</p>
                <button onClick={onContactClick}>Contact Us</button>
            </div>
            <div className='image'>
                <img src={image} />
            </div>
        </div>
        {/* {showPopup && <ContactUsForm closePopup={togglePopup} />} */}
    </div>
  )
}

export default ContactUs