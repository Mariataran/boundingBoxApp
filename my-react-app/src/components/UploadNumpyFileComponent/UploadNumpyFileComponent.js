import React, {useState} from 'react';
import axios from 'axios';

const UploadNumpyFileComponent = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select file!');
            return;
        }

        const formData = new FormData();
        formData.append('numpy_file', selectedFile);
        

        try {
            const response = await axios.post('http://localhost:5000/upload-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const imageData = response.data.image_data;
            setUploadedImage(imageData);
            alert('File uploaded successfully.');
        } catch (error) {
            console.error('Error uploading file:', error);
            const errorMessage = error.messaage;
            alert('Error uploading file' + errorMessage);
        }
    };

    return (
        <div>
            <h2>Upload Numpy File</h2>
            <input type="file" accept=".npy" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <h2>Display Image</h2>
            {/* Display uploaded image */}
            {uploadedImage && <img src={`data:image/png;base64, ${uploadedImage}`} alt="Uploaded" />}
        </div>
    );
}

export default UploadNumpyFileComponent;