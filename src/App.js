import './App.css';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;