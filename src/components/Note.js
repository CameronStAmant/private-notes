import './Note.css';
import SideNav from './SideNav';
import React, { useState, useEffect } from 'react';
import baseUrl from '../const';
import { useNavigate, Link, useLocation, useParams } from 'react-router-dom';

function Note() {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  let { id } = useParams();
  const navigate = useNavigate();
  let { location } = useLocation();

  const createMarkup = () => {
    return { __html: body };
  };

  const deleteNote = async () => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'applications/json',
        Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
      },
    };

    await fetch(`${baseUrl}/notebook/${id}`, requestOptions);
    navigate('/notebook/');
  };

  useEffect(() => {
    const getNoteDetails = async () => {
      const response = await fetch(`${baseUrl}/notebook/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
        },
      });
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
          to={{
            locationname: `${location}/edit`,
            state: { title: title, body: body },
          }}
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
