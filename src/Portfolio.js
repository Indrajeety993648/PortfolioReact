import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import github from './assets/github.png';
import linkdn from './assets/linkdn.png';
import google from './assets/google.png';

const Portfolio = ({ text = "Developer", typingspeed = 320, deletingspeed = 50, duration = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [alternateColor, setAlternateColor] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (text && text.length > 0) {
        if (!isDeleting) {
          if (displayedText.length < text.length) {
            setDisplayedText((prev) => prev + text.charAt(displayedText.length));
          } else {
            setIsDeleting(true);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText((prev) => prev.slice(0, -1));
          } else {
            setIsDeleting(false);
          }
        }
      }
    };

    const interval = setInterval(() => {
      setAlternateColor((prev) => !prev);
    }, 200); 

    const timeout = setTimeout(handleTyping, isDeleting ? deletingspeed : typingspeed);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [displayedText, isDeleting, text, typingspeed, deletingspeed]);

  return (
    <div className="portfolio">
      
      <div className="container">
        <h1 className={alternateColor ? 'red' : 'green'}>Indrajeet Yadav</h1>
        <p className="displayed-text">I'm <span className="dynamic-text">{displayedText}</span></p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/indrajeet-yadav-5619b8283/" target="_blank" rel="noopener noreferrer">
            <img src={linkdn}alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/Indrajeety993648" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <img src= {google} alt="Google" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
