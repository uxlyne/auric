import React, { useState } from 'react';
import '../styles/TextInput.css'; // Import the CSS file

const TextInput = () => {
  const [inputText, setInputText] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null); // State to store analysis results
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAnalyzeClick = async () => {
    // Check if inputText is not empty before making the API request
    if (inputText.trim() === '') {
      alert('Please enter some text to analyze.');
      return;
    }

    console.log(`API Key Length: ${process.env.IBM_WATSON_API_KEY.length}`);
    console.log('hey');


    // Define custom headers with your API key
    const customHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Basic ${process.env.IBM_WATSON_API_KEY}`,
    };

    try {
      setLoading(true); // Display a loading indicator
      setError(null);

      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: customHeaders,
        body: JSON.stringify({ text: inputText }),
      });

      if (response.ok) {
        const data = await response.json();
        setAnalysisResult(data); // Update the state with analysis results
      } else {
        console.error('Failed to analyze text:', response.statusText);
        setError('Error analyzing the text. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error analyzing the text. Please try again.');
    } finally {
      setLoading(false); // Hide the loading indicator after API response
    }
  };

  return (
    <div className="text-input-container">
      <h2 className="text-input-header">Text Input</h2>
      <textarea
        placeholder="Enter text here..."
        value={inputText}
        onChange={handleInputChange}
        className="textarea"
      />
      <button className="analyze-button" onClick={handleAnalyzeClick}>
        Analyze
      </button>

      {/* Display the analysis result */}
      {loading ? (
        <p>Loading analysis...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : analysisResult ? (
        <div className="analysis-result">
          {/* Render the analysis result here */}
          {/* You can pass analysisResult as a prop to TextAnalysis component */}
          {/* Example: <TextAnalysis data={analysisResult} /> */}
        </div>
      ) : null}
    </div>
  );
};

export default TextInput;










