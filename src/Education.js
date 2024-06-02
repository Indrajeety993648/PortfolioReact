
import './Education.css';
import jnvlogo from './assets/bitspilani.jpeg'
import scalerlogo from './scalerlogo.jpeg';
import stanforduniversity from './Stanford-University-Logo.png';
import scaler from './scaler.png';




const Education = () => {
  const educationData = [
    {
      university: 'Bits-Pilani',
      degree: 'BS in Computer Science',
      date: 'APRIL 2023',
      coursework: ['Distributed Database Systems', 'Cloud Computing', 'Foundation Of Algorithms'],
      logo: jnvlogo
    },
    
    {
      university: 'Scaler School Of Technology',
      degree: 'Bsc in Computer Science',
      date: 'July 2023 - Present',
      coursework: ['Database Management Systems', 'Data Structure & Algorithms , Optimization for Big Data', 'Machine Learning, Artificial Intelligence, Web Development, React , Javascript, SQl, HTML, CSS'],
      logo: scalerlogo 
    }
  ];

  const certifications = [
    stanforduniversity, 
    scaler
  ];

  return (
    <div className="education-container">
      <h2 className="section-title">Education</h2>
      <div className="education-section">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <img src={edu.logo} alt={`${edu.university} logo`} className="education-logo" />
            <div className="education-details">
              <h3 className="education-university">{edu.university}</h3>
              <p className="education-degree">{edu.degree}</p>
              <p className="education-date">{edu.date}</p>
              <h4 className="education-coursework-title">Relevant Coursework</h4>
              <ul className="education-coursework-list">
                {edu.coursework.map((course, courseIndex) => (
                  <li key={courseIndex} className="education-coursework-item">{course}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
