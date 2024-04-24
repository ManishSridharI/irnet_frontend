import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from "mdbreact";

export default function Dataset({ jobId }) {
    const Columns = [
        { label: 'Dataset Name', field: 'dataset_name' },
        { label: 'Cancer Type', field: 'cancer_type' },
        { label: 'Number of Patients', field: 'number_of_patients' },
    ];

  //  const [datasetInfo, setDatasetInfo] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);

    const [datasetInfo, setDatasetInfo] = useState([
        { dataset_name: 'Gide2019_PD1_Melanoma_RNASeq', cancer_type: 'Melanoma', number_of_patients: 298 },
        { dataset_name: 'Kim2018_PD1_Gastric_RNASeq', cancer_type: 'Gastric', number_of_patients: 45 },
        { dataset_name: 'IMvigor210', cancer_type: 'Bladder', number_of_patients: 298 },
        { dataset_name: 'Auslander', cancer_type: 'Melanoma', number_of_patients: 37 },
        { dataset_name: 'Gide', cancer_type: 'Melanoma', number_of_patients: 91 },
        { dataset_name: 'Gide2019_PD1+CTLA4_Melanoma_RNASeq', cancer_type: 'Melanoma', number_of_patients: 91 },
        { dataset_name: 'Liu2019_Melanoma_RNAseq', cancer_type: 'Melanoma', number_of_patients: 140 },
        { dataset_name: 'Riaz2017_PD1_Melanoma_RNASeq_Ipi.Naive', cancer_type: 'Melanoma', number_of_patients: 49 },
    ]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('http://digbio-g2pdeep.rnet.missouri.edu:9900/datasets');
    //             const data = await response.json();
    //             setDatasetInfo(data);
    //         } catch (error) {
    //             console.error("Failed to fetch data:", error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    const sendDatasetInfo = async (dataset) => {
        try {
            const response = await fetch('http://digbio-g2pdeep.rnet.missouri.edu:9900/dataset_info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({jobId, dataset}),
            });
            const responseData = await response.json();
            // console.log('Prediction Info Response:', responseData);
            // Handle the response data from the predictioninfo API
        } catch (error) {
            console.error("Failed to send dataset info:", error);
        }
    };

    const handleRowClick = (row, index) => {
        setSelectedRow(index); // Mark the row as selected
        sendDatasetInfo(row); // Send the selected row's dataset info to the predictioninfo API
    };

    const addClickEventToRows = (rows) => {
        return rows.map((row, index) => ({
            ...row,
            clickEvent: () => handleRowClick(row, index),
            className: selectedRow === index ? `selected-row` : '' 
        }));
    };

    let selectionMessage = null;
    if (selectedRow !== null) {
        const selectedDataset = datasetInfo[selectedRow];
        selectionMessage = (
            <div>
                You have selected: <span className='pink'>{selectedDataset.dataset_name}</span>
            </div>
        );
    }

    // const addConditionalStyling = (rows) => {
    //     return rows.map((row, index) => ({
    //         ...row,
    //         className: selectedRow === index ? 'selected' : '',
    //     }));
    // };


    // const getTableClassName = () => {
    //     // console.log(selectedRow);     
    //     return `mdb-datatable table tr ${selectedRow !== null ? "selected-row" : ""}`;
    // };
    

    const preparedRows = (addClickEventToRows(datasetInfo));

    return (
        <div>
            <h2 style={{ fontSize: "1.8em", padding: "20px" }}>Our Datasets</h2>
            <MDBDataTableV5
                hover
                bordered
                striped
                small
                search
                selectedRow={true}
                //className={getTableClassName()}
                style={{color:"white"}}
                entriesOptions={[5, 10, 15, 20]}
                entries={5}
                data={{ columns: Columns, rows: preparedRows }}
            />
             {selectionMessage}
        </div>
    );
}