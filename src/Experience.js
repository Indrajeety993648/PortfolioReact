
import './Experience.css';
import { Link } from 'react-router-dom';

function Experience(){
  const experiences = [
    {
      title: 'Arizona State University',
      date: 'January 2021 - Present',
      position: 'Software Engineer',
      duties: [
        'Managed large-scale deployment of JupyterHub with Nbgrader and webwork software, facilitating approx 5500 students.',
        'Configured, troubleshot, and administered server-side web applications for the statistics department.',
        'Handled Linux server administration and Apache configuration; automated tasks like user account creation, managing student database, and system maintenance using Shell and automation scripts, reducing manual work by 200%.'
      ]
    },
    
    {
      title: 'Tech Institute',
      date: 'June 2017 - December 2018',
      position: 'DevOps Engineer',
      duties: [
        'Implemented CI/CD pipelines using Jenkins and Docker.',
        'Monitored and optimized cloud-based infrastructure on AWS.',
        'Collaborated with development teams to improve deployment processes.'
      ]
    },
    {
      title: 'Software Solutions Inc.',
      date: 'January 2015 - May 2017',
      position: 'Backend Developer',
      duties: [
        'Developed RESTful APIs using Node.js and Express.',
        'Worked with MongoDB to design and maintain databases.',
        'Integrated third-party services and APIs to enhance application functionality.'
      ]
    },
    
  ];

  return (
    <div>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-container">
          <h1 className="experience-title">{experience.title}</h1>
          <p className="experience-date">{experience.date}</p>
          <h2 className="experience-position">{experience.position}</h2>
          <ul className="experience-list">
            {experience.duties.map((duty, dutyIndex) => (
              <li key={dutyIndex} className="experience-list-item">
                {duty}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
