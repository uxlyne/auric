import React from 'react';
import Aura from '../components/Aura';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TextInput from '../components/TextInput';
import TextAnalysis from '../components/TextAnalysis';
import '../styles/Main.css'; // Your existing Main.css

const Main = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        {/* Add the particle container for the background effect */}
        <div className="particle-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                '--random-delay': Math.random(),
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
        </div>

        <div className="content">
          <div className="left-panel">
            <Aura />
          </div>
          <div className="right-panel">
            {/* Add the TextInput component */}
            <TextInput />

            {/* Add the TextAnalysis component */}
            <TextAnalysis />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default Main;














