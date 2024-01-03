import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

  const headerStyles = {
    background: 'transparent',
    borderBottom: '1px solid rgba(255, 255, 255, 0.15)', // More subtle border
    padding: '0.5rem 2rem', // Reduced padding for a thinner look
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: '1rem',
  };

  const logoStyles = {
    fontSize: '1.25rem', // Reduced size for a sleeker look
    fontWeight: '300', // Lighter font weight for a more refined appearance
    color: 'rgba(255, 255, 255, 0.9)',
    letterSpacing: '0.5px', // Reduced spacing for a more compact look
  };

  const linkStyles = {
    color: isHovering ? '#4ECCA3' : 'rgba(255, 255, 255, 0.7)',
    textDecoration: 'none',
    padding: '0.25rem 0.75rem', // Reduced padding for a sleeker button
    fontSize: '0.85rem', // Smaller font size for the button
    borderRadius: '2px',
    transition: 'all 0.2s ease-in-out',
  };

  return (
    <header style={headerStyles}>
      <h1 style={logoStyles}>Aura</h1>
      <Link
        to="/welcome"
        style={linkStyles}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        LOG OUT
      </Link>
    </header>
  );
};

export default Header;











