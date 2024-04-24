import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import PatientBarGraph from "./Scores";

export default function Results() {
  const location = useLocation();
  const { jobId } = location.state; 
  const [patientData, setPatientData] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://digbio-g2pdeep.rnet.missouri.edu:9900/prediction_results/${jobId}`);
      const data = await response.json();
     // console.log(data);
      setPatientData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);
//console.log(patientData);
    return(
        <Container fluid className="project-section">
        <Particle />
        <Container>

        <h3 style={{ fontSize: "1.6em", padding: "20px" }}>
          <strong className="purple">Prediction Results </strong>
        </h3>
        <PatientBarGraph patientData={patientData} jobId={jobId}/>
        <br></br>
        <p className='white'>Click on the specific patient bar you need to view pathway weightage and relation for that patient. </p>
        </Container>
        </Container>
    );
}