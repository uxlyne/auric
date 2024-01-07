import React, { useState, useEffect } from 'react';
import '../styles/TextAnalysis.css'; // Import the CSS file

const TextAnalysis = ({ text }) => {
  const [analysisResult, setAnalysisResult] = useState({
    emotions: [
      { emotion: 'Joy', score: 0.68 }, // Example emotion
      { emotion: 'Sadness', score: 0.32 } // Another example emotion
    ],
    sentiment: { label: 'neutral', score: 0 }, // Default sentiment
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to process emotions data
  const processEmotions = (emotionsData) => {
    let sortedEmotions = Object.keys(emotionsData)
      .map(key => ({ emotion: key, score: emotionsData[key] }))
      .sort((a, b) => b.score - a.score);

    return sortedEmotions.slice(0, 2);
  };

  useEffect(() => {
    const analyzeTextWithWatson = async (text) => {
      if (text) {
        try {
          setLoading(true);
          setError(null);

          const response = await fetch('/api/analyze', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: text, features: { sentiment: {}, emotions: {} } }),
          });

          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }

          const data = await response.json();

          setAnalysisResult({
            emotions: processEmotions(data.emotion.document.emotion),
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

  // Helper function to calculate the position of the sentiment pointer
  const getSentimentPosition = (score) => {
    return `${((score + 1) / 2) * 100}%`;
  };

  return (
    <div className="text-analysis-container">
      <h2 className="text-analysis-header">Overall Analysis</h2>
      {loading ? (
        <p>Loading analysis...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="analysis-result">
          {/* Emotions */}
          <div className="emotion-section">
            <span className="analysis-title">Emotions</span>
            <div className="emotion-list">
              {analysisResult.emotions.map((emotion, index) => (
                <div key={index} className="emotion-item">
                  <div className="emotion-color" style={{ backgroundColor: getColorForEmotion(emotion.emotion) }}></div>
                  <span className="emotion-label">{emotion.emotion}</span>
                  <span className="emotion-score">{emotion.score.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sentiment */}
          <div className="sentiment-section">
            <span className="analysis-title">Sentiment</span>
            <div className="sentiment-scale">
              <div className="sentiment-pointer" style={{ left: getSentimentPosition(analysisResult.sentiment.score) }}></div>
            </div>
            <span className="sentiment-score">{analysisResult.sentiment.score.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to get color based on the emotion
const getColorForEmotion = (emotion) => {
  const colors = {
    Joy: '#FFD700',
    Sadness: '#1E90FF',
    Anger: '#FF6347',
    Fear: '#A52A2A',
    Disgust: '#008000',
  };

  return colors[emotion] || '#000000'; // Default to black if emotion not found
};

export default TextAnalysis;














