import { useSelector } from 'react-redux';

import TopNav from './TopNav';
import SideNav from './SideNav';

const Navigation = (props) => {
  const view = useSelector((state) => state.nav.value);

  return (
    <div>
      <SideNav />
      <div className={view ? 'mainContentNavOpened' : 'mainContentNavClosed'}>
        <TopNav setReload={props.setReload} />
        {props.children}
      </div>
    </div>
  );
};

export default Navigation;
