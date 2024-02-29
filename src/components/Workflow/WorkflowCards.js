import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { VscDebugStart } from "react-icons/vsc";
import { VscOutput } from "react-icons/vsc";
import { Link } from 'react-router-dom';

function WorkflowCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" className="card-img-custom"/>
      <Card.Body>
        <Card.Title style={{ color: '#c770f0' }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        {!props.isBlog && props.s1Link && (
          <Link to="/predict_upload" className="btn btn-primary">
          <VscDebugStart /> &nbsp; Start Here
        </Link>
        //   <Button variant="primary" href={props.s1Link} >
        //   <VscDebugStart /> &nbsp;
        //   {"Start Here"}
        // </Button>
        )}
        
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.s2Link && (
          <Link to="/predict_results" className="btn btn-primary">
          <VscDebugStart /> &nbsp; View Results
        </Link>
        )}
      </Card.Body>
    </Card>
  );
}
export default WorkflowCards;
