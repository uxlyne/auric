import React, { useState } from 'react';
import '../styles/TextInput.css'; // Import the CSS file

const TextInput = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
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
    </div>
  );
};

export default TextInput;



