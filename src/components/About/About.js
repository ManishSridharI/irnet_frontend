import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Teamstack from "./Teamstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/digbio.png";
import Facultystack from "./Facultystack";

function About() {
  const img_css = { width: '50px', height: '50px', paddingTop: "120px", paddingBottom: "50px" };
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">We're</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{img_css}}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Faculty</strong>
        </h1>
        <Facultystack />

        <h1 className="project-heading">
          <strong className="purple">Team </strong>
        </h1>

        <Teamstack />



      </Container>
    </Container>
  );
}

export default About;
