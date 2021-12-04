import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import baseUrl from '../const';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

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
      history.push('notebook');
    }
  };

  return (
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
  );
};

export default Login;
