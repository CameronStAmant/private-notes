import React, { useRef } from 'react';
import TinyMCE from './TinyMCE';
import SideNav from './SideNav';
import './NewNote.css';

function NewNote() {
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
      <div className="mainContent">
        <TinyMCE editorRef={editorRef} />
        <button onClick={getData}>Save</button>
      </div>
    </div>
  );
}

export default NewNote;
