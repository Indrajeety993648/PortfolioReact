
import './App.css';
import Portfolio from './Portfolio';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/skills" element={<Skills />} />
        </Routes>
    </div>
      </Router>
  );
}

export default App;
