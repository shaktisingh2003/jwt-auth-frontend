import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { user, logout, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h2>Dashboard</h2>
        <div className="nav-actions">
          {isAdmin && (
            <button
              className="btn-secondary"
              onClick={() => navigate('/admin')}
            >
              Admin Panel
            </button>
          )}
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="welcome-card">
          <h1>Welcome, {user?.name}!</h1>
          <div className="user-info">
            <div className="info-item">
              <strong>Email:</strong> {user?.email}
            </div>
            <div className="info-item">
              <strong>Role:</strong>{' '}
              <span className={`role-badge ${user?.role}`}>{user?.role}</span>
            </div>
            <div className="info-item">
              <strong>User ID:</strong> {user?.id}
            </div>
          </div>
        </div>

        <div className="features-section">
          <h3>Your Features</h3>
          <div className="features-grid">
            <div className="feature-card">
              <h4>Profile</h4>
              <p>View and manage your profile information</p>
            </div>
            <div className="feature-card">
              <h4>Settings</h4>
              <p>Customize your account settings</p>
            </div>
            <div className="feature-card">
              <h4>Security</h4>
              <p>Manage your security preferences</p>
            </div>
            {isAdmin && (
              <div className="feature-card admin-feature">
                <h4>Admin Access</h4>
                <p>You have administrative privileges</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
