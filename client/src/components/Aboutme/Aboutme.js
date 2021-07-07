import React from "react";
import "./aboutme.css";
import profile from "./profilephoto.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
const Aboutme = () => {
  return (
    <div className="aboutme">
      <div className="about-heading">ABOUT</div>
      <div className="aboutcontainer">
        <div>
          <img className="profile" src={profile} alt="profilephoto" />
        </div>
        <div className="abouttext">
          I am passionate about building excellent software that improves the
          lives of those around me. I belong to Lucknow,U.P.,India. I am
          currently persuing B.Tech Computer Science.I have very keen interest
          in Web development, Artificial Intelligence, Machine Learning, Deep
          Learning, Blockchain,etc. So far I have learned Java, Python, C++, C,
          ReactJS, React Native, HTML, CSS, JS, MongoDB and other tools.Since
          last year I have started learning data analysis and machine learning
          and learned scikit learn and pandas library and created some projects
          in the same. For data analysis I used Python and PowerBI and performed
          visualization and analysis on various static and streaming datasets.
          Now I am determined to learn deep learning concepts and improve my
          problem solving skills further.
        </div>
      </div>
      <a href="#Skillset">
          <FontAwesomeIcon icon={faChevronCircleDown} className="downarrow" style={{marginTop:"2vw",color:"white"}}/>
      </a>
    </div>
  );
};

export default Aboutme;
