import './Notebook.css';
import ContentListings from './ContentListings';
import React, { useState } from 'react';
import Navigation from './Navigation';

function Notebook() {
  const [reload, setReload] = useState(new Date());

  return (
    <Navigation setReload={() => setReload(new Date())}>
      <div>
        <p>Welcome to the notebook</p>
        <ContentListings reload={reload} />
      </div>
    </Navigation>
  );
}

export default Notebook;
