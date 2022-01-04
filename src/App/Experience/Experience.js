import React from "react";
import "./Experience.scss";

function Experience() {
  return (
    <experience>
      <div className="main-about">
        <h2 className="nav">Experience</h2>
        <div className="exp">
        <h1 className="company">Atos|Syntel</h1>
        <h3 className="des">
          Associate Consultant <h5>(November 2018 - September 2021)</h5>
        </h3>

        <ul className="info">
          <li>
            Led the off-shore Tech-connect team to design, develop user test
            cases in accordance with user stories for FedEx ReverseLogix
            application
          </li>
          <li>
            Created, Estimated and Delivered over 200 User Stories in Jira
            (Agile Project Management tool)
          </li>
          <li>
            Increased the efficiency of the production deliveries by
            implementing automation using Python-Selenium Web Driver
          </li>
          <li>
            Reduced production costs and defects for the project by leading the
            QA activities in delivering weekly sprints{" "}
          </li>
        </ul>
        <h3>Associate Consultant - 2</h3>
        <ul className="info">
          <li>
          Collaborated with Business teams and designed, implemented strategic use cases to deliver successful
production deliveries
          </li>
          <li>
          Built complete project hierarchy in with visual studio code and built websites using React and NodeJs
following REST standard
          </li>
          <li>
          Single-handedly managed offshore project responsibilities. Proactively suggested improvements to the
management team to reduce redundant work
          </li>
          <li>
          Worked with Databases using MongoDB and implemented CRUD operations
          </li>
          <li>
          Designed and built a minimalistic, user friendly UI using HTML, CSS, SASS
          </li>
          <li>
          Involved in management activities, all management and business meetings
          </li>
          <li>
          Awarded “Value-Award” in 2019 by CEO for leading the project and getting many client appreciations. Won
3 “SPOT” recognition awards for my contribution to the projects as QA Engineer and Front-end Developer
          </li>
        </ul>
        </div>
      </div>
    </experience>
  );
}

export default Experience;
