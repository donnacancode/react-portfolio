// src/components/Resume.jsx
import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="resume-container">
      <div className="resume-card">
        <h2>Professional History</h2>
        <p>
          Download my resume{" "}
          <a href="./assets/resume.docx" download>
            here
          </a>
          .
        </p>
        <h3>Experience</h3>
        <ul>
          <li>
            <strong>Admin and Events Manager</strong> - Ross Brewing Company
            (2020-2024)
          </li>
          <li>
            <strong>Founder/Owner</strong> - Shore Thing Pet Concierge
            (2020-Present)
          </li>
          <li>
            <strong>Program Manager/Coordinator</strong> - Roosevelt Island
            Operating Corporation (2007-2020)
          </li>
        </ul>
        <h3>Education</h3>
        <ul>
          <li>
            <strong>Bachelor of Arts</strong> - Rutgers University (2005)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
