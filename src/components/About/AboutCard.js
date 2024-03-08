import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, we are <span className="purple">Digital Biology Lab. </span>
            <br/>
            Digital Biology Laboratory (DBL) is a research and education powerhouse in bioinformatics 
            and computational biology. DBL develops novel computational methods, algorithms, software and information systems, 
            and applies these tools and other informatics resources for various biological and medical problems.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
