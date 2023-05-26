import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from './components/Container';
import Signup from './components/Signup';
import Login from './components/Login';
import NavBar from './components/NavBar';

const API_URL = 'http://localhost:8000'; // Replace with your FastAPI backend URL

const App = () => {

  return (
    <div>
      <NavBar />
      <Container>
          <div>
            <h2>User Dashboard</h2>
            {/* Display user dashboard */}
          </div>: (
          <div>
            <Login/>
            <Signup/>
          </div>
        )
      </Container>
    </div>
  );
};

export default App;
