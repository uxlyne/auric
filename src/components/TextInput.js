import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import '../styles/TextInput.css';

const TextInput = () => {
  // State variables
  const [inputText, setInputText] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to analyze text
  const analyzeText = async () => {
    // Clear previous errors
    setError(null);

    // Check if inputText is empty
    if (inputText.trim() === '') {
      setError('Please enter some text to analyze.');
      return;
    }

    // Start loading
    setLoading(true);

    try {
      // Make the API request using Axios
      const response = await axios.post('/api/analyze', {
        text: inputText
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${process.env.REACT_APP_IBM_WATSON_API_KEY}`
        }
      });

      // Handle the response data
      if (response.status === 200) {
        setAnalysisResult(response.data);
      } else {
        setError('Error analyzing the text. Please try again.');
      }
    } catch (error) {
      setError('Error analyzing the text. Please try again.');
    } finally {
      // Stop loading
      setLoading(false);
    }
  };

  // Function to handle the analyze button click
  const handleAnalyzeClick = () => {
    analyzeText();
  };

  return (
    <div className="text-input-container">
      <h2 className="text-input-header">Text Input</h2>
      <textarea
        placeholder="Enter text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="textarea"
      />
      <button className="analyze-button" onClick={handleAnalyzeClick}>
        Analyze
      </button>
      {loading && <p>Loading analysis...</p>}
      {error && <p className="error-message">{error}</p>}
      {analysisResult && (
        <div className="analysis-result">
          {/* Render the analysis result here */}
          {/* You can pass analysisResult as a prop to TextAnalysis component */}
          {/* Example: <TextAnalysis data={analysisResult} /> */}
        </div>
      )}
    </div>
  );
};

export default TextInput;





















