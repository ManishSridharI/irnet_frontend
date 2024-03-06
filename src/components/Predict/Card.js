import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function Description() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Currently, we have the models build for below <span className="purple">DRUGS</span> - Select one of the treatments.
            <br /> 
            <br />
            The prediction will happen on the immunotherapy treatment type you choose.
            <br /> 
            <br />
            You can choose to upload your own dataset or select one of our data!
            <br /> 
            <br />
            Dataset should be a Gene expression matrix with values separated by Tab. Rows are named with gene symbols. Columns are named with patient IDs.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Description;
