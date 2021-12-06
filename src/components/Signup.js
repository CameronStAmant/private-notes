import React, { useState } from 'react';
import baseUrl from '../const';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reEnteredPassword, setReEnteredPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === reEnteredPassword) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          username,
          password,
        }),
      };

      const response = await fetch(`${baseUrl}/signup`, requestOptions);
      if (response.status === 201) {
        history.push('/login');
      }
    } else {
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
      <label>Re-enter Password:</label>
      <input
        type="password"
        required
        value={reEnteredPassword}
        onChange={(e) => setReEnteredPassword(e.target.value)}
      />
      <input type="submit" value="Signup" />
    </form>
  );
};

export default Signup;
