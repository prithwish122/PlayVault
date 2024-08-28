import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JoinPage from './components/JoinPage';
import BuyPage from './components/BuyPage'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/buy" element={<BuyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
