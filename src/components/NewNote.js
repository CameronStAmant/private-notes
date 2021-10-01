import React, { useState, useRef } from 'react';
import TinyMCE from './TinyMCE';
import SideNav from './SideNav';
import { useSelector } from 'react-redux';
import baseUrl from '../const';
import './NewNote.css';

function NewNote() {
  const [title, setTitle] = useState(null);
  const view = useSelector((state) => state.nav.value);
  const editorRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        body: editorRef.current.getContent(),
      }),
    };
    await fetch(baseUrl + '/notebook/create', requestOptions);
  };

  return (
    <div>
      <div className="topNav">
        <SideNav />
      </div>
      <div className={view ? 'mainContentNavOpened' : 'mainContentNavClosed'}>
        <form>
          <label>Title</label>
          <input
            type="text"
            value={title ? title : ''}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Body</label>
          <TinyMCE editorRef={editorRef} />
          <button onClick={handleSubmit}>Save</button>
        </form>
      </div>
    </div>
  );
}

export default NewNote;
