// src/components/Header.jsx
import React from "react";
import Navbar from "./Navbar"; // Import Navbar here

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="site-name">Donna Burns</h1>
        <Navbar /> {/* Use the Navbar component here */}
      </div>
    </header>
  );
};

export default Header;
