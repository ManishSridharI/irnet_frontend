import React, { useEffect, useState } from "react";
import "@react-sigma/core/lib/react-sigma.min.css";
import { SigmaContainer, ControlsContainer, useSigma, useRegisterEvents, ZoomControl,  SearchControl, FullScreenControl, } from "@react-sigma/core";
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";
import { GraphDefault } from "./GraphDefault";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import { LuRefreshCw } from "react-icons/lu";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import pathwayCategories from './pathway_categories.json'
import Select from 'react-select';

const DragNdrop = () => {
  const location = useLocation();
  const patientId = location.state?.patientId;
  const jobId = location.state?.jobId;
  const [selectedPathway, setSelectedPathway] = useState(null);
  // console.log(patientId,jobId,'ids');

  // const pathwayOptions = Object.entries(pathwayCategories).map(([key, value]) => ({
  //   value: key,
  //   label: value.pathway_name
  // }));

  const GraphEvents = () => {
    const registerEvents = useRegisterEvents();
    const sigma = useSigma();
    const [draggedNode, setDraggedNode] = useState(null);

    useEffect(() => {
      // Register the events
      registerEvents({
        downNode: (e) => {
          setDraggedNode(e.node);
          sigma.getGraph().setNodeAttribute(e.node, "highlighted", true);
        },
        mouseup: (e) => {
          if (draggedNode) {
            setDraggedNode(null);
            sigma.getGraph().removeNodeAttribute(draggedNode, "highlighted");
          }
        },
        mousedown: (e) => {
          // Disable the autoscale at the first down interaction
          if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
        },
        mousemove: (e) => {
          if (draggedNode) {
            // Get new position of node
            const pos = sigma.viewportToGraph(e);
            sigma.getGraph().setNodeAttribute(draggedNode, "x", pos.x);
            sigma.getGraph().setNodeAttribute(draggedNode, "y", pos.y);

            // Prevent sigma to move camera:
            e.preventSigmaDefault();
            e.original.preventDefault();
            e.original.stopPropagation();
          }
        },
        touchup: (e) => {
          if (draggedNode) {
            setDraggedNode(null);
            sigma.getGraph().removeNodeAttribute(draggedNode, "highlighted");
          }
        },
        touchdown: (e) => {
          // Disable the autoscale at the first down interaction
          if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
        },
        touchmove: (e) => {
          if (draggedNode) {
            // Get new position of node
            const pos = sigma.viewportToGraph(e);
            sigma.getGraph().setNodeAttribute(draggedNode, "x", pos.x);
            sigma.getGraph().setNodeAttribute(draggedNode, "y", pos.y);

            // Prevent sigma to move camera:
            e.preventSigmaDefault();
            e.original.preventDefault();
            e.original.stopPropagation();
          }
        },
      });
    }, [registerEvents, sigma, draggedNode]);

    return null;
  };
  const [graphKey, setGraphKey] = useState(0);
  const [selectedNetworkType, setSelectedNetworkType] = useState(null); 
  const [showCategories, setShowCategories] = useState(false);
  const categories = ['metabolism', 'Genetic Information Processing', 'Environmental Information Processing', 'Cellular Process', 'Organismal Systems', 'Human Diseases'];
  const handleCardClick = (networkType) => {
    if (networkType === 'category-network') {
      setShowCategories(true); // Show category options
    } else {
      setSelectedNetworkType(networkType);
      setShowCategories(false); // Hide categories if other options are clicked
      setGraphKey(prevKey => prevKey + 1);
    }
  };
  // Function to refresh the graph
  const refreshGraph = () => {
    setGraphKey(prevKey => prevKey + 1); // Incrementing the key will cause the component to rerender
  };

  // const handlePathwayChange = selectedOption => {
  //   setSelectedPathway(selectedOption);
  //   console.log(selectedOption);
  //   if (selectedOption) {
  //     // Center the graph on the selected node
  //     const nodePosition = sigma.getGraph().getNodeAttributes(selectedOption.value);
  //     sigma.getCamera().animate({ x: nodePosition.x, y: nodePosition.y, ratio: 1 }, { duration: 500 });
  //   }
  // };
  const network_card_css = { height:'10%', width: '30%', margin: '1%', boxShadow: '0 0 2rem rgb(3 3 3 / 20%), 0 0 0.3rem rgb(3 3 3 / 9%)' };
  const pathway_card_css = { height:'5%', width: '15%', margin: '0.5%', boxShadow: '0 0 2rem rgb(3 3 3 / 20%), 0 0 0.3rem rgb(3 3 3 / 9%)' };
  const name_css = { fontSize: "1.6em", margin: '5px' };
  const name2_css = { fontSize: "0.8em", margin: '5px' };
  return (
    <Container fluid className="network-section">
      <Particle/>
      <h3 style={{ fontSize: "1.6em" }}>
          <strong className="purple">Pathway Network </strong>
        </h3>
      <p className='white'>Select the type of comparison you want to perform on the newtork. </p>
      <Row>
      {/* <Select
            options={pathwayOptions}
            onChange={handlePathwayChange}
            placeholder="Search for a pathway..."
            isClearable={true}
          /> */}
      <Card style={network_card_css} onClick={() => handleCardClick('top50-network')}>
        <CardActionArea>
          <CardContent>
             <div >
                  <h3 style={name_css}>Filter by weights</h3>
                  <p>Select this to compare the Top 50 pathways</p>
              </div >
          </CardContent>
          </CardActionArea>
      </Card >
      <Card style={network_card_css} onClick={() => handleCardClick('category-network')}>
        <CardActionArea>
          <CardContent>
              <div >
                  <h3 style={name_css}>Filter by Pathway Category</h3>
                  <p>Select this to compare specific pathway categories</p>
              </div >
          </CardContent>
          </CardActionArea>
      </Card >
      <Card style={network_card_css} onClick={() => handleCardClick('full-network')}>
        <CardActionArea>
          <CardContent>
              <div >
                  <h3 style={name_css}>Full Network</h3>
                  <p>Select this to compare whole pathway network</p>
              </div >
          </CardContent>
          </CardActionArea>
      </Card >
      </Row>
      {showCategories && (
        <Row>
          <p className='white'>Select the Pathway Category type</p>
          {categories.map((category, index) => (
            <Card key={index} style={pathway_card_css} onClick={() => { setSelectedNetworkType(category); setGraphKey(prevKey => prevKey + 1); }}>
              <CardActionArea>
                <CardContent>
                  <div>
                    <h3 style={name2_css}>{category}</h3>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Row>
      )}
      {selectedNetworkType && (
    <SigmaContainer className="graph-container" style={{ height:'600px'}} settings={{ renderEdgeLabels: true}}>
      <GraphDefault key={graphKey} networkType={selectedNetworkType} order={30} probability={0.1} patientId={patientId} jobId={jobId}/>
      <ControlsContainer position={"bottom-right"}>
      <ZoomControl />
        <FullScreenControl />
      <GraphEvents />
      <button onClick={refreshGraph}><LuRefreshCw /></button>
      </ControlsContainer>
      <ControlsContainer position={"top-right"}>
        <SearchControl style={{ width: "200px" }} />
      </ControlsContainer>
    </SigmaContainer>
    )}
    </Container>
  );
};

export default DragNdrop;