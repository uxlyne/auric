import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [flareColor, setFlareColor] = useState('rgba(0, 0, 255, 0.5)'); // Default color is blue
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    const recognition = getSpeechRecognition();
    if (!recognition) {
      console.error('Speech recognition not supported');
      return;
    }

    if (isRecording) {
      recognition.lang = 'en-US';
      recognition.continuous = true;

      recognition.onresult = (event) => {
        const last = event.results.length - 1;
        const text = event.results[last][0].transcript;
        setTranscript(text);
      };

      recognition.start();

      return () => recognition.abort();
    }
  }, [isRecording]);

  const getSpeechRecognition = () => {
    if ('SpeechRecognition' in window) {
      return new window.SpeechRecognition();
    } else if ('webkitSpeechRecognition' in window) {
      return new window.webkitSpeechRecognition();
    } else {
      return null;
    }
  };

  const handleCircleClick = () => {
    if (!isRecording) {
      setIsRecording(true);
      setFlareColor('rgba(255, 0, 0, 0.5)'); // Change color when recording
    } else {
      setIsRecording(false);
      setFlareColor('rgba(0, 0, 255, 0.5)'); // Change back to default color
    }
  };

  return (
    <div className="app">
    <header>
      <h1>Auric Emotional Awareness</h1>
    </header>
    <main className="main-container">
      <svg
        className="circle-svg"
        width="200"
        height="200"
        onClick={handleCircleClick}
      >
        <circle cx="100" cy="100" r="80" fill={flareColor} />
      </svg>
      <div className="transcript">{transcript}</div>
    </main>
    <footer>
      <p>© 2023 Auric Emotional Awareness</p>
    </footer>
  </div>
  );
};

export default App;




