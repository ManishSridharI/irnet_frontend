import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import prediction from './prediction_results.json'
import { useNavigate } from 'react-router-dom';


const PatientBarGraph = () => {
  const chartContainer = useRef(null);
  const patientData = prediction;
  const navigate = useNavigate();
  

  useEffect(() => {
    if (patientData.length === 0) return;

    const labels = patientData.map(patient => patient['Patient ID']);
    const scores = patientData.map(patient => patient['Predicted score']);
    const backgroundColors = scores.map(score => score < 0.5 ? 'rgba(255, 99, 132, 0.75)' : 'rgba(54, 162, 235, 0.75)');
    const legends = scores.map(score => score < 0.5 ? 'Non-Responder' : 'Responder');
    
    const ctx = chartContainer.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Prediction Score',
          data: scores,
          backgroundColor: backgroundColors,
          borderColor: backgroundColors,
          borderWidth: 1
        }]
      },
      options: {
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const index = elements[0].index;
            const patientId = patientData[index]['Patient ID']; // Assuming 'patientData' has 'Patient ID'
            navigate('/predict_network', { state: { patientId } }); // Navigate and pass patientId via state
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Prediction Score',
              font: {
                size: 16,
                weight: 'bold'
              },
              color: 'white'
            },
            ticks: {
              font: {
                size: 12
              },
              color: 'white'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Patient ID',
              font: {
                size: 16,
                weight: 'bold'
              },
              color: 'white'
            },
            ticks: {
              font: {
                size: 12
              },
              color: 'white'
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              
              generateLabels: function(chart) {
                return [{
                  text: 'Non-Responder',
                  fillStyle: 'rgba(255, 99, 132, 0.75)'
                }, {
                  text: 'Responder',
                  fillStyle: 'rgba(54, 162, 235, 0.75)'
                }];
              }
            }
          }
        }
      }
    });
  }, [patientData, navigate]);

  return <canvas ref={chartContainer} />;
}

export default PatientBarGraph;
