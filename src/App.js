import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import WelcomeScreen from './pages/WelcomeScreen';
import Main from './pages/Main';

const App = () => {
  return (
    <div className="app">  {/* Add this className */}
      <Routes>
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;

























































