import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: 'transparent',
    borderTop: '1px solid rgba(255, 255, 255, 0.15)',
    padding: '1rem 2rem',
    textAlign: 'center',
    width: '100%',
    position: 'absolute',
    bottom: '0',
    left: '0', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.7)',
  };

  return (
    <footer style={footerStyle}>
      © 2023 Auric Emotional Awareness
    </footer>
  );
};

export default Footer;



