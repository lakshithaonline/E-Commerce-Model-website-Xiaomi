import React, { useState } from 'react';
import './Login.css';

type Notification = {
    type: 'success' | 'error';
    message: string;
};

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notification, setNotification] = useState<Notification | null>(null);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const hardcodedUsername = 'admin';
        const hardcodedPassword = 'admin123';

        if (username === hardcodedUsername && password === hardcodedPassword) {
            setNotification({ type: 'success', message: 'Login successful' });
            setUsername('');
            setPassword('');

            // Redirect to the Admin page using window.location
            window.location.href = '/admin'; // Replace '/admin' with the actual path
        } else {
            setNotification({ type: 'error', message: 'Invalid username or password' });
        }

        setTimeout(() => {
            setNotification(null);
        }, 5000);
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-header">Admin Login</h2>
                <form onSubmit={handleLogin} className="login-form">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                {notification && (
                    <div className={`notification ${notification.type}`}>
                        {notification.message}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
