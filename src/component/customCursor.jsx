// src/components/CustomCursor.js
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    const hoverElements = document.querySelectorAll('.hoverable-element');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => setHovering(true));
      el.addEventListener('mouseleave', () => setHovering(false));
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setHovering(true));
        el.removeEventListener('mouseleave', () => setHovering(false));
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovering ? 'hover' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default CustomCursor;
