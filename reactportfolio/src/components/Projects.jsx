import React from "react";

const projects = [
  {
    id: 1,
    name: "Project 1",
    description: "This is a description of Project 1.",
    link: "#",
  },
  {
    id: 2,
    name: "Project 2",
    description: "This is a description of Project 2.",
    link: "#",
  },
  {
    id: 3,
    name: "Project 3",
    description: "This is a description of Project 3.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>A Few Things I've Worked On...</h2>
      <div className="projects-list">
        {Projects.map((project) => (
          <div key={project.id} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>Check it out!</a>
          </div>
        ))}
      </div>
    </section>
  );
};
