// import React, {useState, useEffect} from 'react';
// import axios from 'axios';

// const DisplayImageComponent = () => {
//     const [imageData, setImageData] = useState(null);

//     useEffect(() => {
//         const fetchImageData = async () => {
//             try {
//                 const response = await axios.get('/api/images');
//                 setImageData(response.data);
//             } catch (error) {
//                 console.error('Error fetching image data:', error);
//             }
//         };
//         fetchImageData();
//     }, []);

//     return (
//         <div>
//             <h2>Display Image</h2>
//         </div>
//     );
// };

// export default DisplayImageComponent;