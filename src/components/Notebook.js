import './Notebook.css';
import ContentListings from './ContentListings';
import React, { useState } from 'react';
import Navigation from './Navigation';

function Notebook() {
  return (
    <Navigation>
      <div>
        <p>Welcome to the notebook</p>
        <ContentListings />
      </div>
    </Navigation>
  );
}

export default Notebook;
