import React, { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import logIn from '../../contracts/login';
import './Login.css';  // Ensure you have the necessary CSS for styling

export default function Login() {
    const [user, setUser] = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login#handleSubmit', user)
        if (email && password) {
            logIn({ email, password })
                .then((user) => {
                    console.log('Got user', user);
                    if (!user.token) {
                        alert("Email or password is incorrect");
                        return
                    }
                    setUser(user);
                })
                .catch((err) => {
                    console.error("Got error", err)
                    alert("Something went wrong, please try again");
                })
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
