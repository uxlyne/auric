import React from 'react';

const Aura = () => {
  const style = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      position: 'relative',
    },
    eclipse: {
      width: '500px',
      height: '500px',
      borderRadius: '50%',
      boxShadow: `
        0 0 10px 5px rgba(255, 255, 255, 0.6), /* inner white glow */
        0 0 15px 10px rgba(47, 79, 79, 0.5), /* middle blue-green glow */
        0 0 20px 15px rgba(224, 255, 255, 0.3); /* outer light cyan glow */
      `,
      zIndex: 1,
      animation: 'pulse 2s infinite', // Name of the animation and duration
    },
    '@keyframes pulse': {
      '0%': {
        boxShadow: `
          0 0 10px 5px rgba(255, 255, 255, 0.6),
          0 0 15px 10px rgba(47, 79, 79, 0.5),
          0 0 20px 15px rgba(224, 255, 255, 0.3);
        `,
      },
      '50%': {
        boxShadow: `
          0 0 20px 10px rgba(255, 255, 255, 0.8),
          0 0 30px 15px rgba(47, 79, 79, 0.7),
          0 0 40px 20px rgba(224, 255, 255, 0.5);
        `,
      },
      '100%': {
        boxShadow: `
          0 0 10px 5px rgba(255, 255, 255, 0.6),
          0 0 15px 10px rgba(47, 79, 79, 0.5),
          0 0 20px 15px rgba(224, 255, 255, 0.3);
        `,
      },
    },
  };

  // Styles need to be injected into the component since keyframes can't be inline
  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.6),
                          0 0 15px 10px rgba(47, 79, 79, 0.5),
                          0 0 20px 15px rgba(224, 255, 255, 0.3);
            }
            50% {
              box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.8),
                          0 0 30px 15px rgba(47, 79, 79, 0.7),
                          0 0 40px 20px rgba(224, 255, 255, 0.5);
            }
            100% {
              box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.6),
                          0 0 15px 10px rgba(47, 79, 79, 0.5),
                          0 0 20px 15px rgba(224, 255, 255, 0.3);
            }
          }
        `}
      </style>
      <div style={style.container}>
        <div style={style.eclipse}></div>
      </div>
    </>
  );
};

export default Aura;



