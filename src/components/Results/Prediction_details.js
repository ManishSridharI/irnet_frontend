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

// const LayoutFA2Control = () => {
//   const location = useLocation();
//   const patientId = location.state?.patientId;
//   return (
//     <Container fluid className="project-section" style={{ padding:'40px' }}>
//       <Particle/>
//     <SigmaContainer className="graph-container" style={{ height:'600px'}}>
//       <GraphDefault order={34} probability={0.1} patientId={patientId} />
//       <ControlsContainer position={"bottom-right"}>
//         <LayoutForceAtlas2Control settings={{ settings: { slowDown: 10, edgeLabelSize: 'proportional' } }} />
//       </ControlsContainer>
//     </SigmaContainer>
//     </Container>
//   );
// };

// export default LayoutFA2Control;


const DragNdrop = () => {
  const location = useLocation();
  const patientId = location.state?.patientId;
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
  const handleCardClick = (networkType) => {
    setSelectedNetworkType(networkType);
  };
  // Function to refresh the graph
  const refreshGraph = () => {
    setGraphKey(prevKey => prevKey + 1); // Incrementing the key will cause the component to rerender
  };
  const faculty_card_css = { height:'10%', width: '30%', margin: '1%', boxShadow: '0 0 2rem rgb(3 3 3 / 20%), 0 0 0.3rem rgb(3 3 3 / 9%)' };
  const name_css = { fontSize: "1.6em", margin: '5px' };
  return (
    <Container fluid className="network-section">
      <Particle/>
      <h3 style={{ fontSize: "1.6em" }}>
          <strong className="purple">Pathway Network </strong>
        </h3>
      <p className='white'>Select the type of comparison you want to perform on the newtork. </p>
      <Row>
      <Card style={faculty_card_css} onClick={() => handleCardClick('full-network')}>
        <CardActionArea>
          <CardContent>
              <div >
                  <h3 style={name_css}>Full Network</h3>
                  <p>Select this to compare whole pathway network</p>
              </div >
          </CardContent>
          </CardActionArea>
      </Card >
      <Card style={faculty_card_css} onClick={() => handleCardClick('category-network')}>
        <CardActionArea>
          <CardContent>
              <div >
                  <h3 style={name_css}>Filter by Pathway Category</h3>
                  <p>Select this to compare specific pathway categories</p>
              </div >
          </CardContent>
          </CardActionArea>
      </Card >
      <Card style={faculty_card_css} onClick={() => handleCardClick('top50-network')}>
        <CardActionArea>
          <CardContent>
             <div >
                  <h3 style={name_css}>Filter by weights</h3>
                  <p>Select this to compare the Top 50 pathways</p>
              </div >
          </CardContent>
          </CardActionArea>
      </Card >
      </Row>
      {selectedNetworkType && (
    <SigmaContainer className="graph-container" style={{ height:'600px'}} settings={{ renderEdgeLabels: true}}>
      <GraphDefault key={graphKey} networkType={selectedNetworkType} order={30} probability={0.1} patientId={patientId}/>
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