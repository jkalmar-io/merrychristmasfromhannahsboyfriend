// WelcomeSection.js
import React from 'react';
import borderdown from '../assets/2d/borderdownginger.png';
import borderup from '../assets/2d/borderupginger.png';
import borderlefttop from '../assets/2d/bordergingerlefttop.png';
import borderleftbottom from '../assets/2d/bordergingerleftbottom.png';
import borderrightbottom from '../assets/2d/bordergingerrightbottom.png';
import borderrighttop from '../assets/2d/bordergingerrighttop.png';



function HelpSection() {
  return (
    <div className="help-section">

<div>
    <img src={borderdown} className="border-imagens top" alt="" />
    <img src={borderup} className="border-imagens bottom" alt="" />
    <img src={borderlefttop} className="border-imageew top-leftb" alt="" />      
    <img src={borderrightbottom} className="border-imageew bottom-rightb" alt="" />
    <img src={borderleftbottom} className="border-imageew bottom-leftb" alt="" />      
    <img src={borderrighttop} className="border-imageew top-rightb" alt="" />
    </div>

      <h2 className="animated-title">Thank you for all of your help!</h2>
      <p className="animated-title">I can't thank either of you enough for your endless hours of support both physically and intelectually and the difference it's made for our house!</p>
      {/* Add more content and styling as needed */}
    </div>
  );
}

export default HelpSection;