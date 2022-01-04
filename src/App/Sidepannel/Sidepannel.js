import React from "react";
import "./Sidepannel.scss";

// import { Education } from "../Education/Education";
// import { Skills } from "../Skills/Skills";
// import { Experience } from "../Experience/Experience";
// import { Projects } from "../Projects/Projects";
// import { Awards } from "../Awards/Awards";
// import { Contact } from "../Contact/Contact";
// import { Resume } from "../Resume/Resume";
import { Link } from "react-router-dom";

function Sidepannel() {
  

    return (
     
        <sidepannel>
        <div className="sidepannel">
        <ul >
        
          <h1 className="mainname">
            
            Prachi
            Kunjir
            <br />
            
            
              <span className="designation">Front-end Developer</span>
              <hr />
            </h1>
            <Link to="/home">
            <li className="li-style">
            Home
          </li>
          </Link>
            <Link to="/about">
            <li className="li-style">
            About
          </li>
          </Link>
          <Link to="/education">
            <li className="li-style">
            Education
          </li>
          </Link>
          <Link to="/experience">
            <li className="li-style">
            Experience
          </li>
          </Link>
          <Link to="/skills">
            <li className="li-style">
            Skills
          </li>
          </Link>
          
          <Link to="/projects">
            <li className="li-style">
            Projects
          </li>
          </Link>
          <Link to="/awards">
            <li className="li-style">
            Awards
          </li>
          </Link>
          <Link to="/contact">
            <li className="li-style">
            Contact
          </li>
          </Link>
          <Link to="/resume">
            <li className="li-style">
            Resume
          </li>
          </Link>
          <Link to="/skills">
            <li className="li-style">
            
          </li>
          </Link>
          <Link to="/skills">
            <li className="li-style">
            
          </li>
          </Link>
          <Link to="/skills">
            <li className="li-style">
            
          </li>
          </Link>
          <Link to="/skills">
            <li className="li-style">
            
          </li>
          </Link>
          <Link to="/skills">
            <li className="li-style">
            
          </li>
          </Link>
          
          
        </ul>
        </div>


        </sidepannel>
      
    );
  
}
export default Sidepannel;