import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import WelcomeScreen from './pages/WelcomeScreen';
import HomePage from './pages/Main';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <div className="app">  {/* Add this className */}
      <Routes>
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;

























































