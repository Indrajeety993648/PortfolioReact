import React from 'react';
import  './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-name">
        <p>Indrajeet Yadav </p>
      </div>
      <ul className="navbar-links">
        <li className='nav-item'><Link to='/'>Home</Link></li>
        <li className='nav-item'><Link to='/about'>About</Link></li>
        
        
        <li className='nav-item'><Link to='/skills'>Skills</Link></li>
        <li className='nav-item'><Link to='/education'>Education</Link></li>
        <li className='nav-item'><Link to='/projects'>Projects</Link></li>
        
        <li className='nav-item'><Link to='/contact'>Contacts</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;