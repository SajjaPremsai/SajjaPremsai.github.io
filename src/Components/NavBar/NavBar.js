import React from 'react';
import "./Navbar.css"
// import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='Nav-Bar'>
      <div className='Nav-header'>
        <a href="#Hom1" style={{ color: "white" }} className='Nav-title'><span style={{ color: "#EC4D37" }}>P</span>rem Sai.</a>
      </div>
      <div>
    <ul className='All-Items'>
        <li className='Items'><a className='Items' href="#Home">Home</a></li>
        <li className='Items'><a className='Items' href='#About'>About</a></li>
        <li className='Items'><a className='Items' href='#Skills'>Skills</a></li>
        <li className='Items'><a className='Items' href='#Experience'>Internships</a></li>
        <li className='Items'><a className='Items' href='#Certifications'>Certifications</a></li>
        <li className='Items'><a className='Items' href='#Projects'>Projects</a></li>
        <li className='Items'><a className='Items' href='https://sajjapremsai.github.io/Blogs/'>Blogs</a></li>
        <li className='Items'><a className='Items' href='#Contact'>Contact me</a></li>
    </ul>
      </div>
</nav>
  )
} 
