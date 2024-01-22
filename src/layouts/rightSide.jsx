// RightSidebar.js

import React from 'react';

const RightSidebar = () => {
  return (
    <div className="fixed top-0 right-0 h-full w-1/12 bg-gray-100 text-black p-4">
      {/* Your right sidebar content goes here */}
      <div className="absolute bottom-0 transform rotate-90 pt-64 pr-32">
        <p className="text-center">farrel.ahmad.zaidan@gmail.com</p>
      </div>
      <div className="absolute bottom-0 w-1/2 m-6 h-px rotate-90 bg-black"></div>
    </div>
  );
};

export default RightSidebar;
