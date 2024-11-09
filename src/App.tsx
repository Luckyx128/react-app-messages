import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home"
function App() {
  return (
    <Router>

      <main id='content-main'>
        <Routes>
          {/* Rota principal (Index) */}
          <Route path="/" element={< Login/>} />
          {/* Rota Home */}
          <Route path="/home" element={<Home/>} />
        </Routes>
      </main>

    </Router>
  );
}

export default App;
