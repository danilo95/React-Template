import React from "react";

import "./singleproject.css";

const Singleproject = () => {
  return (
    <div className="single-container">
      <div className="project-title">
      <div className="team-data-container">
            <img src="https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="team img" className="team-logo"/>
            <span className="team-title">scientific movs...</span>
        </div>
      </div>
      <div  className="project-description">
        <span>
          its a inner thing they can't reach and can't reach
        </span>
      </div>
      <div className="project-extrainfo">
        <span className="project-extrainfo-footer">Science moving bricks</span>
        <span className="project-date">2 days ago</span>
      </div>
    </div>
  );
};

export default Singleproject;