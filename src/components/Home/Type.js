import React from "react";
import "./Type.css"; // Assuming your CSS is defined here

const strings = [
  "Immunotherapy response",
  "prediction using",
  "pathway knowledge-informed",
  "graph neural network",
];

function Type() {
  // Join all strings into one long text with a separator for visual clarity
  const combinedText = strings.join(" ");

  return (
    <div className="scroller-container">
      <div className="scroller-content">
        {/* Render your combined text here */}
        {combinedText}
      </div>
    </div>
  );
}

export default Type;
