import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

const App = () => {
  const [flareColor, setFlareColor] = useState('rgba(0, 0, 255, 0.5)');
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [circleSize, setCircleSize] = useState(100);
  const [textInput, setTextInput] = useState('');
  const [sentimentResult, setSentimentResult] = useState('');

  const audioContext = useRef(new (window.AudioContext || window.webkitAudioContext)());
  const analyser = useRef(audioContext.current.createAnalyser());
  const microphoneStreamRef = useRef(null);
  const recognitionRef = useRef(null);

  const testApi = () => {
    fetch('/api/proxy')
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

    setFlareColor('rgba(255, 0, 0, 0.5)');
  }, []);

  const stopRecording = useCallback(() => {
    if (microphoneStreamRef.current) {
      microphoneStreamRef.current.getTracks().forEach((track) => track.stop());
    }
    recognitionRef.current.stop();
    setFlareColor('rgba(0, 0, 255, 0.5)');
  }, []);

  const updateCircleSize = () => {
    const bufferLength = analyser.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.current.getByteFrequencyData(dataArray);
    const averageVolume = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;

    const minSize = 50;
    const maxSize = 150;
    const scalingFactor = 1.5;

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

  const analyzeSentiment = async () => {
    try {
      const response = await fetch('/api/sentiment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: textInput }),
      });

      if (response.ok) {
        const data = await response.json();
        setSentimentResult(data.documentSentiment.score); // Extract the sentiment score
      } else {
        console.error('API request failed:', response.statusText);
      }
    } catch (error) {
      console.error('API request failed:', error);
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
        <input
          type="text"
          placeholder="Enter text for sentiment analysis"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <button onClick={analyzeSentiment}>Analyze Sentiment</button>
        <div className="sentiment-result">
          Sentiment Score: {sentimentResult}
        </div>
        <button onClick={testApi}>Test API</button>
      </main>
      <footer>
        <p>© 2023 Auric Emotional Awareness</p>
      </footer>
    </div>
  );
};

export default App;














