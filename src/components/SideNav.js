import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

function SideNav() {
  const [visibility, setVisibility] = useState(false);

  const openNav = () => {
    setVisibility(!visibility);
  };

  return (
    <div id="sideNav">
      <span onClick={openNav}>&#9776;</span>
      <div id={visibility ? 'openNavi' : 'closeNav'}>
        <p id="navButton" onClick={openNav}>
          &times;
        </p>
        <ul>
          <li>
            <Link to="/">Home</Link>{' '}
          </li>
          <li>
            <Link to="/notebook">Notes</Link>
          </li>
          <li>Folders</li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
