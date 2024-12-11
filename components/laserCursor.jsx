import React, { useEffect, useState } from 'react';
import './LaserCursor.css';

const LaserCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="laser-cursor"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      ></div>
    </>
  );
};

export default LaserCursor;