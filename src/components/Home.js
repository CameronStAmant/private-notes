import './Home.css';
import Button from './Button';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div>
        <h1>Private Notes</h1>
        <p>Welcome to private notes.</p>
      </div>
      <div>
        <p>
          Private Notes is a privacy friendly notepad where you can jot down
          whatever is on your mind. Only you can read it.
        </p>
        <Link to="/login">
          <Button wording="Login" />
        </Link>
        <Link to="signup">
          <Button wording="Signup" />
        </Link>
        <Link to="/notebook">
          <Button wording="Go to Notebook" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
