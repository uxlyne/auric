import React from 'react';
import Aura from '../components/Aura';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VoiceRecorder from '../components/VoiceRecorder'; // Import the VoiceRecorder component
import TextInput from '../components/TextInput'; // Import the TextInput component
import TextAnalysis from '../components/TextAnalysis'; // Import the TextAnalysis component
import '../styles/Main.css';

const Main = () => {
  return (
    <div>
      <Header />
      <div className="home-page">
        <div className="aura-section">
          <Aura />
        </div>
        <div className="text-section">
          <h1>Your Emotional Palette</h1>
          <p>Discover the colors of your voice and improve your emotional awareness.</p>
        </div>
      </div>
      <div className="app-content">
        <VoiceRecorder />
        <TextInput />
        <TextAnalysis />
      </div>
      <Footer />
    </div>
  );
}

export default Main;









