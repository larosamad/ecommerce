import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import "../css/LoginPage.css"
import RoundedButton from './RoundedButton';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
        await login(email, password);
        navigate('/products');
        } catch (error) {
        alert('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login">
        <div>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;
