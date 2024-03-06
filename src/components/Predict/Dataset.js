import React, { useEffect, useRef, useState } from 'react';

// Import Material Icons
import { MDBDataTableV5 } from "mdbreact";
import { useNavigate } from 'react-router-dom';


export default function Dataset() {
    const Columns = [

        { label: 'Dataset Name', field: 'dataset_name'},
        { label: 'Drug Type', field: 'dataset_type_key' },
        { label: 'Col1', field: 'num_samples' },
        { label: 'Col2', field: 'num_features' },
        { label: 'Col3', field: 'label_type_name' },
    ];

    const datasetInfo = [
        {
            dataset_name: 'Dataset 1',
            dataset_type_key: 'Type A',
            num_samples: 100,
            num_features: 10,
            label_type_name: 'Classification'
        },
        {
            dataset_name: 'Dataset 2',
            dataset_type_key: 'Type B',
            num_samples: 150,
            num_features: 12,
            label_type_name: 'Regression'
        },
        {
            dataset_name: 'Dataset 1',
            dataset_type_key: 'Type A',
            num_samples: 100,
            num_features: 10,
            label_type_name: 'Classification'
        },
        {
            dataset_name: 'Dataset 2',
            dataset_type_key: 'Type B',
            num_samples: 150,
            num_features: 12,
            label_type_name: 'Regression'
        },
        {
            dataset_name: 'Dataset 1',
            dataset_type_key: 'Type A',
            num_samples: 100,
            num_features: 10,
            label_type_name: 'Classification'
        },
        {
            dataset_name: 'Dataset 2',
            dataset_type_key: 'Type B',
            num_samples: 150,
            num_features: 12,
            label_type_name: 'Regression'
        },
        {
            dataset_name: 'Dataset 1',
            dataset_type_key: 'Type A',
            num_samples: 100,
            num_features: 10,
            label_type_name: 'Classification'
        },
        {
            dataset_name: 'Dataset 2',
            dataset_type_key: 'Type B',
            num_samples: 150,
            num_features: 12,
            label_type_name: 'Regression'
        },
        // Add more dataset entries as needed
    ];

    const [selectedRow, setSelectedRow] = useState(null);

    // Modify dataset rows to include a click event handler
    const addClickEventToRows = (rows) => {
        return rows.map((row, index) => ({
            ...row,
            clickEvent: () => handleRowClick(row, index)
        }));
    };

    // Handle row click
    const handleRowClick = (row, index) => {
        setSelectedRow(index); // Store the index or any unique identifier of the row
    };

    // Add conditional styling for the selected row
    const addConditionalStyling = (rows) => {
        return rows.map((row, index) => ({
            ...row,
            className: selectedRow === index ? 'selected-row' : ''
        }));
    };

    // Prepare rows with click events and conditional styling
    const preparedRows = addConditionalStyling(addClickEventToRows(datasetInfo));


    return (
        <div>
            <h2 style={{ fontSize: "1.8em", padding: "20px" }}>Our Datasets</h2>
            <MDBDataTableV5
                hover
                bordered
                striped
                small
                search
                style={{color:"white"}}
                entriesOptions={[5, 10, 15, 20]}
                entries={5}
                data={{ columns: Columns, rows: preparedRows }}
            />
        </div >
    )
}