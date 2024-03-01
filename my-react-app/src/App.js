// import logo from './logo.svg';
import './App.css';
import React from 'react';
import UploadNumpyFileComponent from './components/UploadNumpyFileComponent/UploadNumpyFileComponent';
// import DisplayImageComponent from './components/DisplayImageComponent/DisplayImageComponent';
import BoundingBoxComponent from './components/BoundingBoxComponent/BoundingBoxComponent';

function App() {
  return (
    <div className="App">
      <UploadNumpyFileComponent />
      <BoundingBoxComponent />
    </div>
  );
}

export default App;
