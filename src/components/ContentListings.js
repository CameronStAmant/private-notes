import './ContentListings.css';
import ContentCard from './ContentCard';
import React, { useState, useEffect } from 'react';
import baseUrl from '../const';
import { useSelector } from 'react-redux';

const ContentListings = () => {
  const [notes, setNotes] = useState(null);
  const reload = useSelector((state) => state.selected.value);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch(baseUrl + '/notebook/');
      const listings = await response.json();

      const listNotes = listings.map((note) => {
        return <ContentCard note={note} key={note._id} />;
      });

      setNotes(listNotes);
    };
    fetchNotes();
  }, [reload]);

  return <ul className="contentListings">{notes}</ul>;
};

export default ContentListings;
