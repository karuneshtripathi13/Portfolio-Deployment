import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <nav id="navpos" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div style={{display:"inline",height:"6vw"}}>
      <a id="logo" className="navbar-brand" href="#Home" style={{padding:0,paddingLeft:10,margin:0,paddingRight:50}}>
        KT
      </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} style={{color:"gold"}}/>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#Home" id="hm">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#AboutMe" id="ab">
              ABOUT ME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Skillset" id="sk">
              SKILLSET
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Education" id="ed">
              EDUCATION
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Projects" id="pr">
             PROJECTS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact" id="co">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
