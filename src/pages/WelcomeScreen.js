import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/WelcomeScreen.css';

const WelcomePage = () => {
  return (
    <div className="welcome">
      <div className="particles-container">
        {[...Array(200)].map((_, i) => (
          <div key={i} className="dust-particle"></div>
        ))}
      </div>
      <div className="eclipse"></div>
      <div className="auraTitleContainer">
        <h1 className="auraTitle">AURA</h1>
      </div>
      <p className="tagline">
        Translating emotions into colors<br />
        for clear communication.
      </p>

      <Link to="/">
        <button className="startButton">Continue</button>
      </Link>
    </div>
  );
};

export default WelcomePage;





































