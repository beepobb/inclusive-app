import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './layout.css'

const DeafultLayout = ({ children }) => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <nav className="nav-links">
          <div className="site-title">Site Name</div>
          <ul>
            <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
            <li><NavLink to="/discover" activeClassName="active">Discover</NavLink></li>
            <li><NavLink to="/forum" activeClassName="active">Forum</NavLink></li>
          </ul>
        </nav>
        <button onClick={handleSignOut}>Sign Out</button>
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default DeafultLayout;
