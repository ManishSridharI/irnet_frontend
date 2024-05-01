import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ jobId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [datasetName, setDatasetName] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setDatasetName(event.target.value);
  };

  const downloadlink = (event) => {
    event.preventDefault();
    // using Java Script method to get PDF file
    fetch('example_expression.txt').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'example_expression.txt';
            alink.click();
        })
    })
}

  // const handleFileUpload = async () => {
  //   if (selectedFile) {
  //     const formData = new FormData();
  //     formData.append('gene_counts.txt', selectedFile); // 'avatar' is the name used for the file in form data
  //     try {
  //       // Send the file to your backend using Axios or fetch
  //       const response = await axios.post('/api/file_upload', formData);
  //       // console.log(response.data); // Handle the response from the backend
  //     } catch (error) {
  //       console.error('Error uploading file:', error);
  //     }
  //   } else {
  //     console.warn('No file selected.');
  //   }
  // };
  
  const handleFileUpload = async (event) => {
    event.preventDefault();
    if (selectedFile && datasetName) {
      const formData = new FormData();
      formData.append('gene_counts', selectedFile);
      formData.append('dataset_name', datasetName);
      formData.append('jobId', jobId);
      try {
        const response = await axios.post('/api/file_upload', formData);
        console.log(response.data); // Optionally, handle the response data from the backend
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.warn('No file selected.');
    }
  };

  return (
    <div>
      <h3 style={{ fontSize: "1.8em", padding: "20px" }}>
          Have your own <strong className="purple">Dataset?</strong>
        </h3>
       <p className="dataset">Click here for <a href="#" onClick={downloadlink} className="purple">example</a> Dataset - only txt files supported</p> 
       <form onSubmit={handleFileUpload}>
        <label>
          <input type="text" placeholder='Name of the dataset' value={datasetName} onChange={handleNameChange}/>
        </label>
        <input type="file" name="gene_counts" accept=".txt" onChange={handleFileChange} />
        <button type="submit">Upload File</button>
      </form>
       {/* <input type="text" name="gene_counts" onChange={handleFileChange} />
      <input type="file" name="gene_counts" accept=".txt" onChange={handleFileChange} /> */}
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default FileUpload;