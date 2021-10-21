import './Notebook.css';
import SideNav from './SideNav';
import ContentListings from './ContentListings';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import baseUrl from '../const';
import React, { useState } from 'react';

function Notebook() {
  const view = useSelector((state) => state.nav.value);
  const selected = useSelector((state) => state.selected.value);
  const [refresh, setRefresh] = useState(false);

  const multiDelete = async () => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ids: selected,
      }),
    };
    await fetch(baseUrl + '/notebook/delete-many-notes', requestOptions);
    setRefresh(refresh ? false : true);
  };

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
        <button onClick={multiDelete}>Delete selected</button>
        <ContentListings refresh={refresh} />
      </div>
    </div>
  );
}

export default Notebook;
