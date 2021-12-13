import React, { useState } from 'react';
import baseUrl from '../const';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reEnteredPassword, setReEnteredPassword] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === reEnteredPassword) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
        },

        body: JSON.stringify({
          username,
          password,
        }),
      };

      const response = await fetch(`${baseUrl}/signup`, requestOptions);
      if (response.status === 201) {
        navigate('/login');
      } else {
        setShowPrompt(true);
        setInterval(() => {
          setShowPrompt(false);
        }, 4000);
      }
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
        <label>Re-enter Password:</label>
        <input
          type="password"
          required
          value={reEnteredPassword}
          onChange={(e) => setReEnteredPassword(e.target.value)}
        />
        <input type="submit" value="Signup" />
      </form>
      <div id={showPrompt ? '' : 'invalidPrompt'}>Username already in use.</div>
    </div>
  );
};

export default Signup;
