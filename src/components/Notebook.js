import './Notebook.css';
import SideNav from './SideNav';
import ContentListings from './ContentListings';

function Notebook() {
  return (
    <div>
      <SideNav />
      <p>Welcome to the notebook</p>
      <ContentListings />
    </div>
  );
}

export default Notebook;
