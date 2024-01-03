import React, { useState, useEffect } from 'react';
import '../styles/TextAnalysis.css'; // Import the CSS file

// Define the analyzeText function here
const analyzeText = (text) => {
  // Placeholder text analysis logic
  return {
    documentTone: {
      tone: 'Joy',
      score: 0.85,
      color: '#FFD700', // Example color for Joy
    },
    sentiment: {
      label: 'Positive',
      score: 0.75,
    },
  };
};

const TextAnalysis = ({ text }) => {
  const [analysisResult, setAnalysisResult] = useState({
    documentTone: { tone: '', score: 0, color: '' },
    sentiment: { label: '', score: 0 },
  });

  useEffect(() => {
    if (text) {
      const result = analyzeText(text);
      setAnalysisResult(result);
    }
  }, [text]);

  return (
    <div className="text-analysis-container">
      <h2 className="text-analysis-header">Text Analysis</h2>
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
              backgroundColor: `rgba(255, ${255 * (1 - analysisResult.sentiment.score)}, 0, 1)`, // Color changes based on sentiment score
            }}
          ></div>
          <span className="analysis-title">Score:</span>
          <span className="analysis-score">{analysisResult.sentiment.score}</span>
        </div>
      </div>
    </div>
  );
};

export default TextAnalysis;







