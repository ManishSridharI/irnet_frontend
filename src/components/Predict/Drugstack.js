import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

function Drugstack({ jobId }) {
  // State to store the selected card's value
  const [selectedCard, setSelectedCard] = useState(null);

  // Function to handle click event
  const handleCardClick = (cardValue) => {
    setSelectedCard(cardValue);
    sendDrugInfo(cardValue);

  };

  const sendDrugInfo = async (cardValue) => {
    try {
        const response = await fetch('/api/drug_info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({jobId, cardValue}),
        });
        const responseData = await response.json();
        // console.log('Drug Info Response:', responseData);
        // Handle the response data from the predictioninfo API
    } catch (error) {
        console.error("Failed to send drug info:", error);
    }
};

  // Function to generate className based on card selection
  const getCardClassName = (cardValue) => {
    return `tech-icons ${selectedCard === cardValue ? "selected" : ""}`;
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={5} md={2}
        className={getCardClassName("anti-PD1")}
        onClick={() => handleCardClick("anti-PD1")}
        style={{ cursor: "pointer" }} // Add cursor style for better UX
      >
        <p>Anti-  PD1</p>
      </Col>
      <Col
        xs={5} md={2}
        className={getCardClassName("anti-PDL1")}
        onClick={() => handleCardClick("anti-PDL1")}
        style={{ cursor: "pointer" }}
      >
        <p>Anti-PDL1</p>
      </Col>
      <Col
        xs={5} md={2}
        className={getCardClassName("anti-CTLA4")}
        onClick={() => handleCardClick("anti-CTLA4")}
        style={{ cursor: "pointer" }}
      >
        <p>Anti-CTLA4</p>
      </Col>
    </Row>
  );
}

export default Drugstack;
