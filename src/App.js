import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from './components/Container';
import Signup from './components/Signup';
import Login from './components/Login';
import NavBar from './components/NavBar';

const API_URL = 'http://localhost:8000'; // Replace with your FastAPI backend URL

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.get(`${API_URL}/protected`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          // Handle protected route response
          if (response.status === 200) {
            setUserData(response.data);
            setAuthenticated(true);
          } else {
            console.error('Failed to fetch user data');
          }
        }
      } catch (error) {
        // Handle protected route error
        console.error('Protected route error:', error.message);
      }
    };

    fetchUserData();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/token`, { username: email, password });
      // Handle login response
      if (response.status === 200) {
        localStorage.setItem('token', response.data.access_token);
        setAuthenticated(true);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      // Handle login error
      console.error('Login error:', error.message);
    }
  };

  const handleSignup = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, { username: email, password });
      // Handle signup response
      if (response.status === 200) {
        localStorage.setItem('token', response.data.access_token);
        setAuthenticated(true);
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      // Handle signup error
      console.error('Signup error:', error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthenticated(false);
  };

  return (
    <div>
      <NavBar />
      <Container>
        {authenticated ? (
          <div>
            <h2>User Dashboard</h2>
            {userData && <p>Welcome, {userData.username}!</p>}
            {/* Display user dashboard */}
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <Login onLogin={handleLogin} />
            <Signup onSignup={handleSignup} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default App;
