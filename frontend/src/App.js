import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AddPost from './components/AddPost/AddPost';
import Discover from './components/Discover/Discover';
import Forum from './components/Forum/Forum';
import UserContext, { UserProvider } from './contexts/UserContext';
 
function AppRoutes() {
    const [user] = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('HomeRoutes#useEffect', user)
        if (user !== null) {
            navigate('/discover');
        } else {
            navigate('/login');
        }
    }, [user]);

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/forum/new-post" element={<AddPost />} />
            <Route path="/discover" element={<Discover />} />
        </Routes>
    )
}

export default function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </UserProvider>
    );
}
