import React, { useEffect, useRef } from 'react';
import './About.css';
import Myimage from './Untitled.jpeg';

const About = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (event) => {
      cursor.style.left = `${event.clientX - 10}px`; // Adjust position to center the cursor on the pointer
      cursor.style.top = `${event.clientY - 10}px`;
    };

    const handleMouseLeave = () => {
      cursor.style.width = '20px'; // Reset size
      cursor.style.height = '20px';
      cursor.style.opacity = '0.5'; // Reset opacity
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="about-container">
      <div className="profile">
        <img 
          src={Myimage} 
          alt="Indrajeet Yadav" 
          className="profile-image"
        />
        <div className="profile-details">
          <h1>Indrajeet Yadav</h1>
          <p>
            Focused and enthusiastic developer with a keen interest in software development and artificial intelligence. By comprehensive exposure to the underlying concepts and applying them vividly to various projects, my love for these domains came into being. I am a passionate individual who thrives to build and apply algorithms to solve real-world industry problems.
          </p>
          <ul>
            <li><strong>Birthday:</strong> 12 April 2005</li>
            <li><strong>Phone:</strong> +1 480-401-8112</li>
            <li><strong>City:</strong> Kanpur, Uttar Pradesh</li>
            <li><strong>Email:</strong> indrajeetyadav@gmail.com</li>
          </ul>
        </div>
      </div>
      <div ref={cursorRef} className="cursor"></div>
    </div>
  );
}

export default About;
