// src/components/Projects.jsx
import React from "react";
import blog from "../assets/graphics/blog.gif";
import guessnumber from "../assets/graphics/guessnumber.gif";
import weather from "../assets/graphics/weather.gif";
import jate from "../assets/graphics/jate.gif";
import kanban from "../assets/graphics/kanban.gif";
import portfolio1 from "../assets/graphics/portfolio1.gif";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaServer,
  FaDatabase,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "A weather app that displays the current weather and five day forecast for your chosen location.",
    gif: weather,
    icons: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />], // Icons for this project
  },
  {
    id: 2,
    name: "A simple retro-styled number guessing game.",
    gif: guessnumber,
    icons: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaReact />], // Icons for this project
  },
  {
    id: 3,
    name: "Kanban board for managing tasks and projects.",
    gif: kanban,
    icons: [<FaReact />, <FaNodeJs />, <FaDatabase />], // Icons for this project
  },
  {
    id: 4,
    name: "Text editor progressive web app with offline support.",
    gif: jate,
    icons: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaReact />], // Icons for this project
  },
  {
    id: 5,
    name: "My first portfolio website.",
    gif: portfolio1,
    icons: [
      <FaHtml5 />,
      <FaCss3Alt />,
      <FaJsSquare />,
      <FaReact />,
      <FaNodeJs />,
    ], // Icons for this project
  },
  {
    id: 6,
    name: "A simple personal blog that utilizes local storage.",
    gif: blog,
    icons: [
      <FaHtml5 />,
      <FaCss3Alt />,
      <FaJsSquare />,
      <FaReact />,
      <FaServer />,
    ], // Icons for this project
  },
];

const Projects = () => {
  return (
    <section className="projects-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h3>{project.name}</h3>
          <img
            src={project.gif}
            alt={`${project.name} GIF`}
            className="project-gif"
          />
          <p>{project.description}</p>
          <div className="project-icons">
            {project.icons.map((icon, index) => (
              <span key={index} className="project-icon">
                {icon}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
