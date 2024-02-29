import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkflowCard from "./WorkflowCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Step 1"
              description="Choose a cancer treatement, type and upload the expression file."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <WorkflowCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Step 2"
              description="View the ICI response Predictions and interpret the results."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Workflow;
