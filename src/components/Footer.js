import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px 20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif', // Change the font family
  };

  const copyrightStyle = {
    margin: '0',
    fontSize: '0.9rem', // Adjust the font size
  };

  return (
    <footer style={footerStyle}>
      <p style={copyrightStyle}>© 2023 Auric Emotional Awareness</p>
    </footer>
  );
};

export default Footer;

