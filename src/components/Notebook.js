import './Notebook.css';
import SideNav from './SideNav';
import ContentListings from './ContentListings';
import Button from './Button';
import { Link } from 'react-router-dom';

function Notebook() {
  return (
    <div>
      <div className="topNav">
        <SideNav />
        <p>Welcome to the notebook</p>
        <Link to="/notes/new">
          <Button wording="+" />
        </Link>
      </div>
      <ContentListings />
    </div>
  );
}

export default Notebook;
