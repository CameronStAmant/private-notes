import React, { useRef } from 'react';
import TinyMCE from './TinyMCE';

function NewNote() {
  const editorRef = useRef(null);
  const getData = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div>
      <TinyMCE editorRef={editorRef} />
      <button onClick={getData}>Save</button>
    </div>
  );
}

export default NewNote;
