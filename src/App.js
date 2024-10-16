import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota principal (LoginPage) */}
        <Route path="/" element={<LoginPage />} />
        {/* Rota Home */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
