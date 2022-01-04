import React from "react";
import "./Skills.scss"

function Skills(){
  
    
  return (
    <skills>
      <div className="main-about">
      <h2 className="nav">Skills</h2>
      </div>
      <div class="card">
      
      
      <img src="assets\html5.png" className="img-skillone first-img" alt="html" />
      
      <img src="assets\css3.png" className="img-skillone first-img" alt="css" />
      
      <img src="assets\javascript.png" className="img-skillone first-img" alt="js" />
      
      <img src="assets\nodejs.png" className="img-skillone first-img" alt="node" />
     
      </div>
      <div class="card-two">
      <img src="assets\sass.png" className="img-skillone" alt="sass" />
      
      <img src="assets\mongodb.png" className="img-skillone" alt="mongo" />
      
      <img src="assets\webpack.png" className="img-skillone" alt="webpack" />
      <img src="assets\react.png" className="img-skillone" alt="react" />
      <img src="assets\github.png" className="img-skillone" alt="git" />
      <div class="card-skill">
      <p className="namep-skill">HTML5, CSS3, JavaScript, NodeJs, SASS, MongoDB, Webpack, React, Git, Agile, SDLC, STLC  </p>
      
      <div className="info">
      
      </div>
      
      
      </div>
      
</div>


    </skills>

  );
}

export default Skills;