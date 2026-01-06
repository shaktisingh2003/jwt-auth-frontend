import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>JWT Authentication System</h1>
        <p>Secure authentication using JSON Web Tokens</p>
        <div className="home-actions">
          <Link to="/login" className="btn-primary">
            Login
          </Link>
          <Link to="/register" className="btn-secondary">
            Register
          </Link>
        </div>
        <div className="features">
          <h3>Features</h3>
          <ul>
            <li>Secure JWT-based authentication</li>
            <li>Role-based access control (User & Admin)</li>
            <li>Password hashing with bcrypt</li>
            <li>Protected routes and middleware</li>
            <li>MongoDB database integration</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
