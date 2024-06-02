import React from 'react';
import './Projects.css';
import yulu from './assets/yuluProject.png';
import aerofit from './assets/Aerofit.jpg';
import movie from './assets/movie.jpeg';
import webscrapper from './assets/webscraper.jpg';
import aptiquiz from './assets/aptiquiz.jpeg';
import music from './assets/music.png'


const projects = [
  { title: 'Yulu', imgSrc: yulu },
  { title: 'Aerofit', imgSrc:aerofit},
  { title: 'AptiQuiz', imgSrc: aptiquiz },
  { title: 'Music Streaming Website', imgSrc: music},
  { title: 'Movie Recommender', imgSrc: movie },
  { title: 'Youtube Web Scrapper', imgSrc: webscrapper },
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
          <div key={index} className="project-card">
            <img src={project.imgSrc} alt={project.title} className="project-image" />
            <div className="project-title">{project.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
