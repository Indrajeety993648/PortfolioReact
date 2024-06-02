import React from 'react';
import './Skills.css';
import github from './assets/github.svg';
import git from './assets/git.svg';
import aws from './assets/amazonwebservices.svg';
import bootstrap from './assets/bootstrap.svg';
import html from './assets/htmllogo.svg';
import css from './assets/csslogo.svg';
import nodejs from './assets/nodejs.svg';
import python from './assets/pythonlogo.svg';
import react from './logo.svg'
import postgresqllogo from './assets/postgresqllogo.svg';
import java from './assets/javalogo.svg';
import mysql from './assets/mysqllogo.svg';
import c from './assets/c++.svg';
import csharp from './assets/csharp.svg';

const skills = [
  {
    category: 'Languages and Databases',
    items: [
      { name: 'Python', imgSrc: python },
      { name: 'Java', imgSrc: java },
      { name: 'C++', imgSrc: c },
      { name: 'C++', imgSrc: csharp },
      { name: 'HTML5', imgSrc: html },
      { name: 'CSS3', imgSrc: css },
      { name: 'MySQL', imgSrc: mysql },
      { name: 'PostgreSQL', imgSrc: postgresqllogo },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'Node.js', imgSrc: nodejs },
      { name: 'React', imgSrc: react},
      { name: 'Bootstrap', imgSrc: bootstrap },




    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'git', imgSrc: git },
      { name: 'GitHub', imgSrc: github },
      { name: 'AWS', imgSrc: aws },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      {skills.map((skillCategory, index) => (
        <div key={index} className="skills-category">
          <h2>{skillCategory.category}</h2>
          <div className="skills-items">
            {skillCategory.items.map((item, idx) => (
              <div key={idx} className="skill-item">
                <img src={item.imgSrc} alt={item.name} className="skill-image" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
