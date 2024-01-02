import React, { useState, useEffect } from 'react';

const TextAnalysis = ({ text }) => {
  const [analysisResult, setAnalysisResult] = useState(null);

  useEffect(() => {
    const result = analyzeText(text);
    setAnalysisResult(result);
  }, [text]);

  const analyzeText = (text) => {
    return `Analysis result: ${text}`;
  };

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
      minHeight: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflowY: 'auto',
    }
  };

  return (
    <div style={styles.textAnalysisContainer}>
      <h2 style={styles.header}>Text Analysis</h2>
      <div style={styles.analysisResult}>
        {analysisResult ? <p>{analysisResult}</p> : <p>No analysis results yet.</p>}
      </div>
    </div>
  );
};

export default TextAnalysis; // This line should be outside the function

