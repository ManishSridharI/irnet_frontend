import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Particle from "../Particle";
import Drugstack from "./Drugstack";
import Description from "./Card"
import laptopImg from "../../Assets/about.jpg";
import Dataset from "./Dataset.js"
import FileUpload from "./FileUpload.js"
import Button from "react-bootstrap/Button";
import { MdOnlinePrediction } from "react-icons/md";

export default function Upload() {
  const navigate = useNavigate();

  const [jobId, setJobId] = useState(0); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch the highest jobId when the component mounts
    const fetchJobId = async () => {
      try {
        const response = await fetch('http://digbio-g2pdeep.rnet.missouri.edu:9900/job_id');
        const data = await response.json();
        setJobId(data.highest_job_id + 1); // Set the jobId from the response
      } catch (error) {
        console.error('Error fetching jobId:', error);
      }
    };

    fetchJobId(); // Call the fetchJobId function
  }, []);

  const handlePrediction = async () => {
    try {
      setLoading(true); // Show preloader
      // Replace 'your-backend-endpoint' with the actual backend endpoint URL
      const response = await fetch('http://digbio-g2pdeep.rnet.missouri.edu:9900/run_prediction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobId }),
      });
      const data = await response.json();
      // console.log('Backend response:', data);

      // Redirect to the prediction result page after the response
     navigate('/predict_results', { state: { jobId } });
     //navigate(`/predict_results`);
    } catch (error) {
      navigate('/error')
      console.error('Error during prediction:', error);
    }
    finally {
      setLoading(false); // Hide preloader
    }
  };

    return(
        <Container fluid className="about-section">
          <Particle/>
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
        <Drugstack jobId={jobId}/>
        <h1 className="project-heading">
          Choose/Upload the <strong className="purple">Dataset</strong>
        </h1>
        <Dataset jobId={jobId}/>
        <FileUpload jobId={jobId}/>
        {loading && (
        <div id="preloader">
          <div>Please donot go back or refresh</div>
          <div>Processing your prediction... It takes less than 2 minutes</div>
        </div>
      )}
        <Button jobId={jobId}
                onClick={handlePrediction}
                className="fork-btn-inner"
              >
                <MdOnlinePrediction style={{ fontSize: "1.2em" }} />{" "}
                Proceed to Prediction
              </Button>
      </Container>
    </Container>
    );
}
