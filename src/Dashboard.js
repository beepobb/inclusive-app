import React from 'react';
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import './Dashboard.css';
import Discover from './Discover';
import Forum from './Forum';
import DefaultDashboardContent from './DefaultDashboardContent';


export default function Dashboard() {
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
                        <li><NavLink to="/dashboard/" activeClassName="active">Dashboard</NavLink></li>
                        <li><NavLink to="/dashboard/discover" activeClassName="active">Discover</NavLink></li>
                        <li><NavLink to="/dashboard/forum" activeClassName="active">Forum</NavLink></li>
                    </ul>
                </nav>
            </aside>
            <main className="main-content">
            <header className="header">
                <button onClick={handleSignOut}>Sign Out</button>
            </header>
                <Routes>
                    <Route path="/" element={<DefaultDashboardContent />} />
                    <Route path="discover" element={<Discover />}/>
                    <Route path="forum" element={<Forum />} />
                </Routes>
            </main>
        </div>
    );
}
