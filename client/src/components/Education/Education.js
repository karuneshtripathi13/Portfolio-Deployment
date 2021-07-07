import React from "react";
import "./education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import logogoogle from "./google.png";
import logostackoverflow from "./stack-overflow.png";
const Education = () => {
  return (
    <div>
      <div className="educationheading">EDUCATION</div>
      <div style={{ display: "flex", flexDirection: "column",maxWidth:"80vw" }}>
        <figure class="swing">
          <div className="tenth">
            10th Standard: 93.5% from City Montessori School,Lucknow,India
          </div>
        </figure>
        <figure class="swing">
          <div className="tenth">
            12th Standard: 93% from City Montessori School,Lucknow,India
          </div>
        </figure>
        <figure class="swing">
          <div className="tenth">
            Bachelor of Technology in Computer Science: 9.0 CGPA from Vellore
            Institute of Technology,Vellore,India
          </div>
        </figure>
        <figure class="swing">
          <div className="tenth">
            Self Learning of web development, Deep Learning and Machine Learning
          </div>
        </figure>
        <div className="logocont">
          <img
            src={logostackoverflow}
            className="stacklogo"
            alt="stackoverflow logo"
          />
          <img src={logogoogle} className="googlelogo" alt="google logo" />
        </div>
      </div>
      <a href="#Projects">
        <FontAwesomeIcon
          icon={faChevronCircleDown}
          className="downarrow"
          style={{
            marginTop: "2vw",
            color: "#212529",
            borderRadius: "5vw",
          }}
        />
      </a>
    </div>
  );
};

export default Education;
