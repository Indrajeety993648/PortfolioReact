import React from 'react';
import './Contact.css';
import linkdn from './assets/linkdn.png';
import github from './assets/github.png';
import google from './assets/google.png';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Indrajeet Yadav</h1>
            <div className="contact-content">
                <div className="contact-item">
                    <h2>My Address</h2>
                    <p>450  LavKushPuram kalyanpur kanpur <br />Uttar Pradesh<br />209871</p>
                </div>
                <div className="contact-item">
                    <h2>Email</h2>
                    <p>indrajeetyadav@gmail.com</p>
                </div>
                <div className="contact-item">
                    <h2>Social Profiles</h2>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/indrajeet-yadav-5619b8283/"><img src={linkdn} alt="LinkedIn" /></a>
                        <a href="https://github.com/Indrajeety993648"><img src={github} alt="GitHub" /></a>
                        <a href="https://google.com"><img src={google} alt="Google" /></a>
                    </div>
                </div>
                <div className="contact-item">
                    <h2>Contact</h2>
                    <p>+1 480-401-8112</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
