import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import "./skills.css";
import logo from "./logo192.png";
import jslogo from "./jslogo.png";
import nodelogo from "./img_189697.png"
import htmllogo from "./html.png"
const Skills = () => {
  return (
    <div>
      <div className="skillsetheading">SKILLSET</div>
      <div className="anime" style={{ display: "flex" }}>
        <div className="logocontainter" style={{ display: "flex", flexDirection: "column" }}>
          <img
            src={logo}
            alt="reactlogo"
            className="reactlogoanimation"
            style={{ width: "10vw", height: "10vw", marginRight: "3vw",marginTop:"0vw",marginLeft:"2vw" }}
          ></img>
          <img
            src={nodelogo}
            alt="reactlogo"
            className="nodelogoanimation"
            style={{ width: "9vw", height: "10vw", marginLeft: "3vw",marginTop:"-1vh" }}
          ></img>
        </div>
        <div style={{ minWidth: "50vw",marginRight:"5vw" }}>
          <div className="barcontainer">
            <span className="skill">React JS</span>
            <div className="percent1"></div>
            <span style={{ marginLeft: "6%", marginRight: "1%" }}>90%</span>
          </div>
          <div className="barcontainer">
            <span className="skill">HTML</span>
            <div className="percent2"></div>
            <span style={{ marginLeft: "1%", marginRight: "1%" }}>95%</span>
          </div>
          <div className="barcontainer">
            <span className="skill">CSS</span>
            <div className="percent1"></div>
            <span style={{ marginLeft: "6%", marginRight: "1%" }}>90%</span>
          </div>
          <div className="barcontainer">
            <span className="skill">Node JS</span>
            <div className="percent3"></div>
            <span style={{ marginLeft: "16%", marginRight: "1%" }}>80%</span>
          </div>
          <div className="barcontainer">
            <span className="skill">Java</span>
            <div className="percent1"></div>
            <span style={{ marginLeft: "6%", marginRight: "1%" }}>90%</span>
          </div>
          <div className="barcontainer">
            <span className="skill">Python</span>
            <div className="percent4"></div>
            <span style={{ marginLeft: "21%", marginRight: "1%" }}>75%</span>
          </div>
          <div className="barcontainer">
            <span className="skill">C/C++</span>
            <div className="percent2"></div>
            <span style={{ marginLeft: "1%", marginRight: "1%" }}>95%</span>
          </div>
          <div className="barcontainer">
            <span className="skill">Machine&nbsp;Learning</span>
            <div className="percent5"></div>
            <span
              style={{
                marginLeft: "26%",
                marginRight: "1%",
              }}
            >
              70%
            </span>
          </div>
        </div>
        <div className="logocontainer2" style={{display:"flex",flexDirection:"column"}}>
          <img src={htmllogo} alt="htmllogo" className="htmllogo" style={{width:"10vw",height:"10vw",marginRight:"5vw"}}></img>
          <img src={jslogo} alt="jslogo" id="jslogo" className="box bounce-7" style={{width:"10vw",height:"10vw",marginRight:"5vw",marginTop:"2vw"}}></img>          
          </div>
      </div>
      <a href="#Education">
          <FontAwesomeIcon icon={faChevronCircleDown} className="downarrow" style={{marginTop:"2vw",color:"black"}}/>
      </a>
    </div>
  );
};

export default Skills;
