// src/components/Skills.jsx
import React from "react";

const skills = ["JavaScript", "React", "Node.js", "CSS"];

const Skills = () => {
  return (
    <section className="skills">
      <h2>Know-How:</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
