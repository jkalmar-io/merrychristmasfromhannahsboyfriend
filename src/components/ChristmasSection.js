// WelcomeSection.js
import React, { useState, useEffect } from 'react'; 
import './Christmas.css'; // Import the CSS file for styles
import {Canvas} from '@react-three/fiber'
import Globe from '../models/globe';
import RotatingImage from '../models/rotatingimage';
import borderdown from '../assets/2d/borderdown.png';
import borderup from '../assets/2d/borderup.png';
import borderlefttop from '../assets/2d/borderlefttop.png';
import borderrighttop from '../assets/2d/borderrighttop.png';
import borderleftbottom from '../assets/2d/borderleftbottom.png';
import borderrightbottom from '../assets/2d/borderrightbottom.png';

function ChristmasSection() {
  const [showTitleAnimation, setShowTitleAnimation] = useState(false);

  useEffect(() => {
    // Assuming the loading state is managed outside and passed as a prop or context
    // Here we simulate the loading has finished and trigger the title animation
    const timer = setTimeout(() => {
      setShowTitleAnimation(true);
    }, 2000); // Adjust the timing based on when your actual content finishes loading

    return () => clearTimeout(timer);
  }, []);

const adjustGlobeForScreenSize = () => {
  let screenScale = null;
  let screenPosition = [0, -60.5, -43];
  let rotation = [0.1, 3.5, 0];

  if(window.innerWidth < 768) {
    screenScale = [400, 400, 400];
  } else {
    screenScale = [600, 600, 600];
  }

    return [screenScale, screenPosition, rotation]
  }
  
  const [globeScale, globePosition, globeRotation] = adjustGlobeForScreenSize();

  return (

 

    <div className="christmas-section">

<div>
    <img src={borderdown} className="border-imagens top" alt="" />
    <img src={borderup} className="border-imagens bottom" alt="" />
    <img src={borderlefttop} className="border-imageew top-leftb" alt="" />      
    <img src={borderrightbottom} className="border-imageew bottom-rightb" alt="" />
    <img src={borderleftbottom} className="border-imageew bottom-leftb" alt="" />      
    <img src={borderrighttop} className="border-imageew top-rightb" alt="" />
    </div>

    <h1 className={`animated-title ${showTitleAnimation ? 'start-animation' : ''}`}>
    <span>Merry Christmas</span>
      <span><i>and a</i></span>
      <span>Happy New Year!</span>
      </h1>     

      <Canvas className="w-full h-screen bg-transparent center canvas" camera={{ fov: 60, position: [0, 0, 400] }}>
      <ambientLight intensity={5} />
  <directionalLight position={[100, 20, 50]} intensity={10} />
      <Globe 
          position={globePosition}
          scale={globeScale}
          rotation={globeRotation}
      />
    <RotatingImage 
    position={[0,60,0]} 
    scale={250}
    />
      </Canvas>



    </div>
 
  );
}

export default ChristmasSection;



