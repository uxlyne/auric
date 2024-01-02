import React, { useState, useEffect } from 'react';



// Define the analyzeText function here
const analyzeText = (text) => {
  // Your text analysis logic here
  return {
    documentTone: {
      tone: 'Joy',
      score: 0.85,
      color: '#FFD700', // Example color
    },
    sentiment: {
      label: 'Positive',
      score: 0.75,
    },
  };
};

const TextAnalysis = ({ text }) => {
  const [analysisResult, setAnalysisResult] = useState(null);

  useEffect(() => {
    const result = analyzeText(text);
    setAnalysisResult(result);
  }, [text]);

  const styles = {
    textAnalysisContainer: {
      maxWidth: '600px',
      width: '100%',
      margin: '10px',
      background: 'rgba(255, 255, 255, 0.05)',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'left',
    },
    header: {
      color: '#E8E8E8',
      marginBottom: '1rem',
    },
    analysisResult: {
      color: '#E8E8E8',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid #5865F2',
      padding: '10px',
      borderRadius: '5px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    toneItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '8px',
    },
    toneSquare: {
      width: '20px',
      height: '20px',
      marginRight: '8px',
    },
    sentimentSquare: {
      width: '20px',
      height: '20px',
    },
  };

  return (
    <div style={styles.textAnalysisContainer}>
      <h2 style={styles.header}>Text Analysis</h2>
      <div style={styles.analysisResult}>
        {analysisResult && (
          <>
            {/* Document Tone */}
            <div style={styles.toneItem}>
              <div
                style={{
                  ...styles.toneSquare,
                  background: analysisResult.documentTone.color,
                }}
              ></div>
              <div>
                Tone: {analysisResult.documentTone.tone}
                <br />
                Score: {analysisResult.documentTone.score}
              </div>
            </div>

            {/* Sentiment */}
            <div style={styles.toneItem}>
              <div
                style={{
                  ...styles.sentimentSquare,
                  background: `rgb(${255 - (analysisResult.sentiment.score * 255)}, ${255 - (analysisResult.sentiment.score * 255)}, ${255 - (analysisResult.sentiment.score * 255)})`,
                }}
              ></div>
              <div>
                Sentiment: {analysisResult.sentiment.label}
                <br />
                Score: {analysisResult.sentiment.score}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TextAnalysis;





