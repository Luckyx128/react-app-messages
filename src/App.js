import logo from './logo.svg';
import './App.css';

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
