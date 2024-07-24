import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import HomeEn from './components/HomeEn';
import './assets/Home.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/" className="nav-link">Français</Link>
          <Link to="/en" className="nav-link">English</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/en" element={<HomeEn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
