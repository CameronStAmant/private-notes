import React, { useState } from 'react';
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
          <li>Home</li>
          <li>Notes</li>
          <li>Folders</li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
