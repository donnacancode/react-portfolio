// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    id: 1,
    name: "Project 1",
    description: "This is a description of Project 1.",
  },
  {
    id: 2,
    name: "Project 2",
    description: "This is a description of Project 2.",
  },
  {
    id: 3,
    name: "Project 3",
    description: "This is a description of Project 3.",
  },
  {
    id: 4,
    name: "Project 4",
    description: "This is a description of Project 4.",
  },
  {
    id: 5,
    name: "Project 5",
    description: "This is a description of Project 5.",
  },
  {
    id: 6,
    name: "Project 6",
    description: "This is a description of Project 6.",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`project-card ${index % 2 === 0 ? "left" : "right"}`}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
