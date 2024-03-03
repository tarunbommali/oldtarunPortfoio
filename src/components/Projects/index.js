import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGithub } from "react-icons/fa"; // Importing Terminal icon from react-icons
import { projectsList } from "./projectsData";

import "./index.css";

class Projects extends Component {
  render() {
    // Sort projectsList based on the date
    const sortedProjects = projectsList.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    return (
      <div className="project-container">
        <VerticalTimeline>
          {sortedProjects.map((project) => (
            <VerticalTimelineElement
              key={project.projectId}
              className={`vertical-timeline-element${
                project.category ? `--${project.category.toLowerCase()}` : ""
              }`}
              contentStyle={{ background: "#1b1f23", color: "#fff" }}
              date={<span style={{ fontWeight: "bold" }}>{project.date}</span>}
              iconStyle={{ background: "#222425", color: "#fff" }}
              icon={<FaGithub />}
            >
              <div className="project-details">
                <div className="project-title-description">
                  <h3 className="vertical-timeline-element-title">
                    {project.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {project.category}
                  </h4>
                  <p>{project.description}</p>
                </div>
                <img
                  src={project.imageURL}
                  alt={project.title}
                  className="icon"
                />
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    );
  }
}

export default Projects;
