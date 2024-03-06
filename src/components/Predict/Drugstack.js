import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

function Drugstack() {
  // State to store the selected card's value
  const [selectedCard, setSelectedCard] = useState(null);

  // Function to handle click event
  const handleCardClick = (cardValue) => {
    setSelectedCard(cardValue);
  };

  // Function to generate className based on card selection
  const getCardClassName = (cardValue) => {
    return `tech-icons ${selectedCard === cardValue ? "selected" : ""}`;
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={5} md={2}
        className={getCardClassName("Anti-PD1")}
        onClick={() => handleCardClick("Anti-PD1")}
        style={{ cursor: "pointer" }} // Add cursor style for better UX
      >
        <p>Anti-PD1</p>
      </Col>
      <Col
        xs={5} md={2}
        className={getCardClassName("Anti-PDL1")}
        onClick={() => handleCardClick("Anti-PDL1")}
        style={{ cursor: "pointer" }}
      >
        <p>Anti-PDL1</p>
      </Col>
      <Col
        xs={5} md={2}
        className={getCardClassName("Anti-CTLA4")}
        onClick={() => handleCardClick("Anti-CTLA4")}
        style={{ cursor: "pointer" }}
      >
        <p>Anti-CTLA4</p>
      </Col>
    </Row>
  );
}

export default Drugstack;
