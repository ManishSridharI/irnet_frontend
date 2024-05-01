import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "./Particle";
import pdf from "../Assets/README.pdf";
// import manuscript from "../Assets/manuscript.pdf"
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function GettingStarted() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); // Not used for rendering all pages, but good to have if needed for navigation
  const [width, setWidth] = useState(1200);

  const downloadlink = (event) => {
    event.preventDefault();
    // using Java Script method to get PDF file
    fetch('manuscript.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'manuscript.pdf';
            alink.click();
        })
    })
}

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h2 className="purple">Documentation</h2>
          <p></p>
          <p>Please see through the below documents for the clear understanding of our model.</p>
          <p>You can also find the manuscript for our paper at the bottom of this page.</p>
        </Row>
        <Row className="resume justify-content-center">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="pdf"
          >
            {Array.from(
              new Array(numPages),
              (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={width > 786 ? 1.5 : 0.6} />
              )
            )}
          </Document>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            
            onClick={downloadlink}
            href="#"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Manuscript
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default GettingStarted;
