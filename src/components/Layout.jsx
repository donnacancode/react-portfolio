// src/components/Layout.jsx
import React from "react";
import Header from "./Header";
import Navbar from "./Navbar"; // Navbar should be here if it's part of the layout
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
