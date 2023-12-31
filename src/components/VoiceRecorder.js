import React, { useState } from 'react';

const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    // Add code to start recording here
    setIsRecording(true);
  };

  const stopRecording = () => {
    // Add code to stop recording here
    setIsRecording(false);
  };

  return (
    <div className="voice-recorder">
      <h2>Voice Recorder</h2>
      <button onClick={startRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
    </div>
  );
};

export default VoiceRecorder;
