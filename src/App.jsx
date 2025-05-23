import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import './App.css';
import { isTokenExpired } from './utils/auth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !isTokenExpired(token)) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <Router>
      {isLoggedIn ? (
        <Home />
      ) : (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </Router>
  );
}

export default App;
