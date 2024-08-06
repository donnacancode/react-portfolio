import React from "react";

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>
        Download my resume{" "}
        <a href="./assets/resume.docx" download>
          download!
        </a>
        .
      </p>
    </section>
  );
};

export default Resume;
