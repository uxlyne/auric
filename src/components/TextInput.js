import React, { useState } from 'react';

const TextInput = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="text-input">
      <h2>Text Input</h2>
      <textarea
        rows="5"
        placeholder="Enter text here..."
        value={inputText}
        onChange={handleInputChange}
      ></textarea>
    </div>
  );
};

export default TextInput;
