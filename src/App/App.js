import React from "react";
import "./App.scss";
import  About  from "./About/About";
import Home from "./Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  NavLink,
  Link,
} from "react-router-dom";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Awards from "./Awards/Awards";
import Contact from "./Contact/Contact";
import Resume from "./Resume/Resume";
import Sidepannel from "./Sidepannel/Sidepannel";

function App() {
 
  return (
    <Router>
      <div>
        <Sidepannel />
        
        <Routes>
        <Route exact path="/home" element={<Home />}> </Route>
        <Route exact path="/about" element={<About />}> </Route>
        <Route exact path="/education" element={<Education />}> </Route>
        <Route exact path="/experience" element={<Experience />}> </Route>
        <Route exact path="/skills" element={<Skills />}> </Route>
        <Route exact path="/projects" element={<Projects />} > </Route>
        <Route exact path="/awards" element={<Awards />}> </Route>
        <Route exact path="/contact" element={<Contact />}> </Route>
        <Route exact path="/resume" element={<Resume />}> </Route>
        {/* <Route exact path="/linkedin" element={<Resume />}> </Route> */}
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;


