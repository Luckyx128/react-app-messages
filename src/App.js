import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Footer from './components/footer';
import Header from './components/header';
function App() {
  return (
    <Router>
      <Header />
      <main id='content-main'>
        <Routes>
          {/* Rota principal (LoginPage) */}
          <Route path="/" element={<LoginPage />} />
          {/* Rota Home */}
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
