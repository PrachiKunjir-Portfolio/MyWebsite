import React from "react";
import "./Contact.scss"
import { Link } from "react-router-dom";
function Contact(){
  
    
  return (
    <contact>
      <div className="main-about">
      <h2 className="nav">Contact</h2>
      <div class="card-contact">
      <p className="namep">Prachi Kunjir</p>
      <p className="namep1">Front-end Developer</p>
      <hr className="hr-contact" />
      <div className="info">
      <p>Cell: (617)-877-3133</p>
      <p>Mail: kunjir.p@northeastern.edu</p>
      <p>Mail-2: prachikunjir11@gmail.com</p>
      <p>LinkedIn:<a href="https://www.linkedin.com/in/prachi-kunjir/"> linkedin.com/in/prachi-kunjir/ </a></p>
      </div>
      
      
      </div></div>
    
    </contact>

  );
}

export default Contact;