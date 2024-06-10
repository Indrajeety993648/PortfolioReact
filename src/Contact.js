import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            
            <div className="contact-right">
                <h1 className="contact-title">
                    Contact <span className="highlight">Me</span>
                </h1>
                <form className="contact-form">
                    <input type="text" placeholder="FULL NAME" className="contact-input" />
                    <input type="email" placeholder="EMAIL" className="contact-input" />
                    <textarea placeholder="Message" className="contact-textarea"></textarea>
                    <button type="submit" className="contact-button">Send Message</button>
                </form>
                <div className="contact-info">
                    <p>
                        <a href="mailto:indrajeetyadav993648@gmail.com" className="contact-email">
                            📧 indrajeetyadav993648@gmail.com
                        </a>
                        <br />
                        <a href="tel:+9569025066" className="contact-phone">
                            📞 +91 9569025066
                        </a>
                    </p>
                    <div className="contact-icons">
                        {}
                        <a href="https://github.com/Indrajeety993648" className="contact-icon">
                            <img src={require('./assets/github3.png')} alt="GitHub" />
                        </a>
                        <a href="https://google.com" className="contact-icon">
                            <img src={require('./assets/google1.png')} alt="Google" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
