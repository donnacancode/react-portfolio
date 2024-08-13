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
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "An app that displays the current weather and five day forecast.",
    gif: weather,
    icons: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />],
    deployedLink: "http://donnaburns.me/weatherapp/",
    githubLink: "https://github.com/donnacancode/weatherapp",
  },
  {
    id: 2,
    name: "A simple retro-styled number guessing game.",
    gif: guessnumber,
    icons: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />],
    deployedLink: "http://donnaburns.me/Guess-the-Number/",
    githubLink: "https://github.com/donnacancode/Guess-the-Number",
  },
  {
    id: 3,
    name: "Kanban board for managing tasks and projects.",
    gif: kanban,
    icons: [<FaReact />, <FaNodeJs />, <FaDatabase />],
    deployedLink: "http://donnaburns.me/Kanban/",
    githubLink: "https://github.com/donnacancode/Kanban",
  },
  {
    id: 4,
    name: "Text editor progressive web app with offline support.",
    gif: jate,
    icons: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaReact />],
    deployedLink: "https://text-editor-pwa-1-czyt.onrender.com/",
    githubLink: "https://github.com/donnacancode/Text-editor-pwa",
  },
  {
    id: 5,
    name: "My very first portfolio website with HTML and CSS.",
    gif: portfolio1,
    icons: [<FaHtml5 />, <FaCss3Alt />],
    deployedLink: "http://donnaburns.me/Portfolio/",
    githubLink: "https://github.com/donnacancode/Portfolio",
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
    ],
    deployedLink: "http://donnaburns.me/Personal-Blog/",
    githubLink: "https://github.com/donnacancode/Personal-Blog",
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
          <div className="project-links">
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt /> Deployed Project
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub Repository
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
