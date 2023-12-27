import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

const App = () => {
  const [flareColor, setFlareColor] = useState('rgba(0, 0, 255, 0.5)'); // Default color is blue
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [circleSize, setCircleSize] = useState(100); // Initial size of the circle
  const audioContext = useRef(new (window.AudioContext || window.webkitAudioContext)());
  const analyser = useRef(audioContext.current.createAnalyser());
  const microphoneStreamRef = useRef(null);
  const recognitionRef = useRef(null);
  

  const testApi = () => {
    fetch('/api/proxy') // This should match the endpoint you set up in your server for the API proxy
      .then(response => response.json())
      .then(data => {
        console.log('API response:', data);
      })
      .catch(error => {
        console.error('API request failed:', error);
      });
  };

  useEffect(() => {
    recognitionRef.current = getSpeechRecognition();
    if (!recognitionRef.current) {
      console.error('Speech recognition not supported');
      return;
    }

    recognitionRef.current.lang = 'en-US';
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          setTranscript(transcript => transcript + event.results[i][0].transcript + ' ');
        }
      }
    };
  }, []);

  const startRecording = useCallback(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const microphone = audioContext.current.createMediaStreamSource(stream);
        microphone.connect(analyser.current);
        microphoneStreamRef.current = stream;

        requestAnimationFrame(updateCircleSize);
        recognitionRef.current.start();
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });

    setFlareColor('rgba(255, 0, 0, 0.5)'); // Change color when recording
  }, [/* dependencies of startRecording */]);

  const stopRecording = useCallback(() => {
    if (microphoneStreamRef.current) {
      microphoneStreamRef.current.getTracks().forEach((track) => track.stop());
    }
    recognitionRef.current.stop();
    setFlareColor('rgba(0, 0, 255, 0.5)'); // Change back to default color
  }, [/* dependencies of stopRecording */]);

  const updateCircleSize = () => {
    const bufferLength = analyser.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.current.getByteFrequencyData(dataArray);
    const averageVolume = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;

    const minSize = 50; // Minimum size of the circle
    const maxSize = 150; // Maximum size of the circle
    const scalingFactor = 1.5; // Adjust this factor as needed

    const adjustedSize = Math.max(minSize, Math.min(maxSize, averageVolume * scalingFactor));
    setCircleSize(adjustedSize);

    requestAnimationFrame(updateCircleSize);
  };

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
    setIsRecording(!isRecording);
  };

  useEffect(() => {
    if (isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [isRecording, startRecording, stopRecording]);

  return (
    <div className="app">
      <header>
        <h1>Auric Emotional Awareness</h1>
      </header>
      <main className="main-container">
        <svg
          className="circle-svg"
          width={200}
          height={200}
          onClick={handleCircleClick}
        >
          <circle
            cx={100}
            cy={100}
            r={circleSize / 2}
            fill={flareColor}
          />
        </svg>
        <div className="transcript">{transcript}</div>
        <button onClick={testApi}>Test API</button>
      </main>
      <footer>
        <p>© 2023 Auric Emotional Awareness</p>
      </footer>
    </div>
  );
};

export default App;












