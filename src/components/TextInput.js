import React, { useState } from 'react';

const TextInput = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Styles
  const styles = {
    textInputContainer: {
      maxWidth: '600px', // Restrict the maximum width
      width: '100%', // Take up to 100% of the parent container
      margin: '10px', // Center it horizontally
      background: 'rgba(255, 255, 255, 0.05)', // Slightly visible background
      padding: '20px',
      borderRadius: '10px', // Rounded corners
      textAlign: 'left', // Align text to the left
    },
    header: {
      color: '#E8E8E8',
      marginBottom: '1rem', // Spacing below the header
    },
    textarea: {
      width: '100%', // Fill the width of the container
      background: 'rgba(255, 255, 255, 0.1)', // Slightly more visible than the container background
      border: '1px solid #5865F2', // Border color to match the theme
      color: '#E8E8E8', // Text color
      padding: '10px',
      borderRadius: '5px', // Consistent with the container border-radius
      resize: 'none', // Prevent resizing
      height: '150px', // Fixed height with inner scrolling
      overflowY: 'auto', // Enable vertical scrolling within the textarea
    }
  };

  return (
    <div style={styles.textInputContainer}>
    <h2 style={styles.header}>Text Input</h2>
    <textarea
      placeholder="Enter text here..."
      value={inputText}
      onChange={handleInputChange}
      style={styles.textarea}
    />
  </div>
  );
};

export default TextInput;

