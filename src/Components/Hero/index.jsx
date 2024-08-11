import React from "react";
import "./style.css";
import Dark_Arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for better world</h1>
        <p>
          Our Cutting-edge curriculum is designed to empower students with
          knowledge ,skills and expertise needed to excel in the dynamic field
          of education
        </p>
        <button className="btn"> Explore more <img src={Dark_Arrow} alt="arrow"></img></button>
      </div>
    </div>
  );
};

export default Hero;
