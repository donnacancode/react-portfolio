import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaServer,
  FaDatabase,
} from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <FaServer /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "SQL", icon: <FaDatabase /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <div className="skills-card">
        <h2>Know-How:</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              {skill.icon} <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
