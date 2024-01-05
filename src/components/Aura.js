import React from 'react';
import '../styles/Aura.css'; // Import the CSS file

const Concentric = ({ size, delay }) => {
  return (
    <div
      className="glow"
      style={{
        width: size,
        height: size,
        animationDelay: delay,
      }}
    />
  );
};

const Aura = ({ emotion, sentiment }) => {
  // Define a mapping between emotions and colors
  const emotionColors = {
    happiness: 'rgba(255, 223, 186, 0.5)', // Example color for happiness
    sadness: 'rgba(100, 100, 255, 0.5)',   // Example color for sadness
    anger: 'rgba(255, 0, 0, 0.5)',         // Example color for anger
    disgust: 'rgba(75, 0, 130, 0.5)',      // Example color for disgust
    fear: 'rgba(0, 128, 0, 0.5)',           // Example color for fear
    // Add more emotions and corresponding colors as needed
  };

  // Define a color scale for sentiment
const sentimentColors = {
  positive: 'rgba(255, 165, 0, 0.5)', // Warm orange color for positive sentiment
  neutral: 'rgba(255, 255, 255, 0.1)',  // Default color for neutral sentiment (e.g., white)
  negative: 'rgba(100, 100, 255, 0.5)', // Cool color for negative sentiment (e.g., blue)
};


  // Default color if the emotion or sentiment is not found in the mapping
  const defaultColor = 'rgba(255, 255, 255, 0.1)';

  // Get the color based on emotion or sentiment, or use the default color
  const orbColor = emotionColors[emotion] || sentimentColors[sentiment] || defaultColor;

  // Determine the glow color based on sentiment
  const glowColor = sentimentColors[sentiment] || defaultColor;

  return (
    <div className="aura-container">
      <div
        className="orb"
        style={{
          background: orbColor,
        }}
      >
        <div
          className="glow"
          style={{
            background: glowColor,
          }}
        />
        <Concentric size="80%" delay="0s" />
        <Concentric size="60%" delay="-5s" />
        <Concentric size="40%" delay="-2.5s" />
      </div>
    </div>
  );
};

export default Aura;

















