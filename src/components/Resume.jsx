import React from "react";
import Resume1 from "../assets/graphics/Resume1.png"; // Correct import for files in src/assets
import Resume2 from "../assets/graphics/Resume2.png";

const Resume = () => {
  return (
    <section className="resume-container">
      <div className="resume-card">
        <h2>My Resume</h2>
        {/* Center the images by adding styling */}
        <img
          src={Resume1}
          alt="Resume Page 1"
          style={{
            display: "block",
            margin: "0 auto 20px",
            borderRadius: "10px",
            width: "75%",
          }}
        />
        <img
          src={Resume2}
          alt="Resume Page 2"
          style={{
            display: "block",
            margin: "0 auto 20px",
            borderRadius: "10px",
            width: "75%",
          }}
        />

        {/* Download button for the full PDF version */}
        <div
          className="download-resume"
          style={{ marginTop: "20px", textAlign: "center" }}
        >
          <a
            href="/DonnaBurnsResume.pdf"
            download="Donna_Burns_Resume.pdf"
            className="download-button"
          >
            Download my Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
