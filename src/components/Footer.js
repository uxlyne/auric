import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: 'transparent',
    borderTop: '1px solid rgba(255, 255, 255, 0.15)',
    padding: '1rem 2rem',
    textAlign: 'center',
    width: '100%',
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.7)',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80px', // Adjust the height as needed
  };

  return (
    <div style={containerStyle}>
      <footer style={footerStyle}>
        © 2024 Auric Emotional Awareness
      </footer>
    </div>
  );
};

export default Footer;




