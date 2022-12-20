import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Enchanté,
         <br /> <span className="info-name">Alexandre LAISSY</span>.
         <br /> Étudiant en 3ème année 
         <br /> de licence informatique
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
    </div>
  );
}

export default About;