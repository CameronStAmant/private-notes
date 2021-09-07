import React, { useState, useRef } from 'react';
import TinyMCE from './TinyMCE';
import SideNav from './SideNav';
import './NewNote.css';

function NewNote() {
  const [visibility, setVisibility] = useState(false);

  const editorRef = useRef(null);
  const getData = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const openNav = () => {
    setVisibility(!visibility);
  };

  return (
    <div>
      <div className="topNav">
        <SideNav visibility={visibility} openNav={openNav} />
      </div>
      <div
        className={visibility ? 'mainContentNavOpened' : 'mainContentNavClosed'}
      >
        <TinyMCE editorRef={editorRef} />
        <button onClick={getData}>Save</button>
      </div>
    </div>
  );
}

export default NewNote;
