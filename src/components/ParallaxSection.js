// src/components/ParallaxSection.js
import React, { useCallback } from 'react';
import { useSpring, animated } from 'react-spring';

function ParallaxSection({ children, image, style }) {
  const [{ yPos }, set] = useSpring(() => ({ yPos: 0 }));

  // Memoize the onScroll function
  const onScroll = useCallback(() => {
    const yPos = -(window.scrollY / 2);
    set({ yPos });
  }, [set]); // Dependency array includes 'set' from useSpring

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]); // Dependency array includes memoized onScroll

  return (
    <animated.div
      style={{
        ...style,
        transform: yPos.interpolate(y => `translateY(${y}px)`),
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </animated.div>
  );
}



export default ParallaxSection;