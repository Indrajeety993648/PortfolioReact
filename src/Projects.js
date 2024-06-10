import React from 'react';
import './Projects.css';
import yulu from './assets/yuluProject.png';
import aerofit from './assets/Aerofit.jpg';
import movie from './assets/movie.jpeg';
import webscraper from './assets/webscraper.jpg';
import aptiquiz from './assets/aptiquiz.jpeg';

const projects = [
  { title: 'Yulu', imgSrc: yulu, githubLink: 'https://github.com/Indrajeety993648/Yulu-Project' },
  { title: 'Aerofit', imgSrc: aerofit, githubLink: 'https://github.com/Indrajeety993648/mentorship-project1' },
  { title: 'AptiQuiz', imgSrc: aptiquiz, githubLink: 'https://github.com/Indrajeety993648/Quiz---App' },
  { title: 'Youtube Web Scrapper', imgSrc: webscraper, githubLink: 'https://github.com/Indrajeety993648/youtube-Web-Scrapping-' },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="filter-buttons">
        <button className="filter-button">All</button>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <div className="project-card">
              <img src={project.imgSrc} alt={project.title} className="project-image" />
              <div className="project-title">{project.title}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
