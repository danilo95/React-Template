import React from "react";
import "./navbar.css";

const NavBar = () => {
  console.log()
  return (
    <>
      <header> Dashboard </header>
      <div className="header-container">
        <div className="breadcumb">
          <span>Home / Dashboard / Workplace</span>
        </div>
        <div className="main-container">
          <div className="title">
            <img
              className="avatar"
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
              
            />
            <div className="container-datavalue">
              <span className="principal-title">
                Good morning, Serati Ma, i wish you happiness every day!
              </span>
              <span className="subtitle">
                Interaction expert | Ant gold service-some certain business
              </span>
            </div>
          </div>
          <div className="data">
          <div className="values-container"> 
          <span className="values-title">Number of items</span>
            <span className="value">56</span>
            </div>
            <div className="vbar" />
            <div className="values-container"> 
            <span className="values-title">Team Ranking</span>
            <span className="value">24</span>
            </div>
            <div className="vbar" />
            <div className="values-container"> 
            <span className="values-title">Project Visit</span>
            <span className="value">2,2334</span>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default NavBar;