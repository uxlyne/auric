import React from 'react';
import Aura from '../components/Aura'; // Make sure the path is correct
import Header from '../components/Header'; // Import the Header component
import Footer from '../components/Footer'; // Import the Footer component
import '../styles/Main.css';

const Main = () => {
  return (
    <div className="home-page">
      <div className="aura-section">
        <Aura />
      </div>
      <div className="text-section">
        <h1>Your Emotional Palette</h1>
        <p>Discover the colors of your voice and improve your emotional awareness.</p>
        {/* More text or buttons can go here */}
      </div>
    </div>
  );
}

export default Main;







