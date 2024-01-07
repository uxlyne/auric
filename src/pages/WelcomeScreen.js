import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/WelcomeScreen.css'; // Ensure this CSS file path is correct

// Emotion circles component
const EmotionCircles = () => (
  <div className="emotion-circles">
    <div className="emotion-circle" style={{ backgroundColor: '#FFD700' }}></div> {/* Example color for happiness */}
    <div className="emotion-circle" style={{ backgroundColor: '#1E90FF' }}></div> {/* Example color for sadness */}
    <div className="emotion-circle" style={{ backgroundColor: '#FF6347' }}></div> {/* Example color for anger */}
  </div>
);

const WelcomePage = () => {
  // Function to generate sparkles
  const generateSparkles = () => {
    const colors = ['#A7BBEC', '#F7A8B8', '#A4DEB9', '#F3D1AE']; // Your color palette
    let sparkles = [];
    for (let i = 0; i < 50; i++) {
      const size = Math.random() * 5; // Sparkles will vary in size up to 5px
      const color = colors[Math.floor(Math.random() * colors.length)]; // Random color from palette
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: '50%', // To make them round
        position: 'absolute',
        boxShadow: `0 0 ${size / 2}px ${color}`, // Soft glow effect
        animation: `twinkle 1.5s infinite ${Math.random() * 2}s linear`, // Twinkle effect
      };
      sparkles.push(<div key={i} className="sparkle" style={style} />);
    }
    return sparkles;
  };

  return (
    <div className="welcome">
      {/* Header */}
      <div>
        <div className="promo-words promo-top-left">Aura Emotional Awareness</div>
        <div className="promo-words promo-top-right">Mental Health Tools</div>
        <div className="promo-words promo-bottom-right">Created By Amy Lyne</div>
      </div>

      {/* Sparkles */}
      <div className="sparkles">{generateSparkles()}</div>

      {/* Main Content */}
      <div className="main-content">
        {/* Particles Container */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="dust-particle"
              style={{
                '--random-delay': Math.random(), // Assign a random delay
              }}
            ></div>
          ))}
        </div>

        <div className="auraGlow"></div> {/* New element for testing */}
        
        {/* Eclipse */}
        <div className="eclipse"></div>

        {/* Aura Title */}
        <div className="auraTitleContainer">
          <h1 className="auraTitle">AURA</h1>
        </div>

        {/* Slogan and Emotion Circles */}
        <div className="slogan-container">
          <p className="slogan-top">YOUR EMOTIONAL PALETTE</p>
          <EmotionCircles /> {/* Emotion Circles component */}
          <p className="slogan-bottom">Discover the color of your voice.</p>
        </div>

        {/* Continue Button */}
        <Link to="/">
          <button className="startButton">Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;










































