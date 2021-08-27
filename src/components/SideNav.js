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
        <p>Home</p>
        <p>Notes</p>
        <p>Folders</p>
      </div>
    </div>
  );
}

export default SideNav;
