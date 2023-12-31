import React from 'react';
import Aura from '../components/Aura';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TextInput from '../components/TextInput';
import TextAnalysis from '../components/TextAnalysis';
import '../styles/Main.css';

const Main = () => {
  return (
    <div>
    <Header />
    <div className="main-container">
      <div className="content">
        <div className="left-panel">
          <Aura />
        </div>
        <div className="right-panel">
          <TextInput />
          <TextAnalysis />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Main;













