import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Ensure you have the necessary CSS for styling

export default function Login({ setIsAuthenticated }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would normally send a request to your server to authenticate the user
        // For simplicity, we will assume the authentication is successful if both fields are filled

        if (email && password) {
            // Simulate an authentication process
            setIsAuthenticated(true);
            navigate('/discover');
        } else {
            alert("Please enter both email and password");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
