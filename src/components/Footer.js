import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: 'var(--color-background)', // Using the global variable for consistency
    color: 'var(--color-text)', // Using the global variable for consistency
    padding: '1rem',
    textAlign: 'center', // Centers the text horizontally
    width: '100%', // Ensures the footer stretches across the full width
    position: 'relative', // Position relative for potential absolute children
    bottom: 0, // Align to the bottom
    left: 0, // Align to the left
  };

  const textStyle = {
    margin: '0',
    padding: '0',
    fontSize: '0.9rem', // Adjust font size as needed
  };

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2023 Auric Emotional Awareness</p>
    </footer>
  );
};

export default Footer;


