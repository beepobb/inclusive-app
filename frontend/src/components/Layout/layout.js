import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './layout.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExploreIcon from '@mui/icons-material/Explore';
import ForumIcon from '@mui/icons-material/Forum';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../../uni.svg';
import { Box } from '@mui/material';
import UserContext from '../../contexts/UserContext';

const DeafultLayout = ({ children }) => {
  const [user, setUser] = useContext(UserContext);

  const handleSignOut = () => {
    console.log('DeafultLayout#handleSignOut', user);
    setUser(null);
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
              <NavLink to="/discover">
                  <div className="nav-item">
                      <ExploreIcon className="nav-logo" style={{ marginTop:5, fontSize:30}}/>
                      <span className="nav-text">Discover</span>
                  </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">
                  <div className="nav-item">
                      <AccountBoxIcon className="nav-logo" style={{ marginTop:5, fontSize:30}}/>
                      <span className="nav-text">Dashboard</span>
                  </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/forum">
                  <div className="nav-item">
                      <ForumIcon className="nav-logo" style={{ marginTop:5, fontSize:30}}/>
                      <span className="nav-text">Forum</span>
                  </div>
              </NavLink>
            </li>
            <li>
              <button className="signout" onClick={handleSignOut}>
                <div className="nav-item">
                    <LogoutIcon className="nav-logo" style={{fontSize:30}}/>
                    <span className="btn-text">Sign Out</span>
                </div>
              </button>
            </li>
            <li>
              <Box sx={{width: 250, height: 140, borderRadius: 2, bgcolor: '#E16262'}}>
                <div className='box-content'>
                  <span className='box-text'>Your Score</span>
                  <Box sx={{width: 190, height: 50, borderRadius: 2, bgcolor: 'white'}}>
                    <div className='box-content'>
                      <span className='pt-text'>{user ? user.points : 0} pts</span>
                    </div>
                  </Box>
                </div>
              </Box>
            </li>
          </ul>
        </nav>
        
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default DeafultLayout;
