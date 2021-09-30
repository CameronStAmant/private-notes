import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { viewable } from '../features/counter/navigationSlice';
import './SideNav.css';

function SideNav() {
  const view = useSelector((state) => state.nav.value);
  const dispatch = useDispatch();

  return (
    <div id="sideNav">
      <span onClick={() => dispatch(viewable())}>&#9776;</span>
      <div id={view ? 'openNavi' : 'closeNav'}>
        <p id="navButton" onClick={() => dispatch(viewable())}>
          &times;
        </p>
        <ul>
          <li>
            <Link to="/">Home</Link>
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
