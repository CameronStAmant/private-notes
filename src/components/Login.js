import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../const';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };

    const response = await fetch(`${baseUrl}/login`, requestOptions);
    if (response.status === 201) {
      navigate('../notebook');
    } else {
      setShowPrompt(true);
      setInterval(() => {
        setShowPrompt(false);
      }, 4000);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Log In" />
      </form>
      <div id={showPrompt ? '' : 'invalidPrompt'}>
        Invalid username or password.
      </div>
    </div>
  );
};

export default Login;
