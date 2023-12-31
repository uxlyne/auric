import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/WelcomeScreen.css'; // Ensure this CSS file path is correct

const WelcomePage = () => {
  return (
    <div className="welcome">
      <div className="particles-container">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="dust-particle"
            style={{
              '--random-delay': Math.random(), // Assign a random delay
            }}
          ></div>
        ))}
      </div>
      <div className="eclipse"></div>
      <div className="auraTitleContainer">
        <h1 className="auraTitle">AURA</h1>
      </div>
      <p className="tagline">
        Your <span className="emotional-gradient">Emotional</span> Palette.<br />
        Discover the colors of your voice.
      </p>
      <Link to="/">
        <button className="startButton">Continue</button>
      </Link>
    </div>
  );
};

export default WelcomePage;








































