import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AddPost from './components/AddPost/AddPost';
import Discover from './components/Discover/Discover';
import Forum from './components/Forum/Forum';

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/dashboard/*" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/forum/new-post" element={<AddPost />} />
                <Route path="/discover" element={<Discover />} /> {/* Render Discover component */}
            </Routes>
        </Router>
    );
}
