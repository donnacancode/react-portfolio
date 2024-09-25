// src/components/About.jsx
import React from "react";
import profilepic from "../assets/graphics/profilepic.jpg";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-card">
        <h2>About Me</h2>
        <p>
          I am a Full Stack Developer with a passion for creating dynamic and
          engaging web applications! I recently completed the Rutgers
          University/EdX comprehensive Full Stack Web Development Bootcamp. This
          intensive program has equipped me with cutting-edge skills in HTML,
          CSS, JavaScript, Node.js, Express.js, React.js, SQL, MongoDB, and
          more. I absolutely love the creativity and problem-solving that web
          development requires, and I am excited to continue learning and
          growing in this field!
        </p>
        <p>
          Before officially beginning my tech journey, I spent two decades
          acquiring diverse professional experience! With a background in event
          management, program coordination, and entrepreneurship, I am adept at
          learning as I go, managing multiple priorities, leading teams, and
          delivering high-quality results. My goal is to leverage my unique
          blend of skills and experience to excel as a Full Stack Developer and
          contribute to innovative web development projects.
        </p>
        <img src={profilepic} alt="Donna Burns" className="about-image" />
      </div>
    </section>
  );
};

export default About;
