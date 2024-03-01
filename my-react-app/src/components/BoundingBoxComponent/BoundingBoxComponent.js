import React from 'react';

const BoundingBoxComponent = () => {
    const handleMouseDown = (event) => {
        // Handle mouse down event
    };

    const handleMouseMove = (event) => {
        // Handle mouse move event
    };

    const handleMouseUp = (event) => {
        //Handle mouse up event
    };

    return (
        <div>
            <h2>Bounding Box</h2>
            <canvas
                id="boundingBoxCanvas"
                width={800}
                height={600}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            ></canvas>
        </div>
    );
};

export default BoundingBoxComponent;