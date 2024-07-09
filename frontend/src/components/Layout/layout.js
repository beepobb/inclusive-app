import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './layout.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExploreIcon from '@mui/icons-material/Explore';
import ForumIcon from '@mui/icons-material/Forum';
import logo from '../../uni.svg';

const DeafultLayout = ({ children }) => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <nav className="nav-links">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
          <ul>
            <li>
              <NavLink to="/discover" activeClassName="active">
                  <div className="nav-item">
                      <ExploreIcon className="nav-logo" style={{ marginTop:5, fontSize:30}}/>
                      <span className="nav-text">Discover</span>
                  </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" activeClassName="active">
                  <div className="nav-item">
                      <AccountBoxIcon className="nav-logo" style={{ marginTop:5, fontSize:30}}/>
                      <span className="nav-text">Dashboard</span>
                  </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/forum" activeClassName="active">
                  <div className="nav-item">
                      <ForumIcon className="nav-logo" style={{ marginTop:5, fontSize:30}}/>
                      <span className="nav-text">Forum</span>
                  </div>
              </NavLink>
            </li>
            <li>
              <button className="signout" onClick={handleSignOut}>
                <div className="nav-item">
                    <AccountBoxIcon className="nav-logo" style={{fontSize:30}}/>
                    <span className="btn-text">Sign Out</span>
                </div>
              </button>
            </li>
          </ul>
        </nav>
        
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default DeafultLayout;
