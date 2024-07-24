// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NewPage from './components/NewPage';
import Navbar from './components/Navbar';
import './assets/App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newpage" element={<NewPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
