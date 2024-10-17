import React, { useEffect, useState } from "react";
import axios from "axios";

const SiteCounter = () => {
  const [visitCount, setVisitCount] = useState(0);

  // Fetch the current visit count from CountAPI
  useEffect(() => {
    axios
      .get("https://api.countapi.xyz/hit/donna-portfolio/visits") // Create a unique endpoint for your site
      .then((response) => {
        setVisitCount(response.data.value); // Get the visit count from the response
      })
      .catch((error) => {
        console.error("Error fetching the visit count", error);
      });
  }, []);

  return (
    <div style={counterStyle}>
      <h3>You are my number {visitCount} visitor!</h3>
    </div>
  );
};

// Simple styling for the counter
const counterStyle = {
  backgroundColor: "rgba(170, 148, 127, 0.9)",
  color: "#81d8d0",
  borderRadius: "5px",
  textAlign: "center",
  marginTop: "1px",
  fontFamily: "'Montserrat', sans-serif",
};

export default SiteCounter;
