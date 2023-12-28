import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [flareColor, setFlareColor] = useState('rgba(0, 0, 255, 0.5)');
  const [isRecording, setIsRecording] = useState(false);
  const audioContext = useRef(new (window.AudioContext || window.webkitAudioContext)());
  const microphoneStreamRef = useRef(null);

  useEffect(() => {
    return () => {
      if (microphoneStreamRef.current) {
        microphoneStreamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        audioContext.current.createMediaStreamSource(stream);
        microphoneStreamRef.current = stream;
        setIsRecording(true);
        setFlareColor('rgba(255, 0, 0, 0.5)');
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  };

  const stopRecording = () => {
    if (microphoneStreamRef.current) {
      microphoneStreamRef.current.getTracks().forEach(track => track.stop());
    }
    setIsRecording(false);
    setFlareColor('rgba(0, 0, 255, 0.5)');
  };

  const handleCircleClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Auric Emotional Awareness</h1>
      </header>
      <main className="main-container">
        <div className="circle-3d-container" onClick={handleCircleClick}>
          <div className="circle-3d" style={{ background: flareColor }}></div>
        </div>
      </main>
      <footer>
        <p>© 2023 Auric Emotional Awareness</p>
      </footer>
    </div>
  );
};

export default App;





















