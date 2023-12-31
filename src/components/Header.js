import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px 20px 10px 30px', // Added padding-left to create space from the left edge
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Center vertically
    fontFamily: 'Arial, sans-serif', // Change the font family
  };

  const titleStyle = {
    margin: '0',
    fontSize: '1.5rem',
    fontWeight: 'bold', // Make the title bold
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#61dafb',
    fontSize: '1rem',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.2s',
  };

  const linkHoverStyle = {
    ...linkStyle,
    backgroundColor: '#61dafb',
    color: '#333',
  };

  // Using state to handle hover style
  const [hover, setHover] = React.useState(false);

  return (
    <header style={headerStyle}>
      <div>
        <h2 style={titleStyle}>Auric Emotional Awareness</h2>
      </div>
      <div>
        {/* Add the Log Out button */}
        <Link to="/welcome" style={linkStyle}>
          Log Out
        </Link>
      </div>
    </header>
  );
};

export default Header;






