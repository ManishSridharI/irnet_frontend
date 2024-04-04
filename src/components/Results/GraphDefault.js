import React, { useEffect, useState } from "react";
import Graph from "graphology";
import { useSigma, useRegisterEvents, useLoadGraph, useSetSettings } from "@react-sigma/core";
import { useLayoutCircular } from "@react-sigma/layout-circular";
import { useSeedRandom } from "./SeedRandom";
import pathway_weights from './pathway_weights.json'
import pathway_relation from './mapped_pathway_relation.json'
import pathway_edges from './all_patients_pathway_relation.json'
import pathwayCategories from './pathway_categories.json'

export const GraphDefault = ({ networkType, key, order, probability, patientId }) => {
  const sigma = useSigma();
  const { randomColor } = useSeedRandom();
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
    if (networkType === 'full-network') {
      // Sort nodes by weight and take the top 50
      filteredNodeData = filteredNodeData;
      filteredEdgeData = filteredEdgeData;
    }
    else if (networkType === 'top50-network') {
      // Sort nodes by weight and take the top 50
      filteredNodeData = filteredNodeData.sort((a, b) => b[1] - a[1]).slice(0, 50);
      const top50NodeIds = filteredNodeData.reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
      // console.log(top50NodeIds);
      filteredEdgeData = filteredEdgeData.filter(item => (
        top50NodeIds.hasOwnProperty(item.source) && top50NodeIds.hasOwnProperty(item.target)
      ));
     // console.log(filteredEdgeData);
    }
    else if (networkType !== 'full-network' || networkType !== 'top50-network'  ) {
      filteredNodeData = filteredNodeData.filter(([pathwayId, data]) => {
        // Check if this pathway's category matches the selected category
        const pathwayCategory = pathwayCategories[pathwayId]?.category;
        return pathwayCategory === networkType;
      });
      let CategoryNodeData = filteredNodeData.reduce((acc, [pathwayId, score]) => {
        acc[pathwayId] = score;
        return acc;
      }, {});
      // console.log(CategoryNodeData);
      filteredEdgeData = filteredEdgeData.filter(item => (
        CategoryNodeData.hasOwnProperty(item.source) && CategoryNodeData.hasOwnProperty(item.target)
      ));
      //console.log(filteredEdgeData);
    }
    //console.log(filteredEdgeData);
    // patientEdgeData.forEach(item => {
    //   const sourceIndex = parseInt(item.source_index);
    //   const targetIndex = parseInt(item.target_index);
    //   // Assuming your graph implementation has a method to add directed edges with weights
    //   graph.addDirectedEdge(sourceIndex, targetIndex);
    // });

    const colors = ['#ff5252', '#427d9d', '#69923e', '#f8ed62', '#d8bcee', '#af8050'];

    // Assuming you have a method to extract unique categories from your pathway categories JSON
    const uniqueCategories = [...new Set(Object.values(pathwayCategories).map(item => item.category))];
    const categoryColorMapping = {};

    // Map each category to a specific color
    uniqueCategories.forEach((category, index) => {
      categoryColorMapping[category] = colors[index % colors.length];
    });
    filteredNodeData.forEach(([pathwayId, weight], index) => {
      const category = pathwayCategories[pathwayId].category;
      const color = categoryColorMapping[category];
      graph.addNode(pathwayId, {
        label: pathwayId,
        size: Math.round(weight * 5000),
        color: color,
        x: 0,
        y: 0,
      });
    });
   // Add edges to the graph
   filteredEdgeData.forEach(item => {
   // (networkType !== 'top50-network' || networkType !== 'Human Diseases' || (graph.hasNode(item.source) && graph.hasNode(item.target))) 
      if (graph.hasNode(item.source) && graph.hasNode(item.target)) {
        const label = item.interaction_score;
        graph.addDirectedEdge(item.source, item.target, {label: label});
      }
    });
    
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
            // Update the label to display the pathway name for highlighted nodes
            const pathwayName = pathwayCategories[node]?.pathway_name || node; // Fallback to node ID if name not found
            newData.label = pathwayName; // Set the node label to the pathway name
          } else {
            newData.color = "#E2E2E2";
            newData.highlighted = false;
            newData.label = node; // Revert back to the node ID or a default label if not highlighted
          }
        } else {
          // Optionally, revert the label back to the default when no node is highlighted
          newData.label = node; // Or any other default label you prefer
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

