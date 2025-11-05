import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

function Contact () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent! We will get back to you soon.');
        navigate('/');
    }

    return (
        <div className='contact-page'>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className='contact-form'>
                <div className='form-group'>
                    <label>Name:</label>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className='form-group'>
                    <label>Message:</label>
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='form-group'>
                    <label>Message:</label>
                    <textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows ="5"
                    required
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;