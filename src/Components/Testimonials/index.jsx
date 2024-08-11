import React from "react";
import "./style.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn"></img>
      <img src={back_icon} alt="" className="back-btn"></img>
      <div className="slider">
      <ul>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_1} alt=""></img>
              <div>
                <h3>William Jackson</h3>
                <span>Educity,USA</span>
              </div>
            </div>
            <p>
              Choosing to pursue my degree at educity was one of the best
              decision I've ever made. The supportive community,
              state-of-the-art facilitates , and commitment to academic
              excellence have truly exceeded my expections
            </p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_2} alt=""></img>
              <div>
                <h3>William Jackson</h3>
                <span>Educity,USA</span>
              </div>
            </div>
            <p>
              Choosing to pursue my degree at educity was one of the best
              decision I've ever made. The supportive community,
              state-of-the-art facilitates , and commitment to academic
              excellence have truly exceeded my expections
            </p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_3} alt=""></img>
              <div>
                <h3>William Jackson</h3>
                <span>Educity,USA</span>
              </div>
            </div>
            <p>
              Choosing to pursue my degree at educity was one of the best
              decision I've ever made. The supportive community,
              state-of-the-art facilitates , and commitment to academic
              excellence have truly exceeded my expections
            </p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_4} alt=""></img>
              <div>
                <h3>William Jackson</h3>
                <span>Educity,USA</span>
              </div>
            </div>
            <p>
              Choosing to pursue my degree at educity was one of the best
              decision I've ever made. The supportive community,
              state-of-the-art facilitates , and commitment to academic
              excellence have truly exceeded my expections
            </p>
          </div>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Testimonials;
