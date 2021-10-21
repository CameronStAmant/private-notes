import React, { useState, useRef } from 'react';
import TinyMCE from './TinyMCE';
import SideNav from './SideNav';
import { useSelector } from 'react-redux';
import baseUrl from '../const';
import { useHistory, useLocation } from 'react-router-dom';
import './NewNote.css';

function NewNote() {
  const data = useLocation();
  const [title, setTitle] = useState(data.state ? data.state.title : null);
  const view = useSelector((state) => state.nav.value);
  const editorRef = useRef(null);
  const history = useHistory();

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
    const response = await fetch(baseUrl + '/notebook/create', requestOptions);
    const redirectUrl = await response.json();
    history.push(redirectUrl.url);
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
          <TinyMCE
            editorRef={editorRef}
            value={data.state ? data.state.body : ''}
          />
          <button onClick={handleSubmit}>Save</button>
        </form>
      </div>
    </div>
  );
}

export default NewNote;
