import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaPinterest } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://x.com/donnacancode"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/donnacancode"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/donna-burns-loves-tech/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.pinterest.com/donnamas/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pinterest"
        >
          <FaPinterest />
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} by Donna Burns! All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
