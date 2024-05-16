import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"; // Import BrowserRouter
import Navbar from "./navbar";
import Home from "./Home";
import Login from "./Login";
import Forum from "./Forum";
import "./App.css"; // Import the CSS file

const App = () => {
  return (
    <Router> {/* Wrap everything in Router */}
      <AppContent />
    </Router>
  );
};

const AppContent = () => { // Separate component to use useLocation
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  return (
    <div className={`app-container ${isLoginPage ? "login-background" : ""}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </div>
  );
};

export default App;
