import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import LandingPage from './LandingPage';

function App() {
  return (
    <Router>
      <div className="header-container">
        <Header />
      </div>
      <div className="body-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
