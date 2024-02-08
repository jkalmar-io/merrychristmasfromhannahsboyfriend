// src/components/LoadingAnimation.js
import React from 'react';
import './LoadingAnimation.css'; // Import the CSS file for styles
import santaJoeImage from './santajoe.png';

// Helper function to generate random pastel colors
const getRandomPastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const pastel = `hsl(${hue}, 100%, 85%)`;
  return pastel;
};

function LoadingAnimation() {
  // Generate a random number of snowflakes between 20 and 30
  const snowflakeCount = Math.floor(Math.random() * 11) + 20; // 20 to 30
  const snowflakes = Array.from({ length: snowflakeCount }, (_, index) => {
    const style = {
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 5 + 5}s`, // Between 5s and 10s
      animationDelay: `${Math.random() * -5}s`, // Negative delay for a varied start
      color: getRandomPastelColor(),
      zIndex: Math.random() < 0.5 ? 1 : 5, // Randomly assign behind (1) or in front (3)
    };
    return <div key={index} className="snowflake" style={style}>❄️</div>;
  });

  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <img src={santaJoeImage} alt="Loading" />
      </div>
      {snowflakes}
    </div>
  );
}


export default LoadingAnimation;