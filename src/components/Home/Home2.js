import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import IRnet_overview from "../../Assets/IRnet overview.png"
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> OVERVIEW </span> 
            </h1>
            <p className="home-about-body">
            <b className="purple">Immunotherapy,</b> specifically, <b className="purple">immune checkpoint inhibitors (ICIs) </b>are powerful and 
            precise therapies for many cancer types and have improved the survival of patients who positively respondse to them. However, only a 
            minority of patients respond to ICI treatments. Thus, determining ICI responders before treatment would dramatically save medical 
            resources and save time for alternative therapies. Here, we present a novel <b className="purple">deep-learning framework </b>that 
            leverages <b className="purple">graph neural network</b> and <b className="purple">biological pathway knowledge</b> to predict ICI 
            treatment response. The results indicate that the 
            <b className="purple"> prediction performance is superior to other state-of-the-art methods or tumor microenvironment-based predictions. </b> 
            Moreover, the model quantifies the importance of pathways, pathway interactions, and genes to 
            the prediction. Such interpretability of <b className="purple">IRnet</b> provides mechanism insights intoof different ICI treatments.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={IRnet_overview} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
