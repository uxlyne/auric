import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Initialize hover state using the useState hook
  const [hover, setHover] = useState(false);

  // Inline styles for the header components
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Places items on the far ends
    alignItems: 'center', // Centers items vertically
    background: 'var(--color-background)', // Uses global CSS variable
    color: 'var(--color-text)', // Uses global CSS variable
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    margin: '0',
  };

  const linkStyle = {
    color: 'var(--color-primary)',
    textDecoration: 'none',
    // Apply a different color when hovered
    backgroundColor: hover ? 'var(--color-primary)' : 'transparent',
    color: hover ? 'var(--color-background)' : 'var(--color-primary)',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    transition: 'background-color 0.2s, color 0.2s',
  };

  return (
    <header style={headerStyle}>
      <div>
        <h2 style={titleStyle}>Auric Emotional Awareness</h2>
      </div>
      <div>
        <Link
          to="/welcome"
          style={linkStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Log Out
        </Link>
      </div>
    </header>
  );
};

export default Header;








