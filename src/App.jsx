import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import './App.css';
import { isTokenExpired } from './utils/auth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token encontrado no localStorage:', token);
    if (token && !isTokenExpired(token)) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  
  const handleLoginSuccess = () => {
    console.log('Login realizado com sucesso!');
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={
            isLoggedIn ? <Navigate to="/home" replace /> : <Login onLoginSuccess={handleLoginSuccess} />
          } 
        />
        <Route 
          path="/home" 
          element={
            isLoggedIn ? <Home /> : <Navigate to="/login" replace />
          } 
        />
        
        <Route 
          path="*" 
          element={
            isLoggedIn ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
