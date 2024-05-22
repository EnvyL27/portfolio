// src/components/CustomCursor.js
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const addCursorEffect = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', addCursorEffect);

    return () => {
      window.removeEventListener('mousemove', addCursorEffect);
    };
  }, []);

  const cursorClasses = `fixed w-10 h-10 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 ${
    hovering ? 'bg-blue-500 scale-150' : 'bg-red-500'
  }`;

  return (
    <div
      className={cursorClasses}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default CustomCursor;
