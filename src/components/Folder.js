import React, { useState, useEffect } from 'react';
import baseUrl from '../const';
import { useParams } from 'react-router';
import ContentCard from './ContentCard';
import SideNav from './SideNav';
import Navigation from './Navigation';

const Folder = () => {
  const [noteList, setNoteList] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const GETNotes = async () => {
      const response = await fetch(`${baseUrl}/notebook/folders/${id}`);
      const responseData = await response.json();

      const notes = Object.values(responseData);

      const listNotes = notes[0].notes.map((note) => {
        return <ContentCard note={note} key={note._id} />;
      });

      setNoteList(listNotes);
    };
    GETNotes();
  }, [id]);

  return (
    <Navigation>
      <div>
        <ul>{noteList}</ul>
      </div>
    </Navigation>
  );
};

export default Folder;
