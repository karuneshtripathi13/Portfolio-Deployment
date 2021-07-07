import React, { useState, useEffect } from "react";
import "./project.css";
import Card from "./Card";
import data from "./data";
import "./project.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [project, setProject] = useState(data.projects[0]);
  const [projects, setProjects] = useState(data.projects);

  const nextProperty = () => {
    console.log(project.id);
    const newIndex = project.id;
    setProject(data.projects[newIndex]);
  };
  const prevProperty = () => {
    console.log(project.id - 1);
    const newIndex = project.id - 2;
    setProject(data.projects[newIndex]);
  };
  useEffect(() => {
    setProjects(data.projects);
  }, []);
  return (
    <div>
      <div className="projectheading">PROJECTS</div>
      <div className="portfolio">
        <div className="page">
          <FontAwesomeIcon
            className="next"
            onClick={() =>{if(project.id !== projects.length) nextProperty()}}
            icon={faChevronCircleRight}
            style={{ marginTop: "2vw", color: "gold" }}
          />
          <FontAwesomeIcon
            className="prev"
            onClick={() =>{if(project.id !== 1) prevProperty()}}
            icon={faChevronCircleLeft}
            style={{ marginTop: "2vw", color: "gold" }}
          />
          <div className="col">
            <div className={`cards-slider active-slide-${project.id}`}>
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${
                    project.id * (100 / projects.length)
                  }%)`,
                }}
              >
                {projects.map((project) => (
                  <Card key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#Contact" style={{ bottom: 0 }}>
        <FontAwesomeIcon
          icon={faChevronCircleDown}
          className="downarrow"
          id="dnpj"
        />
      </a>
    </div>
  );
};

export default Projects;
