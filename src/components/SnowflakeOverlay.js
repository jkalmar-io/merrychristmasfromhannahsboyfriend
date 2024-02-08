import React from 'react';
import './SnowflakeOverlay.css'; // Create and import CSS for snowflakes

// Helper function for random pastel colors
const getRandomPastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 80%, 85%)`;
};

const SnowflakeOverlay = () => {
  const snowflakeCount = Math.floor(Math.random() * 11) + 20; // 20 to 30 snowflakes
  const snowflakes = Array.from({ length: snowflakeCount }, (_, index) => {
    const style = {
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 5 + 5}s`, // 5 to 10 seconds
      animationDelay: `${Math.random() * -5}s`, // Starts at random times
      color: getRandomPastelColor(),
      zIndex: 9999, // Ensure it's above everything
      position: 'fixed', // This makes snowflakes fixed over the content
      top: `${Math.random() * 100}vh`,
      fontSize: `${Math.random() * 2.5}em`,
    };
    return <div key={index} className="snowflake" style={style}>*</div>;
  });

  return <>{snowflakes}</>;
};

export default SnowflakeOverlay;
