import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('avatar', selectedFile); // 'avatar' is the name used for the file in form data

      try {
        // Send the file to your backend using Axios or fetch
        const response = await axios.post('your-backend-upload-endpoint', formData);
        console.log(response.data); // Handle the response from the backend
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
      <input type="file" name="avatar" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default FileUpload;