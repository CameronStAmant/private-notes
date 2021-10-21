import './Note.css';
import SideNav from './SideNav';
import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import baseUrl from '../const';
import { useHistory, Link, useRouteMatch } from 'react-router-dom';

function Note() {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  let { id } = useParams();
  const history = useHistory();
  let { url } = useRouteMatch();

  const createMarkup = () => {
    return { __html: body };
  };

  const deleteNote = async () => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'applications/json',
      },
    };

    await fetch(baseUrl + '/notebook/' + id, requestOptions);
    history.push('/notebook/');
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
        <Link
          to={{ pathname: `${url}/edit`, state: { title: title, body: body } }}
        >
          <button>Edit</button>
        </Link>
        <button onClick={deleteNote}>Delete</button>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
}

export default Note;
