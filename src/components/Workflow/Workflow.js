import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkflowCard from "./WorkflowCards";
import Particle from "../Particle";
import step1 from "../../Assets/step1.png"
import step2 from "../../Assets/step2.png"

function Workflow() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Workflow </strong>
        </h1>
        <p style={{ color: "white" }}>
          Below are the steps how <b className="purple">IRNET</b> works
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <WorkflowCard
              imgPath={step1}
              isBlog={false}
              title="Got your own data?"
              description="Choose a cancer treatement, type and upload the expression file."
              s1Link="http://digbio-devel.missouri.edu:9090/predict_upload"
            />
          </Col>

          <Col md={6} className="project-card">
            <WorkflowCard
              imgPath={step2}
              isBlog={false}
              title="View and compare with our results"
              description="View the ICI response Predictions and interpret the results."
              s2Link="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Workflow;
