import React from "react";
import "./Awards.scss"

function Awards(){
  
    
  return (
    <awards>
      <div className="main-about">
      <h2 className="nav">Awards</h2>
      <p className="awar"> 1.SPOT award by CEO, <b>Rakesh Khanna</b></p>
      <p className="awar"> 2.SPOT award by manager, Rakesh Samilla</p>
      <p className="awar"> 3.Value award by CEO, Rakesh Samilla</p>
      </div>
      <div class="card-awards">
      
      
      <img src="assets\20210806_165556.jpg" className="img-awards" alt="Avatar" />
      
      <img src="assets\20210806_165449.jpg" className="img-awards" alt="Avatar" />
      
      <img src="assets\20210806_165619.jpg" className="img-awards" alt="Avatar" />
      
      
      </div>
    
    </awards>

  );
}



export default Awards;