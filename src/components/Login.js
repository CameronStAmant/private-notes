import React, { useState } from 'react';
import baseUrl from '../const';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    // console.log(await response.json());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Log In" />
    </form>
  );
};

export default Login;
