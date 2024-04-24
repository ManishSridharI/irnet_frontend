import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import laptopImg from "../Assets/error.jpg";

function Error() {
  const img_css = { width: '30px', height: '30px', paddingTop: "120px", paddingBottom: "20px" };
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
              Couldn't run <strong className="purple">prediction</strong>
            </h1>
           <p>Please check the format of the example <strong className="purple">Dataset</strong> or reach out to our Team!</p>
          </Col>
          <Col
            md={5}
            style={{img_css}}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Error;
