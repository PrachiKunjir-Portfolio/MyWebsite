import React, { useEffect } from "react";
import "./Projects.scss"



function Projects(){

  
  var myIndex = 0;

  function  carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    console.log(x);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 3 seconds
  }

  useEffect(() => {
    carousel();
  },[])
  
  
  return (
    <projects>
      <div className="main-about">
      <h2 className="nav">Projects</h2>
      <div class="card-project">
      <img className="card-img" src="assets\piNNit.png" alt="Avatar"  />
      <div class="container">
    <h4><b>pNNit - Mern Stack Application</b></h4> 
    <p>Developed a Notes application from scratch </p>
    <p>using MERN Stack. This Application has 
      </p><p>Express - NodeJS backend and
the </p>
    <p>frontend is developed in React.</p>
  </div>
</div>
<div class="card-project">
      <img className="card-img" src="assets\website.png" alt="Avatar"  />
      <div class="container">
      <h4><b>Personal Website</b></h4> 
    <p>Developed using HTML</p>
    <p>CSS, JavaScript
      </p><p>and React</p>
    <p>Given minimalistic look</p>
</div>
</div>
<div class="card-project aed">
      <img className="card-img mySlides" src="assets\aed2.png" alt="Avatar"  />
      <img className="card-img mySlides" src="assets\aed1.png" alt="Avatar"  />
     
      <div class="container">
      <h4><b>E-Farming Project</b></h4> 
    <p>Developed in Swing and Java</p>
    <p>Designed and developed minimalistic 
      </p><p>and userfriendly UIUX</p>
         
</div>
</div>
</div>

</projects>
   

  );

  


  
}

export default Projects;