import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/TextInput.css'; // Import the CSS file

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

    // Start loading
    setLoading(true);

    try {
      // Define the request body with the input text
      const requestBody = {
        text: inputText,
      };

      // Define custom Axios configuration to send only necessary headers
      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json', // Set necessary headers only
        },
      };

      // Make the API request using Axios with customized configuration
      const response = await axios.post('/api/analyze', requestBody, axiosConfig);

      // Log the size of the request payload and headers for debugging
      console.log('Request Payload Size:', JSON.stringify(requestBody).length);
      console.log('Request Headers Size:', JSON.stringify(axiosConfig.headers).length);

      // Handle the response data
      if (response.status === 200) {
        setAnalysisResult(response.data);
      } else {
        setError('Error analyzing text. Please try again.');
        console.error('Error in response:', response.status, response.statusText);
      }
    } catch (error) {
      setError('Error analyzing text. Please try again.');
      console.error('Error in request:', error);
    } finally {
      // Stop loading
      setLoading(false);
    }
  };

  // Function to fetch and log request headers
  const fetchRequestHeaders = async () => {
    try {
      const response = await axios.get('/api/headers');
      console.log('Request Headers:', response.data);
    } catch (error) {
      console.error('Error fetching headers:', error);
    }
  };

  // Function to handle the analyze button click
  const handleAnalyzeClick = () => {
    analyzeText();
  };

  useEffect(() => {
    // You can perform any initialization or additional actions here
  }, []);

  return (
    <div className="text-input-container">
      <h2 className="text-input-header">Text Input</h2>
      {/* Text input field */}
      <textarea
        id="input-text" // Add an id attribute
        className="input-text"
        placeholder="Enter text to analyze"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      {/* Analyze button */}
      <button className="analyze-button" onClick={handleAnalyzeClick}>
        Analyze
      </button>

      {/* Fetch Headers button */}
      <button className="fetch-headers-button" onClick={fetchRequestHeaders}>
        Fetch Headers
      </button>

      {loading && <p>Loading analysis results...</p>}
      {error && <p className="error-message">{error}</p>}
      {analysisResult && (
        <div className="analysis-results">
          {/* Render the analysis results here */}
          {/* You can display the analysisResult as needed */}
        </div>
      )}
    </div>
  );
};

export default TextInput;

































