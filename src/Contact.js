import React from 'react';
import { Link } from 'react-router-dom';
import github from './assets/github.png';
import LinkedIn from './assets/linkdn.png';
import Google from './assets/google.png';
import './Contact.css';

function Contact() {
    const emailAddress = 'indrajeetyadav993648@gmail.com';

    return (
        <div>
            <h2 id='h22'> Contact</h2>
            <div className="Contacts">
                <ul className="Contact1">
                    <div className='locate'>
                        <h3 id='h3'>My Address</h3>
                    </div>
                    <div className='li'>
                        <li>Electronic City-Phase1</li>
                        <li>Karnataka</li>
                        <li>India</li>
                    </div>
                </ul>
                <ul className="Contact2">
                    <div className='Social'>
                        <h3 id='h4'>Social Profiles</h3>
                    </div>
                    <div className='img'>
                        <a href='https://github.com/siddharthbaleja7'>
                            <img src={github} alt="GitHub" id='git'/>
                        </a>
                        <a href='https://www.linkedin.com/in/siddharth-baleja-197805294/'>
                            <img src={LinkedIn} alt="LinkedIn" id='Linked'/>
                        </a>
                        <a href='https://www.google.com'>
                            <img src={Google} alt="Google" id='Google' />
                        </a>
                    </div>
                </ul>
            </div>
            <div className='Contacts1'>
                <div className='Contact3'>
                    <div className='lii'>
                        <li id='liii'>{emailAddress}</li>
                        <li>indrajeetyadav@asu.edu</li>
                    </div>
                </div>
                <div className='Contact4'>
                    <div className='contact'>
                        <h3 id='h4'>Contact</h3>
                    </div>
                    <li id='contact'>+91 9569025066</li>
                </div>
            </div>
        </div>
    );
}

export default Contact;
