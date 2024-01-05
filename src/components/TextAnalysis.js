import React, { useState, useEffect } from 'react';
import '../styles/TextAnalysis.css'; // Import the CSS file

const TextAnalysis = ({ text }) => {
  const [analysisResult, setAnalysisResult] = useState({
    documentTone: { tone: '', score: 0, color: '' },
    sentiment: { label: '', score: 0 },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const analyzeTextWithWatson = async (text) => {
      if (text) {
        try {
          setLoading(true);
          setError(null);

          // Perform your API request here
          const response = await fetch('/api/analyze', { // Use the API endpoint you set up in your server.js
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              text: text,
              features: {
                sentiment: {},
                categories: {},
                concepts: {},
                entities: {},
                keywords: {},
              },
            }),
          });

          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }

          // Parse the API response
          const data = await response.json();

          // Update the analysis result state
          setAnalysisResult({
            documentTone: {
              tone: 'Joy', // Example tone
              score: 0.85,
              color: '#FFD700', // Example color for Joy
            },
            sentiment: {
              label: data.sentiment.document.label,
              score: data.sentiment.document.score,
            },
          });
        } catch (err) {
          setError('Error analyzing the text. Please try again.');
        } finally {
          setLoading(false);
        }
      }
    };

    analyzeTextWithWatson(text);
  }, [text]);

  return (
    <div className="text-analysis-container">
      <h2 className="text-analysis-header">Text Analysis</h2>
      {loading ? (
        <p>Loading analysis...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="analysis-result">
          {/* Document Tone */}
          <div className="analysis-item">
            <span className="analysis-title">Tone:</span>
            <span className="analysis-score">{analysisResult.documentTone.tone}</span>
            <div
              className="tone-indicator"
              style={{ backgroundColor: analysisResult.documentTone.color }}
            ></div>
            <span className="analysis-title">Score:</span>
            <span className="analysis-score">{analysisResult.documentTone.score}</span>
          </div>

          {/* Sentiment */}
          <div className="analysis-item">
            <span className="analysis-title">Sentiment:</span>
            <span className="analysis-score">{analysisResult.sentiment.label}</span>
            <div
              className="sentiment-indicator"
              style={{
                backgroundColor: `rgba(255, ${255 * (1 - analysisResult.sentiment.score)}, 0, 1)`,
              }}
            ></div>
            <span className="analysis-title">Score:</span>
            <span className="analysis-score">{analysisResult.sentiment.score}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextAnalysis;










