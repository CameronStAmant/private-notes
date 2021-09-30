import './Notebook.css';
import SideNav from './SideNav';
import ContentListings from './ContentListings';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Notebook() {
  const view = useSelector((state) => state.nav.value);

  return (
    <div>
      <div className="topNav">
        <SideNav />
      </div>
      <div className={view ? 'mainContentNavOpened' : 'mainContentNavClosed'}>
        <p>Welcome to the notebook</p>
        <Link to="/notes/new">
          <Button wording="+" />
        </Link>
        <ContentListings />
      </div>
    </div>
  );
}

export default Notebook;
