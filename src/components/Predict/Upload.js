import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Drugstack from "./Drugstack";
import Description from "./Card"
import laptopImg from "../../Assets/about.jpg";
import Dataset from "./Dataset.js"
import FileUpload from "./FileUpload.js"
import Button from "react-bootstrap/Button";
import { MdOnlinePrediction } from "react-icons/md";

export default function Upload() {
    return(
        <Container fluid className="about-section">
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
              Choose the <strong className="purple">Cancer </strong>Type
            </h1>
            <Description />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Treatement <strong className="purple">Type </strong>
        </h1>
        <Drugstack />
        <h1 className="project-heading">
          Choose/Upload the <strong className="purple">Dataset</strong>
        </h1>
        <Dataset/>
        <FileUpload/>
        <Button
                href="/predict_result"
                className="fork-btn-inner"
              >
                <MdOnlinePrediction style={{ fontSize: "1.2em" }} />{" "}
                Proceed to Prediction
              </Button>
      </Container>
    </Container>
    );
}
