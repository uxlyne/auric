import React from 'react';

const Aura = () => {
  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      position: 'relative',
    },
    eclipse: {
      width: '300px',
      height: '300px',
      background: '#1E1E1E',
      borderRadius: '50%',
      boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.8)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    glow: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: 'radial-gradient(closest-side, rgba(0, 174, 255, 0.3) 60%, transparent)',
      boxShadow: '0 0 30px rgba(0, 174, 255, 0.7)',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    concentric: {
      width: '90%',
      height: '90%',
      borderRadius: '50%',
      border: '1px solid rgba(0, 174, 255, 0.6)',
      boxShadow: '0 0 15px rgba(0, 174, 255, 0.5)',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    text: {
      zIndex: 2,
      color: '#ffffff',
      // Add more text styles here
    }
  };

  return (
    <>
      <div style={style.container}>
        <div style={style.eclipse}>
          <div style={style.glow}></div>
          <div style={style.concentric}></div>
          {/* Add more concentric divs here if needed */}
        </div>
      </div>
    </>
  );
};

export default Aura;






