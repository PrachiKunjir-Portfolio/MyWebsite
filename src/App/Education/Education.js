import React from "react";
import "./Education.scss"

function Education(){
  
    
  return (
    <education>
      <div className="main-about">
      <h2 className="nav">Education</h2>
      <div class="card-edu">
      <img className="card-img" src="assets\pu-modified.jpg" alt="Avatar"  />
      <div class="container">
    <h4><b>Pune University, India</b></h4> 
    <p>Computer Engineer </p>
    <p>(2018)</p> 
    <h4>Courses : </h4>
    <p>Application Engineering &  </p><p>Development,</p><p> Web Design/User Experience </p><p>Engineering</p>
  </div>
</div>
<div class="card-edu">
      <img className="card-img" src="public\assets\neu-modified.jpg" alt="Avatar"  />
      <div class="container">
    <h4><b>Northeastern University, Boston</b></h4> 
    <p>Masters in Information Systems </p> 
    <p>(Expected 2023)</p>
    <h4>Courses : </h4>
    <p>Business Analysis & Intelligence, </p><p> Data Structures,</p><p>Object Oriented Programming, </p><p>Design
DBMS, Operating Systems</p>
  </div>
</div>
      </div>
    
    </education>

  );
}

export default Education;