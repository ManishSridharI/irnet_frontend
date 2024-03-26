import React, { useEffect, useState } from "react";
import Graph from "graphology";
import { useSigma, useRegisterEvents, useLoadGraph, useSetSettings } from "@react-sigma/core";
import { useLayoutCircular } from "@react-sigma/layout-circular";
import { useSeedRandom } from "./SeedRandom";
import pathway_weights from './pathway_weights.json'
import pathway_relation from './mapped_pathway_relation.json'
import pathway_edges from './all_patients_pathway_relation.json'

export const GraphDefault = ({ networkType, key, order, probability, patientId }) => {
  const { randomColor } = useSeedRandom();
  const sigma = useSigma();
  const { assign: assignCircular } = useLayoutCircular();
  const registerEvents = useRegisterEvents();
  const loadGraph = useLoadGraph();
  const setSettings = useSetSettings();
  const [hoveredNode, setHoveredNode] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const patientNodeData = pathway_weights[patientId];
  const patientEdgeData = pathway_edges[patientId];
  console.log(networkType);


  useEffect(() => {
    // Create the graph
    const graph = new Graph();
    let filteredNodeData = Object.entries(patientNodeData);
    let filteredEdgeData = patientEdgeData;
    if (networkType === 'top50-network') {
      // Sort nodes by weight and take the top 50
      filteredNodeData = filteredNodeData.sort((a, b) => b[1] - a[1]).slice(0, 50);
      const top50NodeIds = filteredNodeData.reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
      filteredEdgeData = filteredEdgeData.filter(item => (
        top50NodeIds.hasOwnProperty(item.source) && top50NodeIds.hasOwnProperty(item.target)
      ));
    }
    console.log(filteredEdgeData);
    // patientEdgeData.forEach(item => {
    //   const sourceIndex = parseInt(item.source_index);
    //   const targetIndex = parseInt(item.target_index);
    //   // Assuming your graph implementation has a method to add directed edges with weights
    //   graph.addDirectedEdge(sourceIndex, targetIndex);
    // });
    filteredNodeData.forEach(([pathwayId, weight], index) => {
      graph.addNode(pathwayId, {
        label: pathwayId,
        size: Math.round(weight * 5000),
        color: randomColor(),
        x: 0,
        y: 0,
      });
    });
   // Add edges to the graph
   filteredEdgeData.forEach(item => {
      if (networkType !== 'top50-network' || (graph.hasNode(item.source) && graph.hasNode(item.target))) {
        const label = item.interaction_score;
        graph.addDirectedEdge(item.source, item.target, {label: label});
      }
    });
    // for (let i = 0; i < order; i++) {
    //   for (let j = i + 1; j < order; j++) {
    //     // Consider adding an edge from i to j
    //     if (Math.random() < probability) {
    //       const labelIJ = `Edge from ${i} to ${j}`; // Customize your label format here
    //       graph.addDirectedEdge(i, j, { label: labelIJ });
    //     }
    //     // Consider adding an edge from j to i
    //     if (Math.random() < probability) {
    //       const labelJI = `Edge from ${j} to ${i}`; // Customize your label format here
    //       graph.addDirectedEdge(j, i, { label: labelJI });
    //     }
    //   }
    // }
    
    loadGraph(graph);
    assignCircular();
    // Register the events
    registerEvents({
      // enterNode: (event) => setHoveredNode(event.node),
      // leaveNode: () => setHoveredNode(null),
      clickNode: ({ node }) => {
        setHoveredNode(node); // Update selected node on click
      },
      clickStage: () => {
        setHoveredNode(null); // Reset selected node when clicking outside nodes
      },
    });
  }, [assignCircular, loadGraph, registerEvents, key, randomColor, order, probability, patientId]);

  useEffect(() => {
    setSettings({
      nodeReducer: (node, data) => {
        const graph = sigma.getGraph();
        const newData = { ...data, highlighted: data.highlighted || false };
        if (hoveredNode) {
          if (node === hoveredNode || graph.neighbors(hoveredNode).includes(node)) {
            newData.highlighted = true;
          } else {
            newData.color = "#E2E2E2";
            newData.highlighted = false;
          }
        }
        return newData;
      },
      edgeReducer: (edge, data) => {
        const graph = sigma.getGraph();
        const newData = { ...data, hidden: false };
        if (hoveredNode && !graph.extremities(edge).includes(hoveredNode)) {
          newData.hidden = true;
        }
        return newData;
      },
    });
  }, [hoveredNode, setSettings, sigma]);

  return null;
};

