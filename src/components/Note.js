import './Note.css';
import SideNav from './SideNav';
import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import baseUrl from '../const';

function Note() {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  let { id } = useParams();

  const createMarkup = () => {
    return { __html: body };
  };

  useEffect(() => {
    const getNoteDetails = async () => {
      const response = await fetch(baseUrl + '/notebook/' + id);
      const responseData = await response.json();
      setTitle(responseData.note.title);
      setBody(responseData.note.body);
    };
    getNoteDetails();
  });

  return (
    <div>
      <div className="topNav">
        <SideNav />
        <div>{title}</div>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
}

export default Note;
