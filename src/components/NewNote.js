import React, { useRef } from 'react';
import TinyMCE from './TinyMCE';
import SideNav from './SideNav';
import { useSelector } from 'react-redux';
import './NewNote.css';

function NewNote() {
  const view = useSelector((state) => state.nav.value);

  const editorRef = useRef(null);
  const getData = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div>
      <div className="topNav">
        <SideNav />
      </div>
      <div className={view ? 'mainContentNavOpened' : 'mainContentNavClosed'}>
        <TinyMCE editorRef={editorRef} />
        <button onClick={getData}>Save</button>
      </div>
    </div>
  );
}

export default NewNote;
