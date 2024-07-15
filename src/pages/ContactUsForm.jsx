import React, {useState} from 'react'
import '../style/ContactUsForm.css';
import axios from 'axios';
import '../style/Spinner.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUsForm = ({ onClose }) => {
    const [workEmail, setWorkEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append('workEmail', workEmail);
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);

        try{
            const response = await axios.post('https://getform.io/f/brolyqwa', formData);
            setLoading(false);
            toast.success('Form submitted successfully!');
            setTimeout(() => {
                window.location.href = '/';
            }, 3000); // Delay of 3 seconds
        } catch (err){
            console.log(err.message);
        }
    }

    

    return (
        <div className="popup-overlay">
            <div className="popup" style={{ height: '25rem', width: '25rem' }}>
                <button className="close-btn" style={{ color: 'white' }} onClick={onClose}>X</button>
                <h2>Talk to us</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ width: '23rem' }}>
                        <input style={{width: '23rem'}} type='text' placeholder="Work email" name='workEmail' value={workEmail} onChange={(e) => setWorkEmail(e.target.value)} required />
                        <hr />
                    </div>
                    <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                        <div>
                            <input type='text' className='form-control mt-2' placeholder="First Name" name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                            <hr />
                        </div>
                        <div>
                            <input type='text' className='form-control mt-2' placeholder="Last Name" name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                            <hr />
                        </div>
                    </div>
                    <div style={{display: 'flex', gap: '0.5rem', marginTop: '2rem'}}>
                        <input type='checkbox' className='custom-checkbox' />
                        <p>I agree to Fyles terms and conditions and provide consent to send me communication</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem'}}>
                        <button style={{width: '20rem', height: '2rem', backgroundColor: 'rgb(244, 76, 104)', border: 'none', color: 'white'}} type='submit'>Contact Us</button>
                    </div>
                </form>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem'}}>
                    {loading && <div className="spinner"></div>}
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default ContactUsForm