import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

function SideNav(props) {
  // const [visibility, setVisibility] = useState(false);

  // const openNav = () => {
  //   setVisibility(!visibility);
  // };

  return (
    <div id="sideNav">
      <span onClick={props.openNav}>&#9776;</span>
      <div id={props.visibility ? 'openNavi' : 'closeNav'}>
        <p id="navButton" onClick={props.openNav}>
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
