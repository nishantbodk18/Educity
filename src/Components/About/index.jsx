import React from "react";
import "./style.css";
import About_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={About_img} alt="" className="about-img"></img>
        <img src={play_icon} alt="" className="play-icon"></img>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our univercity's
          comprehensive education programs.Our cutting edge Curriculum is
          designed to empower students with the knowledge , skill and experience
          needed to excel dynamic field of education{" "}
        </p>
        <p>
          with the focus on innovative , hands-on learning and personalized ,
          mentorship , our programs prepare aspiring educator to make meaningful
          impact in classroom , schools and communities
        </p>
        <p>Whether you aspire to become teacher , administrator , counselor, or educational leader , our diverse range of programs offer the perfect pathway to achive your goals and unloack your full potential in shaping the future of education</p>
      </div>
    </div>
  );
};

export default About;
