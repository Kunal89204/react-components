import React, { useState } from 'react';

const ScrollableContent = () => {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxHover = (boxIndex) => {
    setActiveBox(boxIndex);
  };

  return (
    <div className="flex">
      {/* Boxes on the right */}
      <div className="w-1/2 h-screen overflow-hidden">
        <div className="grid grid-cols-2 gap-4 p-4">
          {[...Array(6).keys()].map((index) => (
            <div
              key={index}
              className="bg-gray-200 p-4 hover:bg-gray-300 cursor-pointer"
              onMouseEnter={() => handleBoxHover(index)}
              onMouseLeave={() => setActiveBox(null)}
            >
              Box {index + 1}
            </div>
          ))}
        </div>
      </div>
      
      {/* Content on the left */}
      <div className="w-1/2 h-screen overflow-hidden">
        <div className="p-4" style={{ height: '100%', overflowY: 'scroll' }}>
          {[...Array(6).keys()].map((index) => (
            <div key={index} className="h-full" style={{ display: activeBox === index ? 'block' : 'none' }}>
              <p>Content for Box {index + 1}</p>
              <p>More content...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollableContent;
