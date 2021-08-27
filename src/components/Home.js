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
        <Button wording="Login" />
        <Button wording="Signup" />
        <Link to="/notebook">
          <Button wording="Go to Notebook" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
