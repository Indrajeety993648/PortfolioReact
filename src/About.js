import React from 'react';
import './About.css';
import Myimage from './Untitled.jpeg'
const About = () => {
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
      <div className="interests">
        <h2>Interests</h2>
        <div className="interest-grid">
          <div className="interest-item">Software Development</div>
          <div className="interest-item">Machine Learning</div>
          <div className="interest-item">Computer Vision</div>
          <div className="interest-item">Natural Language Processing</div>
          <div className="interest-item">Software Engineering</div>
          <div className="interest-item">Visualization</div>
          <div className="interest-item">Algorithms</div>
          <div className="interest-item">Image Processing</div>
        </div>
      </div>
    </div>
  );
}

export default About;
