// src/App.js
import React, { useState, useEffect } from 'react';
import HelpSection from './components/HelpSection';
import ChristmasSection from './components/ChristmasSection';
import GiftSection from './components/GiftSection';
import ParallaxSection from './components/ParallaxSection';
import LoadingAnimation from './components/LoadingAnimation'; // Import the loading animation component
import './styles.css';
import SnowflakeOverlay from './components/SnowflakeOverlay';



function App() {
  const [isLoading, setIsLoading] = useState(true); // State to handle loading

  useEffect(() => {
    // Set a timeout to simulate the loading process
    const timer = setTimeout(() => setIsLoading(false), 3000); // 3 seconds for demo
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (isLoading) {
    return <LoadingAnimation />; // Show loading animation while loading
  }

  // Content to be displayed after loading is complete
  return (
    <div className="app">

    {/* Border Images */}
    <div>
    <SnowflakeOverlay />
      </div>

      <ParallaxSection image="path_to_christmas_image.jpg" style={{  }}>
        <ChristmasSection />
      </ParallaxSection>
      <ParallaxSection image="path_to_help_image.jpg" style={{  }}>
        <HelpSection />
      </ParallaxSection>
      <ParallaxSection image="path_to_gift_image.jpg" style={{  }}>
        <GiftSection />
      </ParallaxSection>
    </div>
  );
}

export default App;