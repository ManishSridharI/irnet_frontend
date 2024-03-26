import React, { useState, useEffect } from "react";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import PatientBarGraph from "./Scores";

export default function Results() {
    return(
        <Container fluid className="project-section">
        <Particle />
        <Container>

        <h3 style={{ fontSize: "1.6em", padding: "20px" }}>
          <strong className="purple">Prediction Results </strong>
        </h3>
        <PatientBarGraph />
        <br></br>
        <p className='white'>Click on the specific patient bar you need to view pathway weightage and relation for that patient. </p>
        </Container>
        </Container>
    );
}