import React from 'react';
import Aura from '../components/Aura'; // Make sure the path is correct
import Header from '../components/Header'; // Import the Header component
import Footer from '../components/Footer'; // Import the Footer component
import '../styles/App.css';

const HomePage = () => {
  return (
    <>
      <Header /> {/* Include the Header component */}
      <Aura /> {/* The title is included within the Aura component */}
      {/* Other Auric App content */}
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default HomePage;







