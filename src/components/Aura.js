const Aura = () => {
  const auraSize = '40vw'; // 40% of the viewport width

  const style = {
    auraContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      height: auraSize,
      width: auraSize,
      maxWidth: '500px',
      maxHeight: '500px',
    },
    orb: {
      width: '100%',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '50%',
      border: '2px solid rgba(255, 255, 255, 0.3)', // Made border slightly more visible
      boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.3), 0 0 40px rgba(0, 174, 255, 0.7)', // Enhanced glow
      position: 'relative',
      overflow: 'hidden',
    },
    glow: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '300%',
      height: '300%',
      transform: 'translate(-50%, -50%)',
      background: 'radial-gradient(circle at center, rgba(0, 174, 255, 0.4) 20%, transparent 70%)', // Introducing a more vivid color
      borderRadius: '50%',
      animation: 'rotate 10s linear infinite',
      filter: 'blur(40px)', // Increased blur for a softer glow
    },
  };


  const Concentric = ({ size, delay }) => {
    return (
      <div
        style={{
          ...style.glow,
          width: size,
          height: size,
          animationDelay: delay,
        }}
      />
    );
  };

  return (
    <div style={style.auraContainer}>
      <div style={style.orb}>
        <Concentric size="80%" delay="0s" />
        <Concentric size="60%" delay="-5s" />
        <Concentric size="40%" delay="-2.5s" />
      </div>
    </div>
  );
};

export default Aura;









