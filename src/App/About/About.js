import React from "react";
import "./About.scss";
// import coffeeimg from '../../../public/assets/coffee.jpg';

function About(){
  
    
  return (
    <about>
      <div className="main-about">
      <h2 className="nav">About</h2>
     
      <div class="ele-pitch">
      <p className="p-ele-pitch">Enthusiastic front end developer. Interested in  UI/UX.
       Always eager to learn new things.
        As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things look in a specific way,
         and my mission-driven work ethic to literally make an impact. That's why I’m excited to work at a high growth company with abundance of opportunities.

Current Focus: Front-end // React // UIUX and Web Design</p>
      </div>
      <div className="img-section">
        {/* <div className="img-styling"> */}
          <div>
          <img alt="coffee" className="coffee" src="public/assets/coffee.jpg" />
          </div>
          <div>
          <img alt="coffee" className="coffee" src="assets\code.jpg" />
          </div>
          <div>
          <img alt="coffee" className="coffee" src="assets\web.png" />
          </div>
          <div>
          <img alt="coffee" className="coffee food" src="assets\food.png" />
          </div>
          <div>
          <img alt="coffee" className="coffee" src="assets\fitness.png" />
          </div>
          <div>
          <img alt="coffee" className="coffee" src="assets\series.png" />
          </div>
        {/* </div> */}
      </div>
      <p className="p-ele-pitch all-me" >This is all me: Coffee to Code, A minimalistic web designer. 
        I like to watch series and movies in my free time. I like to live a healthier lifestyle with good food and gymming</p>
      </div>
    
    </about>

  );
}



export default About;