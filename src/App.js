// App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [flareColor, setFlareColor] = useState('rgba(0, 0, 255, 0.5)'); // Default color is blue

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate the position relative to the center of the circle
    const relX = x - rect.width / 2;
    const relY = y - rect.height / 2;

    // Calculate the angle (in radians) of the mouse position relative to the center of the circle
    const angle = Math.atan2(relY, relX);

    // Calculate the hue based on the angle (convert radians to degrees and then normalize to 0-360 range)
    const hue = ((angle * 180) / Math.PI + 360) % 360;

    // Update the flare color based on the calculated hue
    setFlareColor(`hsla(${hue}, 100%, 50%, 0.5)`);
  };

  return (
    <div className="app">
      <header>
        <h1>Auric Emotional Awareness</h1>
      </header>
      <main>
        <svg
          className="circle-svg"
          width="200"
          height="200"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setFlareColor('rgba(0, 0, 255, 0.5)')} // Reset to default color when mouse leaves the circle
        >
          <circle cx="100" cy="100" r="80" fill={flareColor} />
        </svg>
      </main>
      <footer>
        <p>© 2023 Auric Emotional Awareness</p>
      </footer>
    </div>
  );
};

export default App;

